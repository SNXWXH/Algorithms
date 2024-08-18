const solution = (triangle) => {
  let dp = triangle.slice(); // triangle 복사본

  // 삼각형의 바닥 바로 위 행부터 첫 번째 행까지 순회
  for (let i = triangle.length - 2; i > -1; i--) {
    for (let j = 0; j < dp[i].length; j++) {
      // 최대 합 계산
      dp[i][j] += Math.max(dp[i + 1][j], dp[i + 1][j + 1]);
    }
  }

  return dp[0][0];

}