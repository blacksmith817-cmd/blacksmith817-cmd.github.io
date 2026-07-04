// Google 시트에 바인딩된 Apps Script(확장 프로그램 > Apps Script)에 그대로 붙여넣으세요.
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("submissions")
    || SpreadsheetApp.getActiveSpreadsheet().insertSheet("submissions");

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
