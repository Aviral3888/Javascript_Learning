/*
Ques 4 - Valid Anagram

An Anagram is a word or phrase formed by rearranging the letters of
a different word or phrase, using all the original letters exactly once.

Input: (s = "anagram"), (t = "nagaram"); ----->>>>>   Output: true;
Input: (s = "rat"), (t = "car");         ----->>>>>   Output: false;

*/

// Solution 1: Slow approach : Using Js methods

function isAnagram(s, t) {
    s = s.split("").sort().join();
    t = t.split("").sort().join();

    return s === t;
}

console.log(isAnagram("rat", "tra"));



// Solution 2: Using Objects

// create objects and assign each alphabet a value equal to its occurrence. 
// compare objects.

function isAnagram(s, t) {
    if (s.length !== t.length) return false

    // Initialize objects
    let obj1 = {};
    let obj2 = {};

    // Iterate over strings to complete object
    for (let i = 0; i < s.length; i++) {
        obj1[s[i]] = (obj1[s[i]] || 0) + 1;
        obj2[t[i]] = 1 + (obj2[t[i]] || 0);
    };

    // Compare objects keys and values should be same
    for(let keys in obj1) {
        if(obj1[keys] !== obj2[keys]) return false;
    }
    return true;
}

console.log(isAnagram("anagrasm", "nagarams"));