import { NextResponse } from 'next/server';

import { headers } from 'next/headers';

import jsonwebtoken from 'jsonwebtoken';
import airtable from 'airtable';

const COMMUNITY_BASE_ID = process.env.AIRTABLE_COMMUNITY_BASE_ID;

airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: process.env.AIRTABLE_TOKEN
});

const base = airtable.base(COMMUNITY_BASE_ID);
export const CommunityApplicationsTable = base('Applications');

const fetchSubmission = async (wallet) => {
  const response = await CommunityApplicationsTable.select({
    fields: ['ID', 'Wallet']
  }).all();

  let filteredRes = response.filter(
    (res) => res.fields['Wallet'].toLowerCase() === wallet.toLowerCase()
  );

  return filteredRes[0] ? filteredRes[0].fields : null;
};

export async function POST(request) {
  const headersList = headers();
  const authorization = headersList.get('authorization');
  const token = authorization && authorization.split(' ')[1];

  if (token === '') {
    return new NextResponse(JSON.stringify({ status: 'Not authorized' }), {
      status: 403,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    jsonwebtoken.verify(token, process.env.JWT_SECRET);
    try {
      const json = await request.json();

      let submission = await fetchSubmission(json.address);

      let json_response = {
        status: submission
      };

      return new NextResponse(JSON.stringify(json_response), {
        status: 201,
        headers: { 'Content-Type': 'application/json' }
      });
    } catch (err) {
      console.log(err);
      let error_response = {
        status: 'error'
      };
      return new NextResponse(JSON.stringify(error_response), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  } catch (err) {
    return new NextResponse(JSON.stringify({ status: 'Not authorized' }), {
      status: 403,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
