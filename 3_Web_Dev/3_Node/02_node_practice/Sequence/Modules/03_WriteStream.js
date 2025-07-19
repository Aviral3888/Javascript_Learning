const path = require('path');

console.log("Path:", path);

var pathObj = path.parse(__filename);
console.log("Parsed Path Object:", pathObj);

console.log("Directory Name:", path.dirname(__filename));

console.log("File Name:", path.basename(__filename));

console.log("File Extension:", path.extname(__filename));

let joinedPath = path.join(__filename, '/folder1', 'join2.txt');
console.log("Joined Path:", joinedPath);
// /Javascript/Javascript_Learning/3_Web_Dev/3_Node/02_node_practice/Sequence/Modules/01_path.js/folder1/join2.txt

console.log("Resolved Path:", path.resolve(__filename, '/folder1', 'join1.txt'));
// /folder1/join2.txt