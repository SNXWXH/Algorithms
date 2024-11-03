const solution = (word) => {
  let answer = 0;
  let count = 0
  const arr = ['A', 'E', 'I', 'O', 'U']

  const dfs = (str) => {
      if(str === word) count = answer
      else if (str.length <= 4){
          for(let i =0; i<arr.length; i++){
              answer++
              dfs(str+arr[i])
          }
      }
  }

  dfs('')
  return count;
}