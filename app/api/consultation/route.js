import airtable from 'airtable'
import { NextResponse } from 'next/server'

const CONSULTATION_BASE_ID = process.env.AIRTABLE_CONSULTATION_BASE_ID

airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: process.env.AIRTABLE_TOKEN,
})

const base = airtable.base(CONSULTATION_BASE_ID)
export const ConsultationApplicationsTable = base('Applications')

export async function POST(request) {
  try {
    const json = await request.json()
    await ConsultationApplicationsTable.create(json)
    let json_response = {
      status: 'success',
    }

    return new NextResponse(JSON.stringify(json_response), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (err) {
    console.log(err)
    let error_response = {
      status: 'error',
    }
    return new NextResponse(JSON.stringify(error_response), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
