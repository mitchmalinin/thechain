import { headers } from "next/headers"
import { NextResponse } from "next/server"

export async function POST(request) {
  try {
    const json = await request.json()
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-luma-api-key": process.env.LUMA_API_KEY,
      },
    }

    let response = await fetch(
      `https://api.lu.ma/public/v1/calendar/list-events?after=${json.date}&series_mode=sessions`,
      options
    )

    response = await response.json()

    let json_response = {
      status: "success",
      data: response.entries,
    }

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
