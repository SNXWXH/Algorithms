// 이해됐으면 지우고 다시 풀어보기
function solution(arr) {
    const nums = [];
    const ops = [];

    for (let i = 0; i < arr.length; i++) {
        (i % 2 === 0) ? nums.push(Number(arr[i])) : ops.push(arr[i]);
    }

    const dpMax = Array(nums.length).fill().map(() => Array(nums.length).fill(-Infinity));
    const dpMin = Array(nums.length).fill().map(() => Array(nums.length).fill(Infinity));


    for (let i = 0; i < nums.length; i++) {
        dpMax[i][i] = nums[i];
        dpMin[i][i] = nums[i];
    }

    for (let len = 1; len < nums.length; len++) {
        for (let i = 0; i + len < nums.length; i++) {
            let j = i + len;

            for (let k = i; k < j; k++) {
                const op = ops[k];

                const candidates = [];

                if (op === '+') {
                    candidates.push(dpMax[i][k] + dpMax[k + 1][j]);
                    candidates.push(dpMin[i][k] + dpMin[k + 1][j]);
                } else {
                    candidates.push(dpMax[i][k] - dpMin[k + 1][j]);
                    candidates.push(dpMin[i][k] - dpMax[k + 1][j]);
                }
                dpMax[i][j] = Math.max(dpMax[i][j], ...candidates);
                dpMin[i][j] = Math.min(dpMin[i][j], ...candidates);
            }
        }
    }

    return dpMax[0][nums.length - 1];
}
