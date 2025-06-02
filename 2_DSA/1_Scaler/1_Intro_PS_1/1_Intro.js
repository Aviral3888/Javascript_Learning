// 1: Check for Prime or not

function isPrime(num) {
    if (num == 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0){
            return false
        }
    }
    return true;
};

console.log(isPrime(23));


// 2: Given Perfect square find square root

function findSqrt(num) {
    for (let i = 1; i<= num; i++) {
        if (i * i == num) {return i}        
    }
}

console.log(findSqrt(37));