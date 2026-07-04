// Google Apps Script 웹앱 배포 후 발급되는 exec URL을 여기에 붙여넣으세요.
// apps-script/Code.gs 참고, README.md의 "구글 시트 연동" 단계 참고.
const GAS_URL = "https://script.google.com/macros/s/AKfycbxAFE8T7r8i_LfpLXwASw1QvnIE5vGIy_vPWrkdkiMy_oJyEeiDaBGjjuRcUEAIQ1xR/exec";

document.getElementById("visitTimestamp").textContent = new Date()
  .toISOString()
  .replace("T", " ")
  .slice(0, 19);
document.getElementById("visitCount").textContent = (4078 + new Date().getDate()).toLocaleString();

const form = document.getElementById("joinForm");
const result = document.getElementById("joinResult");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const fd = new FormData(form);
  const name = (fd.get("name") || "").toString().trim();
  const conspiracy = (fd.get("conspiracy") || "").toString().trim();

  if (GAS_URL && GAS_URL !== "YOUR_APPS_SCRIPT_WEB_APP_URL_HERE") {
    fetch(GAS_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        name,
        conspiracy,
        timestamp: new Date().toISOString(),
      }),
    }).catch(() => {
      // no-cors 응답은 읽을 수 없으므로 네트워크 자체 실패만 조용히 무시
    });
  }

  document.getElementById("resName").textContent = name;
  document.getElementById("resName2").textContent = name;
  document.getElementById("resConspiracy").textContent = conspiracy;

  form.hidden = true;
  result.hidden = false;
});
