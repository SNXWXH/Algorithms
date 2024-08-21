const solution = (cards1, cards2, goal) => {
    for(let e of goal){
        if(cards1[0] === e) cards1.shift();
        else if(cards2[0] === e) cards2.shift();
        else return "No";
    }
    return "Yes";
}