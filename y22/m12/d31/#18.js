function solution(money) {
  var coffee = Math.floor(money / 5500);
  var money = money % 5500;

  return [coffee, money];
}
