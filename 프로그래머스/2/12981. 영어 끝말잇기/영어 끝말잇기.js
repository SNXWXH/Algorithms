const solution = (n, words) => {
    let set = new Set();
    set.add(words[0]);

    for (let i = 1; i < words.length; i++) {
        let a = words[i - 1].slice(-1); 
        let b = words[i][0]; 

        if (a !== b) {
            let number = (i % n) + 1;
            let time = Math.floor(i / n) + 1;
            return [number, time];
        }

        if (set.has(words[i])) {
            let number = (i % n) + 1;
            let time = Math.floor(i / n) + 1;
            return [number, time];
        }

        set.add(words[i]);
    }

    return [0, 0];
};
