function solution(food) {
    let first = "";
    let end = "";
    for(let i = 1; i < food.length; i++) {
        for(let j = 0; j < Math.floor(food[i] / 2); j++)
           first += i + "";
    }
    end = first.split('').reverse().join('');
    return first + "0" + end;
}