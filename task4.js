/**
 * There is an array of numbers - arr [1, 3, 6, 2, 2, 0, 4, 5]
there is a number target = 5.
Count the number of pairs in the array, the sum of which will give target
 */
function count_pairs(arr, target) {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) counter++;
        }
    }
    return counter;
}

export {count_pairs}