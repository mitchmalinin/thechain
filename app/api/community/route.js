import { NextResponse } from 'next/server';
import airtable from 'airtable';
import jsonwebtoken from 'jsonwebtoken';

import { headers } from 'next/headers';
import { Resend } from 'resend';

import { EmailTemplate } from '@/app/components/emailTemplate';

const RESEND = new Resend(process.env.RESEND_API_KEY);
const COMMUNITY_BASE_ID = process.env.AIRTABLE_COMMUNITY_BASE_ID;

airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: process.env.AIRTABLE_TOKEN
});

const base = airtable.base(COMMUNITY_BASE_ID);
export const CommunityApplicationsTable = base('Applications');

const tryMail = async (toEmail, firstName) => {
  const SUBJECT = 'The Chain Miami - Application Received';
  const FROM_EMAIL = 'Monica <hello@thechain.miami>';

  try {
    const data = await RESEND.emails.send({
      from: FROM_EMAIL,
      to: [toEmail],
      subject: SUBJECT,
      react: EmailTemplate({ firstName: firstName })
    });
  } catch (err) {
    console.log(err);
  }
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
      await CommunityApplicationsTable.create(json);
      let json_response = {
        status: 'success'
      };

      tryMail(json.Email, json.Name);

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
