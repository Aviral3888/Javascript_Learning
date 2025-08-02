/* Problem:
Given an string s, which contains only lower case alphabets, 
How many pairs [i,j] exists such that 
{ i < j || s[i] == "a" || s[j] == "g"}
*/

let str = "acgdgag";


/*
            SOLUTION 2 : OPTIMISED
*/

function getPair(arr) {

}

console.log(getPair(arr));


/*
            SOLUTION 1 : BRUTE FORCE
*/
/*
function getpair(str) {
    let count = 0;

    for (let i =0 ; i< str.length; i++) {
        if (str[i] == "a") {
            for (let j = i+1; j<str.length; j++) {
                if (str[j] == "g") {
                    count++
                    console.log([i, j]);
                }
            }
        }
    }
    return count;
}

console.log(getpair(str));
*/
