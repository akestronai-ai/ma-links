import { NextResponse } from "next/server"
import { processEmailDispatch } from "@/lib/emailHandler"

/**
 * Route Handler for /api/send-email
 * Server-side SMTP dispatch via nodemailer (Node.js runtime)
 */
export async function POST(request: Request) {
  try {
    const payload = await request.json()
    const result = await processEmailDispatch(payload)
    return NextResponse.json(result)
  } catch (error: any) {
    console.error("[API send-email error]:", error)
    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Internal Server Error",
      },
      { status: 500 }
    )
  }
}
