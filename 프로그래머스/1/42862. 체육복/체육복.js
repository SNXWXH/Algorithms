const solution = (n, lost, reserve) => {
    let answer = 0;
    let studentClothes = new Array(n).fill(1);
    
    lost.map((v) => studentClothes[v-1] = 0)
    reserve.map((v) => studentClothes[v-1]++)
    
    studentClothes.forEach((_, i) => {
        if(studentClothes[i] === 2 && studentClothes[i-1] === 0){
            studentClothes[i]--
            studentClothes[i-1]++            
        }
        if(studentClothes[i] === 2 && studentClothes[i+1] === 0){
            studentClothes[i]--
            studentClothes[i+1]++            
        }
    })
    
    return studentClothes.filter((v) => v > 0).length
}