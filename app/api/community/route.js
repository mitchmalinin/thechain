import airtable from "airtable"
import { NextResponse } from "next/server"

import { Resend } from "resend"

import { EmailTemplate } from "@/app/components/emailTemplate"
import { NotifyAdminEmail } from "@/app/components/notifyAdminEmail"

const RESEND = new Resend(process.env.RESEND_API_KEY)
const COMMUNITY_BASE_ID = process.env.AIRTABLE_COMMUNITY_BASE_ID

airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: process.env.AIRTABLE_TOKEN,
})

const base = airtable.base(COMMUNITY_BASE_ID)
export const CommunityApplicationsTable = base("Applications")

const notifyApplicantEmail = async (toEmail, firstName) => {
  const SUBJECT = "The Chain Miami - Application Received"
  const FROM_EMAIL = "Monica <hello@thechain.miami>"

  try {
    const data = await RESEND.emails.send({
      from: FROM_EMAIL,
      to: [toEmail],
      subject: SUBJECT,
      react: EmailTemplate({ firstName: firstName }),
    })
  } catch (err) {
    console.log(err)
  }
}

const notifyAdminEmail = async (firstName, recordId) => {
  const SUBJECT = "The Chain Miami - New Applicant"
  const FROM_EMAIL = "Notifications <hello@thechain.miami>"

  try {
    const data = await RESEND.emails.send({
      from: FROM_EMAIL,
      to: ["monica@thechain.miami"],
      subject: SUBJECT,
      react: NotifyAdminEmail({ firstName: firstName, recordId: recordId }),
    })
  } catch (err) {
    console.log(err)
  }
}

export async function POST(request) {
  try {
    const json = await request.json()
    let record = await CommunityApplicationsTable.create(json)
    let json_response = {
      status: "success",
    }
    console.log(record)

    await notifyApplicantEmail(json.Email, json.Name)
    await notifyAdminEmail(json.Name, record.id)

    return new NextResponse(JSON.stringify(json_response), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    })
  } catch (err) {
    console.log(err)
    let error_response = {
      status: "error",
    }
    return new NextResponse(JSON.stringify(error_response), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
