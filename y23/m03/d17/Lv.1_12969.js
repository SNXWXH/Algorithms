process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  let answer = "";
  let j = 1;
  while (j <= b) {
    answer += "*".repeat(a) + "\n";
    j++;
  }
  console.log(answer);
});
