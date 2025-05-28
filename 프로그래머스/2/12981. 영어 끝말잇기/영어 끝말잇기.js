const solution = (n, words) => {
    let wordsArr = [];
    wordsArr.push(words[0]);

    for (let i = 1; i < words.length; i++) {
        let frontWord = words[i - 1].slice(-1); 
        let backWord = words[i][0]; 

        if (frontWord !== backWord) {
            let number = (i % n) + 1;
            let time = Math.floor(i / n) + 1;
            return [number, time];
        }

        if (wordsArr.includes(words[i])) {
            let number = (i % n) + 1;
            let time = Math.floor(i / n) + 1;
            return [number, time];
        }

        wordsArr.push(words[i]);
    }

    return [0, 0];
};
