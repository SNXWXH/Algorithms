const solution = (k, dungeons) => {
    const getPermutations = (arr, selectNumber) => {
        if (selectNumber === 1) return arr.map((v) => [v]);
        const results = [];

        arr.forEach((fixed, index, origin) => {
            const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
            const permutations = getPermutations(rest, selectNumber - 1);
            const attached = permutations.map((el) => [fixed, ...el]);
            results.push(...attached);
        });

        return results;
    };

    let maxCount = 0;
    const allPermutations = getPermutations(dungeons, dungeons.length);

    allPermutations.forEach((order) => {
        let currentK = k;
        let count = 0;

        for (const [require, minus] of order) {
            if (currentK >= require) {
                currentK -= minus;
                count++;
            } else {
                break;
            }
        }

        maxCount = Math.max(maxCount, count);
    });

    return maxCount; 
};

