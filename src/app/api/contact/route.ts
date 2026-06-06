import { NextResponse } from "next/server";
import { appendSheetRow } from "@/lib/google-sheets";
import { cleanValue } from "@/lib/utils";

const CONTACTS_SHEET_NAME = "Contacts";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const requiredFields = ["firstName", "lastName", "email", "subject", "message"];
    const missingRequired = requiredFields.some((field) => !cleanValue(data[field]));

    if (missingRequired) {
      return NextResponse.json(
        { success: false, message: "Missing required fields." },
        { status: 400 },
      );
    }

    const row = [
      new Date().toISOString(),
      cleanValue(data.firstName),
      cleanValue(data.lastName),
      cleanValue(data.email),
      cleanValue(data.phone),
      cleanValue(data.subject),
      cleanValue(data.message),
    ];

    await appendSheetRow(CONTACTS_SHEET_NAME, "A:G", row);

    return NextResponse.json({
      success: true,
      message: "Contact data appended to Google Sheet.",
    });
  } catch (error) {
    console.error("Contact handler failed:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to append contact data to Google Sheet.",
        error: error instanceof Error ? error.message : "Unknown error.",
      },
      { status: 500 },
    );
  }
}
