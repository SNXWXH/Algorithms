const solution = (maps) => {
    // 상하좌우 순서
    const dx = [0, 0, -1, 1];
    const dy = [-1, 1, 0, 0];
    let start = [0, 0];

    // 시작위치 찾기
    for (let i = 0; i < maps.length; i++) {
        for (let j = 0; j < maps[0].length; j++) {
            if (maps[i][j] === 'S') start = [j, i];
        }
    }

    const dp = [...new Array(maps.length)].map(_ => [...new Array(maps[0].length)].fill(0));
    const queue = [[...start, false, 0]];
    dp[start[1]][start[0]]++;

    while (queue.length) {
        const [x, y, laver, cnt] = queue.shift();

        for (let k = 0; k < 4; k++) {
            const [nx, ny] = [x + dx[k], y + dy[k]];

            // 경계 체크 및 장애물 확인
            if (0 <= nx && nx < maps[0].length && 0 <= ny && ny < maps.length && maps[ny][nx] !== 'X') {
                // 레버 사용한 상태에서 E에 도달하면 결과 반환
                if (laver && maps[ny][nx] === 'E') return cnt + 1;
                // 이미 방문한 경우
                if (laver && dp[ny][nx] > 1) continue;
                if (!laver && dp[ny][nx] > 0) continue;

                dp[ny][nx]++;
                queue.push([nx, ny, maps[ny][nx] === 'L' ? true : laver, cnt + 1]);
            }
        }
    }

    // 도달할 수 없는 경우
    return -1;
}
