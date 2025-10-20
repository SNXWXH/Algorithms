function solution(a, b, c, d) {
    const dice = [a, b, c, d];
    const counts = {};
    dice.forEach(num => counts[num] = (counts[num] || 0) + 1);
    const keys = Object.keys(counts).map(Number);
    
    // 네 개 모두 같을 때
    if (keys.length === 1) return 1111 * keys[0];
    else if (keys.length === 2) {
        const [p, q] = keys;
        const pCount = counts[p];
        const qCount = counts[q];
        // 세 개만 같을 때
        if (pCount === 3) return (10 * p + q) ** 2;
        else if (qCount === 3) return (10 * q + p) ** 2;
        // 두 개씩 같을 때
        else return (p + q) * Math.abs(p - q);
    } 
    else if (keys.length === 3) {
        // 두 개는 같고 나머지 두 개는 다를 때
        const others = keys.filter(k => counts[k] === 1);
        return others[0] * others[1];
    } 
    // 모두 다를 때
    else return Math.min(...dice);
}
