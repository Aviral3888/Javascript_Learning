

const fs = require('fs');
const crypto = require('crypto');
const start = Date.now();

process.env.UV_THREADPOOL_SIZE = 4;

// console.log("1 Node process init");

setTimeout(() => {
    // console.log("3 hello from setTimeout 1");
}, 0);

setImmediate(() => {
    // console.log("4 hello from setImmediate Fn 1");
})

fs.readFile('./01_theory.txt', 'utf-8', (txt) => {
    console.log("5 I/O Polling finish: ", txt);

    setTimeout(() => { console.log("7 Hello from Timer 2") }, 0);
    setTimeout(() => { console.log("8 Hello from Timer 3") }, 2000);
    console.log("6 hello from setImmediate Fn 2");

    // CPU intensive task
    crypto.pbkdf2('password1', 'salt1', 100000, 1024, 'sha512', (val) => {
        console.log(`${Date.now() - start}ms`, "Password 1 hashing done:", val);
    });

    // crypto.pbkdf2('password2', 'salt1', 100000, 1024, 'sha512', (val) => {
    //     console.log(`${Date.now() - start}ms`, "Password 2 hashing done:", val);
    // });

    // crypto.pbkdf2('password3', 'salt1', 100000, 1024, 'sha512', (val) => {
    //     console.log(`${Date.now() - start}ms`, "Password 3 hashing done:", val);
    // });
})

fs.readFile('./01_theory.txt', 'utf-8', (txt) => {
    console.log("5 I/O Polling finish: ", txt);

    setTimeout(() => { console.log("7 Hello from Timer 2") }, 0);
    setTimeout(() => { console.log("8 Hello from Timer 3") }, 2000);
    console.log("6 hello from setImmediate Fn 2");

    // CPU intensive task
    crypto.pbkdf2('password1', 'salt1', 100000, 1024, 'sha512', (val) => {
        console.log(`${Date.now() - start}ms`, "Password 1 hashing done:", val);
    });

    // crypto.pbkdf2('password2', 'salt1', 100000, 1024, 'sha512', (val) => {
    //     console.log(`${Date.now() - start}ms`, "Password 2 hashing done:", val);
    // });

    // crypto.pbkdf2('password3', 'salt1', 100000, 1024, 'sha512', (val) => {
    //     console.log(`${Date.now() - start}ms`, "Password 3 hashing done:", val);
    // });
})

// console.log("2 hello from top level code");

