function solution(picture, k) {
    let ans = [];
    picture.forEach((v) => {
        let str = v.split("")
        let strRepeat = ''
        str.forEach((v) => strRepeat+=v.repeat(k))
        for(let i = 0; i < k; i++){
            ans.push(strRepeat)
        }
    })
    return ans
}