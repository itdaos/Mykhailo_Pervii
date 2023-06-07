/**
 * Write a function named first_non_repeating_letter that takes a string input, and returns
    the first character that is not repeated anywhere in the string.
    For example, if given the input &#39;stress&#39;, the function should return &#39;t&#39;, since the
    letter t only occurs once in the string, and occurs first in the string.
    As an added challenge, upper- and lowercase letters are considered the same character,
    but the function should return the correct case for the initial letter. For example, the
    input &#39;sTreSS&#39; should return &#39;T&#39;.
    If a string contains all repeating characters, it should return an empty string (&quot;&quot;) or None --
    see sample tests.
 */

function first_non_repeating_letter(str) {
    const charArr = str.toLowerCase().split("")
    let indexFound;
    charArr.every((char, idx) => {
        if ( idx !== charArr.length -1 && charArr.slice(idx+1).find(el => el === char) === undefined)  { indexFound = idx; return false; }
        return true;
    });
    return str[indexFound] || null
}

export {first_non_repeating_letter}