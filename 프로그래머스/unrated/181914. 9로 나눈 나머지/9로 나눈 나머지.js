const solution = (number) => number.split("").reduce((acc, acr) => acc += Number(acr), 0) % 9;
