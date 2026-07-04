# 비밀결사단 홈페이지

GitHub Pages로 배포되는 다크웹 터미널 컨셉 랜딩 페이지. (`blacksmith817-cmd.github.io`)

## 구글 시트 연동 (입단 폼 제출 저장)

대상 시트: https://docs.google.com/spreadsheets/d/10rNtp_Q2PJ1UN1m8BYo8nN4sHIPXTLoM2cHs1tLc7IM/edit

`apps-script/Code.gs`는 이 시트의 ID(`SPREADSHEET_ID`)를 이미 하드코딩해뒀습니다. Apps Script 배포는 Google 계정 인증이 필요한 단계라 직접 진행해주셔야 합니다.

1. 위 시트를 열고 메뉴에서 **확장 프로그램 > Apps Script**를 엽니다.
2. 기본 `Code.gs` 내용을 지우고 이 저장소의 `apps-script/Code.gs` 내용을 그대로 붙여넣습니다.
3. 우측 상단 **배포 > 새 배포**를 클릭합니다.
   - 유형: **웹 앱**
   - 실행 계정: **나**
   - 액세스 권한이 있는 사용자: **모든 사용자**
4. 처음 배포 시 권한 승인 팝업(Google 계정 인증)이 뜨면 승인합니다.
5. 배포 후 나오는 **웹 앱 URL** (`https://script.google.com/macros/s/.../exec`)을 복사해서 저에게 알려주시거나, 직접 `script.js` 상단의 `GAS_URL` 값에 붙여넣고 커밋/푸시하세요.
6. 반영되면 폼 제출 시 시트에 `submissions` 탭이 자동 생성되고 이름/음모론/시각이 한 행씩 쌓입니다.

스크립트를 수정한 뒤에는 **배포 > 배포 관리 > 편집(연필 아이콘) > 새 버전**으로 다시 배포해야 변경사항이 반영됩니다.
