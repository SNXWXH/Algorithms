function solution(number, limit, power) {
    let ans = 0;

    for (let i = 1; i <= number; i++) {
        let count = 0;

        for (let j = 1; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                count++;
                if (j !== i / j) count++;
            }
        }
        ans += (count > limit) ? power : count;
    }

    return ans;
}
