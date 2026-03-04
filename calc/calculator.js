function calculate() {
    // 1. 入力値の取得
    const totalAmount = parseInt(document.getElementById('totalAmount').value);
    const peopleCount = parseInt(document.getElementById('peopleCount').value);
    const roundingType = document.getElementById('roundingType').value;
    const resultArea = document.getElementById('resultArea');

    // 2. エラーチェック
    if (isNaN(totalAmount) || totalAmount <= 0) {
        resultArea.innerHTML = '<p style="color: red;">合計金額を正しく入力してください。</p>';
        return;
    }
    if (isNaN(peopleCount) || peopleCount <= 1) {
        resultArea.innerHTML = '<p style="color: red;">人数を2人以上で入力してください。</p>';
        return;
    }

    // 3. 一人当たりの基本金額を計算
    let amountPerPerson = totalAmount / peopleCount;
    let remainder = 0; // 端数（余り）
    let everyonePays = 0; // 全員が支払う金額
    let leaderPays = 0; // 幹事（または代表者）が支払う金額

    // 4. 端数処理
    switch (roundingType) {
        case 'none':
            // 1円単位までそのまま（小数点以下は切り捨て）
            everyonePays = Math.floor(amountPerPerson);
            
            // 全員が支払った合計を計算し、残りを幹事に回す
            const totalPaidByOthers = everyonePays * peopleCount;
            leaderPays = totalAmount - totalPaidByOthers;
            break;

        case 'ceil10': // 10円単位で切り上げ
        case 'ceil100': // 100円単位で切り上げ
        case 'floor10': // 10円単位で切り捨て
            
            const unit = roundingType.endsWith('10') ? 10 : 100; // 単位 (10 or 100)
            
            if (roundingType.startsWith('ceil')) {
                // 切り上げ (ceil)
                everyonePays = Math.ceil(amountPerPerson / unit) * unit;
            } else {
                // 切り捨て (floor)
                everyonePays = Math.floor(amountPerPerson / unit) * unit;
            }
            
            // 全員が支払った合計と、幹事の調整額を計算
            const totalPaidByAll = everyonePays * peopleCount;
            leaderPays = totalAmount - totalPaidByAll;
            
            // 注意: 切り捨ての場合、幹事の支払いが不足（マイナス）になる可能性があるため、
            // その場合は幹事の支払額を0として、全員の支払額を調整する必要があります。
            // ここではシンプルに、幹事が不足分を負担（追徴）またはお釣りを受け取るものとします。
            
            break;
    }

    // 5. 結果の表示
    const everyonePaysFormatted = everyonePays.toLocaleString();
    const leaderPaysFormatted = leaderPays.toLocaleString();

    let resultHTML = `
        <p>一人当たりの支払額:</p>
        <p><strong>${everyonePaysFormatted} 円</strong></p>
        <hr style="border-style: dashed; border-color: #ddd;">
        <p>残りの調整額 (幹事支払額):</p>
        <p><strong>${leaderPaysFormatted} 円</strong></p>
    `;
    
    // 幹事の支払額が0未満の場合の補足メッセージ
    if (leaderPays < 0) {
        // 例: 合計5800円、3人で100円切り上げ（2000円/人）の場合
        // 2000*3 = 6000円を回収。総額5800円との差額 -200円は幹事が皆に返すお釣りとなる。
        const changeAmount = Math.abs(leaderPays).toLocaleString();
        resultHTML += `<p style="color: #007bff; font-size: 14px; margin-top: 10px;">※この金額 (${changeAmount} 円) は、全員が支払った合計が総額を超えたため、幹事が皆に返すお釣りになります。</p>`;
    } else if (leaderPays > 0 && roundingType !== 'none') {
        // 例: 10円切り捨ての場合など、端数が幹事負担となる。
        resultHTML += `<p style="color: #6a0dad; font-size: 14px; margin-top: 10px;">※この金額 (${leaderPaysFormatted} 円) は、端数を切り捨てたため、幹事が追加で負担する金額になります。</p>`;
    }


    resultArea.innerHTML = resultHTML;
}

// ページ読み込み時に一度計算関数を実行（初期値の表示）
window.onload = calculate;