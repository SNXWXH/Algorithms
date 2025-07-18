function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1];

    const win = lottos.filter(v => win_nums.includes(v)).length;
    const lose = lottos.filter(v => v === 0).length;

    const max = win + lose;
    const min = win;

    return [rank[max], rank[min]];
}
