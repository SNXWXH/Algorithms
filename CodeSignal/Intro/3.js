// checkPalindrome

const solution = (inputString) => {
  if (inputString.length === 1) return true;

  let front = [];
  let back = [];
  let middle = parseInt(inputString.length / 2);

  if (inputString.length % 2 === 0) {
    front = inputString.slice(0, middle).split('');
    back = inputString.slice(middle).split('');
  } else {
    for (let i = 0; i < middle; i++) {
      front.push(inputString[i]);
    }
    for (let i = middle + 1; i < inputString.length; i++) {
      back.push(inputString[i]);
    }
  }

  return front.join('') === back.reverse().join('') ? true : false;
};
