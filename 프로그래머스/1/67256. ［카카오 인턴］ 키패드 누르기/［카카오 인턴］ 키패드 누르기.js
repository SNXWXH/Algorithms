function solution(numbers, hand) {
    const dist = {
        2: [3, 1, 0, 1, 2, 1, 2, 3, 2, 3, 4, 4],
        5: [2, 2, 1, 2, 1, 0, 1, 2, 1, 2, 3, 3],
        8: [1, 3, 2, 3, 2, 1, 2, 1, 0, 1, 2, 2],
        0: [0, 4, 3, 4, 3, 2, 3, 2, 1, 2, 1, 1]
    };

    let left = 10, right = 11;
    let ans = ''

    numbers.forEach((num) => {
        if([1,4,7].includes(num)) { 
            left = num;
            ans += 'L';
        } else if([3,6,9].includes(num)) { 
            right = num;
            ans += 'R';
        } else {
            const l = dist[num][left];
            const r = dist[num][right];
            if(l < r || (l === r && hand === 'left')) {
                left = num;
                ans += 'L';
            } else if(l > r || (l === r && hand === 'right')) {
                right = num;
                ans += 'R';
            }
        }
    })
    
    return ans;
}