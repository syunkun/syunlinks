/**
 * ウェブアプリの表示設定
 */
function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
      .setTitle('JR停車位置検索システム')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/**
 * 初期化データ取得
 * 車両数はスプレッドシートを参照せず、固定値を返します。
 */
function getInitialData() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getActiveSheet();
  
  // A2から最終行までの駅名リストを取得 [cite: 3]
  const lastRow = sheet.getLastRow();
  let stations = [];
  if (lastRow >= 2) {
    stations = sheet.getRange("A2:A" + lastRow).getValues().flat().filter(String);
  }
  
  // 車両数は固定リスト（"両"を除いた数値をシート代入用として管理）
  const cars = ["04", "06", "07", "08", "10", "12"];
  
  return {
    stations: stations,
    cars: cars
  };
}

/**
 * 検索処理
 * 代入先を U2, U3, U4 に限定し、W列などへの干渉を防ぎます。
 */
function executeSearch(params) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getActiveSheet();
  
  // 1. 指定されたセルのみに値を書き込む
  sheet.getRange("U2").setValue(params.dep); // 乗る駅
  sheet.getRange("U3").setValue(params.arr); // 降りる駅
  sheet.getRange("U4").setValue(params.car + "両"); // 車両数 ("04" など)
  
  // スプレッドシートの計算更新を待機
  SpreadsheetApp.flush();

  // 2. 結果の取得（U11〜W13） [cite: 3]
  const resultCols = ["U", "V", "W"];
  let resultHtml = "";

  resultCols.forEach(col => {
    const h1 = sheet.getRange(col + "11").getValue();
    const h2 = sheet.getRange(col + "12").getValue();
    const note = sheet.getRange(col + "13").getValue();
    
    if (h1 || h2) {
      resultHtml += `<div class="result-item">`;
      resultHtml += `<strong>乗車するホームは、△ ${h1} ${h2} です。</strong><br>`;
      resultHtml += `備考：${note}`;
      resultHtml += `</div>`;
    }
  });

  return resultHtml || "条件に一致するデータが見つかりませんでした。";
}
