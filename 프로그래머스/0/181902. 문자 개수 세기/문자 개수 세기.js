function solution(my_string) {
    const ALP = [
      'A','B','C','D','E','F','G','H','I','J','K','L','M',
      'N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
      'a','b','c','d','e','f','g','h','i','j','k','l','m',
      'n','o','p','q','r','s','t','u','v','w','x','y','z'
    ];
    
    const ARR = []
    
    ALP.map((v, i) => {
        const num = my_string.split("").filter((alp)=> alp === v).length
        ARR.push(num)
    })
    
    return ARR
}