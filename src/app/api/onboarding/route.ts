import { NextResponse } from "next/server";

const API_BASE =
  process.env.VISIONARIES_API_URL ?? "https://api.thevisionarywealthgroup.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const response = await fetch(`${API_BASE}/onboarding`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await response.text();
    return new NextResponse(data || null, {
      status: response.status,
      headers: {
        "Content-Type": response.headers.get("Content-Type") ?? "application/json",
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Could not submit onboarding form." },
      { status: 500 },
    );
  }
}
