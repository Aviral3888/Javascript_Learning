console.log("15 - Map, filter and reduce HOF in JS");

/*

All of them are Higher Order Functions and are most commonly used out of all.

Things learned:
1. map method is used when we want transformation of whole array.
2. filter is used when we want to filter the arrar to obtain required value.
3. reduce is used when we want to reduce the array to single value eg (max, min, avg, sum, difference etc).
4. reduce passes two arguments one function(which includes accumulator and initial value as argument itself) and another initial value of accumulator.

*/

// ----------------------------------------------------------------------------------------

// Tricky Eg

const users = [
    { firstName: "akshay", lastName: "saini", age: 26 },
    { firstName: "donald", lastName: "trump", age: 75 },
    { firstName: "elon", lastName: "musk", age: 50 },
    { firstName: "deepika", lastName: "padukone", age: 26 },
];


// TASK_1: Get list of full name from this users Array ===> [].map()
const createFullName = (user) => {
    return user.firstName + " " + user.lastName;
};
console.log(users.map(createFullName));

// TASK_2: Get list of users above the age of 40 ===> [].filter()
console.log(users.filter(user => user.age >= 40));

// TASK_3: Get user name whose age is greater than 40 ===> Chaining of filter and map functions
const getUsersAbove40 = users.filter((user) => user.age >= 40).map(createFullName);
console.log(getUsersAbove40);

 
// TASK_4: How many users are of a particular age ===> Using normal functions
const getAgeMap = (users) => {
    let map = {};
    users.forEach(user => {
        map[user.age] ? map[user.age] += 1 : map[user.age] = 1;
    });
    return map;
}
console.log(getAgeMap(users));

// TASK_5: How many users are of a particular age ===> [].reduce()

// [].reduce((accumulator, currentValue) => {}, initialValueOfAccumulator);
const getMapReduce = users.reduce((acc, curr) => {
    console.log(curr);
    acc[curr.age] ? acc[curr.age] += 1 : acc[curr.age] = 1;
    console.log(acc);
    return acc;
}, {});
console.log(getMapReduce);


// TASK_6: Get first name whose age is greater than 30 ===> [].reduce()
const getUsersAbove30 = users.reduce((acc, user) => {
    user.age > 30 ? acc.push(user.firstName) : ""
    return acc; 
}, []);
console.log(getUsersAbove30);
