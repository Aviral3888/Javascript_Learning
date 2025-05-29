console.log("19 - function currying in js");

/*
        Studied from -
        https://medium.com/web-development-with-sumit/everything-about-currying-in-javascript-a2614b82e6ca#id_token=eyJhbGciOiJSUzI1NiIsImtpZCI6ImMzN2RhNzVjOWZiZTE4YzJjZTkxMjViOWFhMWYzMDBkY2IzMWU4ZDkiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIyMTYyOTYwMzU4MzQtazFrNnFlMDYwczJ0cDJhMmphbTRsamRjbXMwMHN0dGcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiIyMTYyOTYwMzU4MzQtazFrNnFlMDYwczJ0cDJhMmphbTRsamRjbXMwMHN0dGcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTI4MDYyODg4MzcwNzEzNjQ2NzEiLCJlbWFpbCI6ImF2aWdvZWwuMzg4OEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmJmIjoxNzQ0NjYxNzY0LCJuYW1lIjoiQXZpcmFsIEdvZWwiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jSlZVc2FxVFJMbVRWeWNPaFU0bnZBOUtzbTcwR3lkaXZIcHFlaUJQeWQ4bjhVSWFVcnQ9czk2LWMiLCJnaXZlbl9uYW1lIjoiQXZpcmFsIiwiZmFtaWx5X25hbWUiOiJHb2VsIiwiaWF0IjoxNzQ0NjYyMDY0LCJleHAiOjE3NDQ2NjU2NjQsImp0aSI6ImQ0OGJiZDY0MDBiN2U1MmQ2ZWJlOTU1NzU0OTE1ZmI2NGNkNWY4MmUifQ.DmyVeRGIisydcHeoWpR2jJFY64HmhJRzJ1brVFcwX9kG_YDv87IisH7JeyCQ1hhhfPujtrNTMUKfLrO0taunCoY4XFjOvWzp3RH5M7poKGk0wwJNOdyxKTDeMKYMJNx-TWBYGmAYlfiYWzF4VjWfpZzBmpptwMhtkgMQOM5GFoC7jV8gyDFJxQgmm5OtiyLfyGCQ685ivnKLa3qrUaz_j9ItUUIhgCiTg5EJorBJE2F2O20JuZO1Scu1nmO8NPGcu--lGucYxa70zK29xg17LSR_9Vtoss8tiwXrsMQzDK5KmveUbIpBTdCYxwR6FG2gmBKkO_y42FSMdBOxVnDRUQ - Medium
        and
        https://youtu.be/vQcCNpuaJO8?si=MsUm4dtFccOhjV83 - Akshay Saini 
*/

/* 
        Currying can be achieved in 2 ways 

        1. By using .bind() methods
        2. By using closure approach.

*/

// 1. By using .bind method
// const multiply = function (x, y) {
//     return x * y;
// }

// let multiplyByTwo = multiply.bind(this, 2); // Here this 2 gets auton set 
// console.log(multiplyByTwo(10)); // 20

// 2. By using closure approach
/*

let multiply = function (x) {
    return function (y) {
        console.log(x * y);
        return x * y;
    }
}

const result = multiply(2)(7); // 14

// We can also use this for future reference 

const multiplyBy2 = multiply(5);
multiplyBy2(8) // 40

*/