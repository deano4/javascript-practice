/**
 * Problem 10: Strings
 * 
 * Given a string, return a modified version with the first half in UPPERCASE, and the second half in lowercase. 
 * If the string has odd length, the middle character should be lowercase.
 * 
 * @example "abcdef" -> "ABCdef"
*/
function problem(str) {
    let output = "";
    let upperlimit = 0;
    if (str.length % 2 == 0) {
        upperlimit = str.length / 2;
    } else {
        upperlimit = str.length / 2 - 0.5;
    }
    for (let x = 0; x < str.length; x++) {
        if (x < upperlimit) {
            output += str[x].toUpperCase();
        } else {
            output += str[x].toLowerCase();
        }
    }
    return output;
}

const tests = [
    ["abcdef", "ABCdef"],
    ["abcdefg", "ABCdefg"],
    ["HELLO THERE", "HELLO there"],
    ["js4Life!", "JS4Life!"],
    ["UNiTeD STATes OF AMerICA", "UNITED STATEs of america"]
]

module.exports = {problem, tests};