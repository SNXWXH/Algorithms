function solution(N, stages) {
    const SORT_STAGE = [...stages].sort((a,b) => a-b)
    let total_person = SORT_STAGE.length;
    let fail_percent = [];
    
    for(let i = 1; i <= N; i++){
        const FAIL_NUM = SORT_STAGE.filter((v) => v === i).length;
        const RATE = total_person === 0 ? 0 : FAIL_NUM / total_person;
        
        fail_percent.push({ stage: i, rate: RATE });
        total_person -= FAIL_NUM;
    }

    fail_percent.sort((a, b) => {
        if (b.rate === a.rate) return a.stage - b.stage;
        return b.rate - a.rate;
    });
    
    console.log(fail_percent)
    

    return fail_percent.map(v => v.stage);
}