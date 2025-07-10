function solution(survey, choices) {
    let testObj = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 }
    const scoreObj = {1:3, 2:2, 3:1, 4:0, 5:1, 6:2, 7:3}
    
    let ans = ''
    
    survey.forEach((v, i) => {
      const [first, second] = v.split("")
      
      if(choices[i] < 4) testObj[first] += scoreObj[choices[i]]
      else if(choices[i] > 4) testObj[second] += scoreObj[choices[i]]
      
    })
    testObj.R < testObj.T ? (ans += 'T') : (ans += 'R')
    testObj.C < testObj.F ? (ans += 'F') : (ans += 'C')
    testObj.J < testObj.M ? (ans += 'M') : (ans += 'J')
    testObj.A < testObj.N ? (ans += 'N') : (ans += 'A')
    
    return ans
}