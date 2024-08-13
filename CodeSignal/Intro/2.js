// centuryFromYear

const solution = (year) =>
  year % 100 === 0 ? year / 100 : parseInt(year / 100) + 1;
