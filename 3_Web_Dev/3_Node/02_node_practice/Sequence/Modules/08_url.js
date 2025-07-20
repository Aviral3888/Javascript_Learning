const url = require('url'); 

let href = "http://localhost:3000/api/get/users?name=John&age=30";

let parsedUrl = url.parse(href, true);
console.log("Parsed URL:", parsedUrl);