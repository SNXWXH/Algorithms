const solution = (s) => {    
    const stack = [];
    
    for (const letter of s) {
        if (stack.length > 0 && stack[stack.length - 1] === letter) 
            stack.pop();
        else 
            stack.push(letter); 
    }
    
    return stack.length === 0 ? 1 : 0;
}