const solution = (num_str) => num_str.split("").reduce((acc, cur) => Number(acc)+Number(cur), 0);
