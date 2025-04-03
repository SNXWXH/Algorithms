const solution = (maps) => {
    const row = maps.length;
    const col = maps[0].length;
    
    const visited = Array.from(Array(row),()=> Array(col).fill(0))
    
    const dx = [-1,1,0,0]
    const dy = [0,0,-1,1]
    const queue = [[0,0,1]]
    
    visited[0][0] = 1
    
    while(queue.length){
        const [x,y,dist] = queue.shift();
        if(x === row-1 && y === col-1) return dist;
        
        for(let i = 0; i < 4; i++){
            const nx = x+dx[i];
            const ny = y+dy[i];
            
            if(nx >= 0 && nx < row && ny >= 0 && ny < col && maps[nx][ny] === 1 && visited[nx][ny] === 0){
                visited[nx][ny] = 1;
                queue.push([nx,ny, dist+1])
            }
        }
    }
   return -1;
};
