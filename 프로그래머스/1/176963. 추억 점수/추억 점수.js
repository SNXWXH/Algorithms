const solution = (name, yearning, photo) => {
  const obj = name.reduce((acc, cur, idx) => {
    acc[cur] = yearning[idx];
    return acc;
  }, new Object());
  return photo.map((v) => {
    return v
      .map((e) => {
        return (obj[e] !== undefined) ? obj[e] : 0;
      })
      .reduce((acc, cur) => acc + cur, 0);
  });
}
