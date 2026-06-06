import { google } from "googleapis";

const SPREADSHEET_ID =
  process.env.GOOGLE_SPREADSHEET_ID ?? "1JLaPz-wt5eBACLvL1da8LHvWUX-LcLwot-jH2K_HRrs";

function getCredentials() {
  const json = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  if (!json) {
    throw new Error("GOOGLE_SERVICE_ACCOUNT_JSON is not configured.");
  }
  return JSON.parse(json) as Record<string, string>;
}

function getSheetsClient() {
  const auth = new google.auth.GoogleAuth({
    credentials: getCredentials(),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return google.sheets({ version: "v4", auth });
}

export async function appendSheetRow(sheetName: string, range: string, row: string[]) {
  const sheets = getSheetsClient();

  await sheets.spreadsheets.values.append({
    spreadsheetId: SPREADSHEET_ID,
    range: `${sheetName}!${range}`,
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values: [row],
    },
  });
}
