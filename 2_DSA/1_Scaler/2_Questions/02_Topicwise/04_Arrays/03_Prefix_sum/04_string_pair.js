/* Problem:
Given an string s, which contains only lower case alphabets, 
How many pairs [i,j] exists such that 
{ i < j || s[i] == "a" || s[j] == "g"}
*/

let str = "acgdgag";

/*
            SOLUTION 3 : OPTIMISED
*/

function getPair(str) {
    let count = 0;
    let gCount = 0;

    for (let i = str.length -1; i>=0; i--) {
        if (str[i] == 'g') {
            gCount++;
        }
        if (str[i] == 'a') {
            count += gCount
        }
    }
    return count;
}

console.log(getPair(str));


/*
            SOLUTION 2 : OPTIMISED
*/

/*
function getPair(str) {
    let count = 0;
    let aCount = 0;

    for(let i = 0; i < str.length; i++) {
        if (str[i] == "a") {
            aCount++;
            console.log("a:", i, aCount);
        }
        if (str[i] == "g") {
            count+=aCount;
            console.log("ag:", i, aCount, count);
        }
    }
    return count;
}

console.log(getPair(str));
*/


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
