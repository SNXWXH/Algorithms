const solution = (s) => {
    let arr = s.split("");
    let checkArr = [];
    let ans = 0;

    for(let i = 0; i < arr.length -1; i++){
        let checkAns = 0;
        for(let j = 0; j < arr.length; j++){
            if(arr[j] ==='(' || arr[j] ==='{'||arr[j] ==='[')
                checkArr.push(arr[j]);

            if(arr[j] ===')' && checkArr.pop() === '(') checkAns++;
            if(arr[j] ==='}' && checkArr.pop() === '{') checkAns++;
            if(arr[j] ===']' && checkArr.pop() === '[') checkAns++;
        }
        
        if(checkAns === s.length / 2) ans++;
        checkArr = [];
        
        let shiftLetter = arr.shift();
        arr = [...arr,shiftLetter]
    }
    return ans;
}