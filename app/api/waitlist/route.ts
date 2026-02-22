import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { firstName, lastName, email, phone, clinicName, lang } = body;

  if (!firstName || !lastName || !email || !phone) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const SHEETS_WEBHOOK_URL = process.env.SHEETS_WEBHOOK_URL;

  if (!SHEETS_WEBHOOK_URL) {
    // Dev mode — just log
    console.log("New waitlist signup:", { firstName, lastName, email, phone, clinicName, lang });
    return NextResponse.json({ success: true });
  }

  try {
    await fetch(SHEETS_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        phone,
        clinicName: clinicName || "",
        lang: lang?.toUpperCase() || "FR",
        submittedAt: new Date().toISOString(),
      }),
    });
  } catch (err) {
    console.error("Sheets webhook failed:", err);
    // Don't fail the user — still return success
  }

  return NextResponse.json({ success: true });
}
