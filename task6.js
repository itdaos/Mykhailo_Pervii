function nextBiggerNumber(number) {
    let digits = Array.from(String(number), Number);
    let i = digits.length - 2;
    while (i >= 0 && digits[i] >= digits[i + 1]) {
      i--;
    }

    if (i === -1) {
      return -1;
    }
    let j = digits.length - 1;
    while (digits[j] <= digits[i]) {
      j--;
    }

    [digits[i], digits[j]] = [digits[j], digits[i]];
  
    let reversedDigits = digits.splice(i + 1).reverse();
  
    let nextBigger = parseInt(digits.concat(reversedDigits).join(''));
  
    return nextBigger;
  }

export { nextBiggerNumber }