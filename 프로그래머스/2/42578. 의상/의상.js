const solution = (clothes) => {
    let closet = {};
    let ans = 1;
    
    clothes.forEach((v) => {
        const [name, type] = v
        if(!closet[type]) closet[type] = []
        closet[type].push(name)
    })
    
    let keyArray = Object.keys(closet);
    Object.keys(closet).forEach((key) => ans *= (closet[key].length+1))
    
    return ans-1
}