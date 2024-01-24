function solution(k, score) {
    let ans = [];
    let legend = [];
    for(let i of score){
        legend.push(i);
        legend = legend.sort((a,b) => b-a);
        if(legend.length > k)
            legend.pop(legend[k])
        ans.push(legend[legend.length-1]);
    }
    return ans
}