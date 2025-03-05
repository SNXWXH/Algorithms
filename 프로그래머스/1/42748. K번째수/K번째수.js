const solution = (array, commands) =>{
    let ans = [];
    for(commandsArr of commands){
        const [i, j, k] = commandsArr;
        let sliceArr = array.slice(i-1, j).sort((a,b) => a - b);
        ans.push(sliceArr[k-1]);
    }
    return ans;
}
