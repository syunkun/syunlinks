document.addEventListener('DOMContentLoaded', () => {
    const stationSelect = document.getElementById('station-select');
    const directionSelect = document.getElementById('direction-select');
    const currentStationElement = document.getElementById('current-station');
    const timetableBody = document.querySelector('#timetable-table tbody');

    // 1. 時刻表データ (JSONの内容をJavaScriptのオブジェクトとして直接定義)
    const timetableData = {
        "stations": ["大津", "石山", "南草津", "草津"],
        "timetable": {
            "大津": {
                "up": {
                    "6": ["00(新快)", "15", "30(新快)", "45"],
                    "7": ["05(快)", "20", "40(新快)", "55"],
                    "8": ["10", "30(新快)", "50"]
                },
                "down": {
                    "6": ["05", "20(新快)", "40", "55(新快)"],
                    "7": ["10(快)", "30(新快)", "50"],
                    "8": ["05(新快)", "25", "45(新快)"]
                }
            },
            "草津": {
                "up": {
                    "6": ["10(快)", "25", "40(新快)", "55"],
                    "7": ["15(新快)", "30", "50(快)"],
                    "8": ["10(新快)", "30", "50"]
                },
                "down": {
                    "6": ["15(新快)", "30", "45(快)"],
                    "7": ["05(新快)", "25", "45(新快)"],
                    "8": ["00(快)", "20(新快)", "40"]
                }
            }
            // 他の駅のデータをここに追加... 
        }
    };
    
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