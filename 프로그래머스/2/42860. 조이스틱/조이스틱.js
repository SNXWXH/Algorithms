function solution(name) {
    const apla = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
                  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let ans = 0;
    
    for(let i = 0; i < name.length; i++){
        const idx = apla.indexOf(name[i]);
        ans += Math.min(idx, 26 - idx);
    }
    
    //A가 있는 경우 거치지 않아도 되는거 생각하기
    let move = name.length - 1;

    for (let i = 0; i < name.length; i++) {
        let next = i + 1;

        while (next < name.length && name[next] === "A") {
            next++;
        }
        
        move = Math.min(move, i * 2 + name.length - next, i + 2 * (name.length - next));
    }

    return ans + move;
    
}