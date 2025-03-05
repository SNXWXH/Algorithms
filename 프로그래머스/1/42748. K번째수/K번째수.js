const solution = (array, commands) =>{
    let ans = [];
    for(commadsArr of commands){
        const [i, j, k] = commadsArr;
        let sliceArr = array.slice(i-1, j).sort((a,b) => a - b);
        ans.push(sliceArr[k-1]);
    }
    return ans;
}
