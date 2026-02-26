import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const BUSINESS_EMAIL = "joshuams128@gmail.com";

export async function POST(request: NextRequest) {
  try {
    console.log("API Key exists:", !!process.env.RESEND_API_KEY);
    console.log("API Key:", process.env.RESEND_API_KEY?.substring(0, 10) + "...");

    const { name, email, service, details } = await request.json();
    console.log("Form data received:", { name, email, service });

    // Validate required fields
    if (!name || !email || !service || !details) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Send email to business owner
    console.log("Sending email to:", BUSINESS_EMAIL);
    const result = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: BUSINESS_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service Type:</strong> ${service}</p>
        <p><strong>Project Details:</strong></p>
        <p>${details.replace(/\n/g, "<br>")}</p>
      `,
    });

    console.log("Resend result:", result);

    if (result.error) {
      console.error("Resend error:", result.error);
      return NextResponse.json(
        { error: JSON.stringify(result.error) },
        { status: 500 }
      );
    }

    // Note: Confirmation email to user requires a verified domain in Resend
    // For now, only send to business email in test mode

    return NextResponse.json({ success: true, data: result.data });
  } catch (error) {
    console.error("Email error:", error);
    const errorMessage =
      error instanceof Error ? error.message : JSON.stringify(error);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
