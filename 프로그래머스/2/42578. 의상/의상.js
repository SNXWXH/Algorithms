function solution(clothes) {
    let obj = {}
    let ans = 1;
    
    clothes.forEach((v) => {
        const [name, type] = v;
        if (!obj[type]) obj[type] = [];
        obj[type].push(name);
    });
    
    Object.keys(obj).forEach((key) => (ans *= obj[key].length + 1));
    
    return ans -1
}