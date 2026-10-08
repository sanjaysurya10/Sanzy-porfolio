import { NextRequest, NextResponse } from "next/server";

interface ContactSubmission {
  name: string;
  email: string;
  message: string;
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    console.error("Supabase insert failed: SUPABASE_URL or SUPABASE_ANON_KEY is not set");
    return NextResponse.json({ success: false }, { status: 500 });
  }

  try {
    const { name, email, message } = (await req.json()) as ContactSubmission;

    const response = await fetch(`${supabaseUrl}/rest/v1/contact_submissions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: supabaseAnonKey,
        Authorization: `Bearer ${supabaseAnonKey}`,
        Prefer: "return=minimal",
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (response.ok) {
      console.info(`Contact saved to Supabase: ${name} <${email}>`);
      return NextResponse.json({ success: true });
    }

    console.error(`Supabase insert failed: ${response.status} ${await response.text()}`);
    return NextResponse.json({ success: false }, { status: 500 });
  } catch (error) {
    console.error("Supabase insert failed:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
