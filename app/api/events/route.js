import { NextResponse } from 'next/server';
import jsonwebtoken from 'jsonwebtoken';
import { headers } from 'next/headers';

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
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'x-luma-api-key': process.env.LUMA_API_KEY
        }
      };

      let response = await fetch(
        `https://api.lu.ma/public/v1/calendar/list-events?after=${json.date}&series_mode=sessions`,
        options
      );

      response = await response.json();

      let json_response = {
        status: 'success',
        data: response.entries
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
