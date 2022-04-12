/*
Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".
*/

/*
Main Objective:
1. I need to touch every character in the string
2. Account for the backspace character "#"
3. Compare whether or not the strings are equal to each other

Logic:
1. Initialize Variable; sTyped[], tTyped[]
2. Create a two loops to step through each string.
3. Is the current char not a "#"?
    yes -> add current char to its typed array.
4. Is the next char a "#"?
    yes -> pop last char from its typed array.
5. Compare the two arrays and return the boolean value of the comparison.

 */

var buildString = function(string) { 
    let finalString = [] 

    for(let p = 0; p < string.length; p++) {
        if (string[p] !== "#") {
            finalString.push(string[p])
        } else {
            finalString.pop()
        }  
    }

    return finalString
}

var compareStrings = function(string1, string2) {
    console.log({sTyped: string1}, {tTyped: string2})
    if (string1.length !== string2.length) return false
    else {
        for (let i = 0; i < string1.length; i++) {
            if (string1[i] !== string2[i]) return false
        }
    }
    return true
}


var backspaceCompare = function(s, t) {

    let sTyped = buildString(s)
    let tTyped = buildString(t)
    let comparison = compareStrings(sTyped, tTyped)

    return comparison
};


console.log(backspaceCompare("ab##zfbdf#", "c#d#zz#fbdd#")) 