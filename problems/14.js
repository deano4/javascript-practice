/**
 * Problem 14: Majority Element
 * 
 * Given a list of numbers, return the majority number.
 * The majority number is the one that appears at least ⌊n/2⌋ times, where n is the size of the list.
 * 
 * @example [3,2,3] -> 3
*/
function problem(numbers) {
    let dic = {}
    let result;
    numbers.forEach(number => {
        if (number in dic) {
            dic[number] = dic[number] + 1;
        } else {
            dic[number] = 1;
        }
        if (dic[number] >= numbers.length / 2) {
            result = number;
        }
    });
    return result;
}

const tests = [
    [[3, 2, 3], 3],
    [[2, 2, 1, 1, 3, 2, 2], 2]
]

module.exports = { problem, tests };