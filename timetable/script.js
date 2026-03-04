document.addEventListener('DOMContentLoaded', () => {
    const stationSelect = document.getElementById('station-select');
    const directionSelect = document.getElementById('direction-select');
    const currentStationElement = document.getElementById('current-station');
    const timetableBody = document.querySelector('#timetable-table tbody');

    
    // 2. 駅のセレクトボックスを埋める関数
    function populateStationSelect(stations) {
        stationSelect.innerHTML = ''; 
        stations.forEach(station => {
            const option = document.createElement('option');
            option.value = station;
            option.textContent = station + '駅';
            stationSelect.appendChild(option);
        });
        if (stations.length > 0) {
             stationSelect.value = stations[0];
        }
    }

    // 3. 時刻表を表示する関数
    function displayTimetable() {
        const selectedStation = stationSelect.value;
        const selectedDirection = directionSelect.value;

        currentStationElement.textContent = selectedStation ? selectedStation + '駅' : '駅を選択してください';
        timetableBody.innerHTML = ''; 

        if (!selectedStation) return;

        const stationData = timetableData.timetable[selectedStation];
        
        if (!stationData || !stationData[selectedDirection]) {
            timetableBody.innerHTML = `<tr><td colspan="2">${selectedStation}駅 ${selectedDirection === 'up' ? '上り' : '下り'}のデータはありません。</td></tr>`;
            return;
        }

        const currentTimetable = stationData[selectedDirection];
        
        // 時刻表を時系列順に表示
        for (let hour = 0; hour <= 23; hour++) {
            const hourKey = String(hour);
            if (currentTimetable[hourKey] && currentTimetable[hourKey].length > 0) {
                const tr = document.createElement('tr');
                
                // 時のセル
                const hourTd = document.createElement('td');
                hourTd.textContent = hourKey;
                tr.appendChild(hourTd);

                // 分のセル
                const minuteTd = document.createElement('td');
                currentTimetable[hourKey].forEach(minuteStr => {
                    const minuteSpan = document.createElement('span');
                    minuteSpan.className = 'minute-item';
                    minuteSpan.textContent = minuteStr;
                    minuteTd.appendChild(minuteSpan);
                });
                tr.appendChild(minuteTd);

                timetableBody.appendChild(tr);
            }
        }
        
        if (timetableBody.innerHTML === '') {
            timetableBody.innerHTML = '<tr><td colspan="2">運行時間外か、データがありません。</td></tr>';
        }
    }

    // 4. イベントリスナーを設定
    stationSelect.addEventListener('change', displayTimetable);
    directionSelect.addEventListener('change', displayTimetable);

    // 初期化
    populateStationSelect(timetableData.stations);
    displayTimetable();
});