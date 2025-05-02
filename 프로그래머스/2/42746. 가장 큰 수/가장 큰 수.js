// function solution(numbers) {
//     let sorted = numbers.map(String).sort((a,b)=> b[0] - a[0] || b[1] - a[1])
    
//     return sorted.join("")
// }

function solution(numbers) {
    let answer = numbers.map(String)
        .sort((a, b) => (b + a).localeCompare(a + b))
        .join('');
    
    // 이렇게 하니까 반례 [0,0,0] => "0"에서 걸림
    // return answer
    
    if (answer.startsWith('0')) return '0';
    return answer;
}
