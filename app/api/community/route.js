import { NextResponse } from 'next/server';
import airtable from 'airtable';

const COMMUNITY_BASE_ID = process.env.AIRTABLE_COMMUNITY_BASE_ID;

airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: process.env.AIRTABLE_TOKEN
});

const base = airtable.base(COMMUNITY_BASE_ID);
export const CommunityApplicationsTable = base('Applications');

export async function POST(request) {
  try {
    const json = await request.json();
    await CommunityApplicationsTable.create(json);
    let json_response = {
      status: 'success'
    };

    return new NextResponse(JSON.stringify(json_response), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    let error_response = {
      status: 'error'
    };
    return new NextResponse(JSON.stringify(error_response), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
