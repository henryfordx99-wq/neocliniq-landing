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

  const payload = JSON.stringify({
    firstName,
    lastName,
    email,
    phone,
    clinicName: clinicName || "",
    lang: lang?.toUpperCase() || "FR",
    submittedAt: new Date().toISOString(),
  });

  try {
    // Google Apps Script returns a 302 redirect after executing doPost.
    // With redirect: "follow" (default), fetch converts POST→GET on the redirect,
    // which hits a 405 on the redirected URL. The script still executes doPost
    // on the initial request, but the follow-up GET fails.
    //
    // Using redirect: "manual" lets us capture the 302 as a successful response.
    // The 302 itself confirms doPost ran and returned a result.
    const res = await fetch(SHEETS_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: payload,
      redirect: "manual",
    });

    // 302 = Google executed doPost and is redirecting to the response
    // 200 = Direct success (unlikely for Apps Script but handle it)
    if (res.status === 302 || res.status === 200) {
      console.log("Waitlist signup sent to Google Sheet:", { firstName, lastName, email });
    } else {
      console.error("Unexpected response from Sheets webhook:", res.status, res.statusText);
    }
  } catch (err) {
    console.error("Sheets webhook failed:", err);
    // Don't fail the user — still return success
  }

  return NextResponse.json({ success: true });
}
