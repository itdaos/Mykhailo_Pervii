import { arraysEqual } from "./util.js";
import { filter_list } from "./task1.js";
import { first_non_repeating_letter } from "./task2.js";
import { digital_root } from "./task3.js";
import { count_pairs } from "./task4.js";
import { transformFriends } from "./task5.js";
import { nextBiggerNumber } from "./task6.js";
import { intToIp } from "./task7.js";

const container = document.getElementById("results")

const newSection = document.createElement("div")

const appendTestCaseResults = (node, func, [...args], exp, cmp = (a, b) => a === b) => {
    node.appendChild(document.createTextNode(`${cmp( func(...args), exp ) ? "passed" : "failed"} - ${func.name}(${args.map(JSON.stringify).toString()}) === ${JSON.stringify(exp)}`))
    node.appendChild(document.createElement("br"))
}

// 1
appendTestCaseResults(newSection, filter_list, [[1, 2, 'a', 'b']], [1, 2], arraysEqual)
appendTestCaseResults(newSection, filter_list, [[1, 'a', 'b', 0, 15]], [1, 0, 15], arraysEqual)
appendTestCaseResults(newSection, filter_list, [[1, 2, 'aasdaf', '1', '123', 123]], [1, 2, 123], arraysEqual)
newSection.appendChild(document.createElement("br"))

container.appendChild(newSection)

// 2

appendTestCaseResults(newSection, first_non_repeating_letter, ["sTreSS"], "T")
appendTestCaseResults(newSection, first_non_repeating_letter, ["Polypeptic"], "o")
appendTestCaseResults(newSection, first_non_repeating_letter, ["extraextri"], "a")
appendTestCaseResults(newSection, first_non_repeating_letter, ["bbbbb"], null)
newSection.appendChild(document.createElement("br"))


container.appendChild(newSection)

// 3

appendTestCaseResults(newSection, digital_root, [16], 7)
appendTestCaseResults(newSection, digital_root, [942], 6)
appendTestCaseResults(newSection, digital_root, [132189], 6)
appendTestCaseResults(newSection, digital_root, [493193], 2)
newSection.appendChild(document.createElement("br"))

// 4

appendTestCaseResults(newSection, count_pairs, [[1, 2, 3, 4, 5, 6, 7], 8], 3)
appendTestCaseResults(newSection, count_pairs, [[1, 2, 4, 4, 4, 6, 7], 8], 5)
appendTestCaseResults(newSection, count_pairs, [[1, 2, 3], 8], 0)
appendTestCaseResults(newSection, count_pairs, [[10, 12, 14, 9], 8], 0)
newSection.appendChild(document.createElement("br"))

// 5

appendTestCaseResults(newSection, transformFriends,
    ["Fred:Corwill;Wilfred:Corwall;Barney:TornBull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwall"],
    "(CORWALL, ALFRED)(CORWALL, WILFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)")
appendTestCaseResults(newSection, transformFriends,
    ["Fred:Corwill;Wilfred:Corwill;Barney:TornBull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"],
    "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)")
appendTestCaseResults(newSection, transformFriends,
    ["Fred:Corwill;Wilfred:Corwall;Barney:TornBull;Betty:Tornbull;Bjon:Tornbull"],
    "(CORWALL, WILFRED)(CORWILL, FRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)")
newSection.appendChild(document.createElement("br"))

// 6
appendTestCaseResults(newSection, nextBiggerNumber, [12], 21)
appendTestCaseResults(newSection, nextBiggerNumber, [513], 531)
appendTestCaseResults(newSection, nextBiggerNumber, [2017], 2071)
appendTestCaseResults(newSection, nextBiggerNumber, [111], -1)
newSection.appendChild(document.createElement("br"))

// 7
appendTestCaseResults(newSection, intToIp, [2149583361], "128.32.10.1")
appendTestCaseResults(newSection, intToIp, [32], "0.0.0.32")
appendTestCaseResults(newSection, intToIp, [0], "0.0.0.0")
newSection.appendChild(document.createElement("br"))


container.appendChild(newSection)


window.filter_list = filter_list
window.first_non_repeating_letter = first_non_repeating_letter
window.digital_root = digital_root
window.count_pairs = count_pairs
window.transformFriends = transformFriends
window.nextBiggerNumer = nextBiggerNumber
window.intToIp = intToIp

window.task_1 = filter_list
window.task_2 = first_non_repeating_letter
window.task_3 = digital_root
window.task_4 = count_pairs
window.task_5 = transformFriends
window.task_6 = nextBiggerNumber
window.task_7 = intToIp