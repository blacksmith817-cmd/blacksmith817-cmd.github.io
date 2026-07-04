// 대상 스프레드시트: https://docs.google.com/spreadsheets/d/10rNtp_Q2PJ1UN1m8BYo8nN4sHIPXTLoM2cHs1tLc7IM/edit
// 이 시트를 열고 확장 프로그램 > Apps Script에서 아래 코드를 그대로 붙여넣으세요.
const SPREADSHEET_ID = "10rNtp_Q2PJ1UN1m8BYo8nN4sHIPXTLoM2cHs1tLc7IM";

function doPost(e) {
  var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  var sheet = ss.getSheetByName("submissions") || ss.insertSheet("submissions");

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["timestamp", "name", "conspiracy", "received_at"]);
  }

  var p = e.parameter;
  sheet.appendRow([
    p.timestamp || "",
    p.name || "",
    p.conspiracy || "",
    new Date(),
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
