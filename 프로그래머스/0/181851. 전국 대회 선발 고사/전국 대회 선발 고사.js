function solution(rank, attendance) {
    const ATTENDANCE_NUM = rank.filter((v, i) => attendance[i])
    const RANK_NUM = ATTENDANCE_NUM.sort((a,b) => a-b).slice(0,3)
    const IDX = RANK_NUM.map((v) => rank.indexOf(v))

    return 10000 * IDX[0] + 100 * IDX[1] + IDX[2]
}