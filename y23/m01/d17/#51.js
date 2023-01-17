function solution(sides) {
  sides = sides.sort((a, b) => a - b);
  if (sides[2] < sides[0] + sides[1]) return 1;
  else return 2;
}

// function solution(sides) {
//     sides = sides.sort((a,b) => a-b)
//     return sides[0]+sides[1] > sides[2] ? 1 : 2;
// }
