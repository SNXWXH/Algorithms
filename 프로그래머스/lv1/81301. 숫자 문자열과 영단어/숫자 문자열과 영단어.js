function solution(s) {
    const number = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let st = s;
    for(let i = 0; i < number.length; i++){
        let arr = st.split(number[i]);
        st = arr.join(i);
    }
    return Number(st);
}