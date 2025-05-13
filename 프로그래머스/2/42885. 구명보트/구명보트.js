function solution(people, limit) {
    people.sort((a, b) => a - b);
    let low = 0;
    let high = people.length - 1;
    let ans = 0;

    while (low <= high) {
        if (people[low] + people[high] <= limit) low++;
        high--; 
        ans++;
    }

    return ans;
}
