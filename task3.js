/**Digital root is the recursive sum of all the digits in a number.
Given n, take the sum of the digits of n. If that value has more than one digit, continue
reducing in this way until a single-digit number is produced. The input will be a non-
negative integer. */
function digital_root(num) {
    if (num < 10) return num
    return digital_root(num.toString().split("").map(el => Number(el)).reduce((prev, curr) => prev + curr, 0))
}

export {digital_root}