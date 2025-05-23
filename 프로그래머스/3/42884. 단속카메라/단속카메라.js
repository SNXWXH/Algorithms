function solution(routes) {
    let ans = 1;

    routes.sort((a, b) => a[0] - b[0]);

    let out = routes[0][1];

    for(let i = 1; i < routes.length; i++) {
        if(out < routes[i][0]) {
          ans++;
          out = routes[i][1];
        }

        if(out > routes[i][1]) out = routes[i][1];
    }

    return ans;
}