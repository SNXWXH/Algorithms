function solution(order) {
    let total = 0;
    
    for(let coffee of order){
        if(coffee.includes('americano')) total += 4500;
        if(coffee.includes('cafelatte')) total += 5000;
        if(coffee.includes('anything')) total += 4500;
    }
    
    return total;
}