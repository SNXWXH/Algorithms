function solution(id_list, report, k) {
  let singo = {};
  let mail = {};
  let ans = [];

  id_list.forEach((v) => {
    singo[v] = 0;
    mail[v] = 0;
  });

  let uniqueReports = {};
  report.forEach((r) => {
    const [sender, receiver] = r.split(" ");
    if (!uniqueReports[receiver]) uniqueReports[receiver] = new Set();
    uniqueReports[receiver].add(sender);
  });

  Object.keys(uniqueReports).forEach((receiver) => {
    singo[receiver] = uniqueReports[receiver].size;
  });

  Object.keys(singo).forEach((receiver) => {
    if (singo[receiver] >= k) {
      uniqueReports[receiver].forEach((sender) => {
        mail[sender]++;
      });
    }
  });

  id_list.forEach((id) => {
    ans.push(mail[id]);
  });

  return ans;
}
