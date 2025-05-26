const solution = (n, computers) => {
    let ans = 0;
    // 방문 여부 저장 배열
    let visited = Array(n).fill(0);
    
    const dfs = (i)=>{
        visited[i] = 1;
        
        // 연결된 컴퓨터가 있고, 그 컴퓨터를 방문하지 않았다면 그 컴퓨터로 dfs 실행
        for(let j = 0; j < n; j++){
            if(computers[i][j] === 1 && !visited[j]) dfs(j)
        }
    }
    
    // 방문하지 않았으면 dfs 호출 후 ans 1 증가
    for(let i = 0; i < n; i++){
        if(!visited[i]){
            dfs(i);
            ans++;
        }
    }
    
    
    return ans;
}