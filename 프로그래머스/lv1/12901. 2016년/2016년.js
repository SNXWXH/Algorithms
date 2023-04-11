function solution(a, b) {
    const weekend = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    var day = new Date(2016+"-"+a+"-"+b);
    var ans = weekend[day.getDay()];
    return ans;
}