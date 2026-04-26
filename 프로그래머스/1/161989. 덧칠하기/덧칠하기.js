function solution(n, m, section) {
    let flag = 0;
    let cnt = 0;
    for (const e of section) {
        if (e >= flag) {
            flag = e + m;
            cnt++;
        }
    }
    return cnt;
}