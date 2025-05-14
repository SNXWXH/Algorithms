const find = (parent, x) => {
    if(parent[x] === x) return x;
    
    return parent[x] = find(parent, parent[x])
}

const union = (parent, a, b) => {
    a = find(parent, a)
    b = find(parent, b)
    
    a < b ? parent[b] = a : parent[a] = b;
}

const compare = (parent, a, b) => {
    a = find(parent, a)
    b = find(parent, b)
    
    return a === b;
}

function solution(n, costs) {
    let ans = 0;
    const sortedCost = costs.sort((a,b) => a[2] - b[2])
    const parent = Array.from({length:n}, (_,i) => i)
    
    for(let [a, b, cost] of sortedCost){
        if(!compare(parent, a, b)){
            ans += cost;
            union(parent, a, b)
        }
    }
    
    return ans;
}