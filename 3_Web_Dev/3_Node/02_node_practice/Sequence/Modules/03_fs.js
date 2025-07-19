const fs = require('fs');

console.log("CL 1");

fs.readFile('./01_path.js', (err, data) => {
    if (err) {
        console.log("Error Reading File");
    }
    else {
        console.log("File Read Async Successfully:", data.toString().slice(0, 25));
    }
})

// Synchronous File Read Example

const data = fs.readFileSync('./01_path.js', "utf-8");
console.log("File Read Sync: ", data.slice(0, 20));

console.log("CL 2");


// -----

const dirData = fs.readdir('./', (err, files) => {
    console.log("Directory Read Async:", files);
})


// - ----- --- - - - - - -


// CreateReadStream Example

const readStream = fs.createReadStream('./01_path.js', { encoding: "utf-8" });

readStream.on("data", (chunk) => {
    console.log("Read Stream Data Chunk:", chunk.slice(0, 25));
})
readStream.on("end", () => {
    console.log("Read Stream Ended");
})
readStream.on("error", (err) => {
    console.log("Read Stream Error:", err);
})

console.log("CL 3");

// CreateReadStream and CreateWriteStream with Pipe:

const writeStream = fs.createWriteStream('./03_WriteStream.js', { encoding: "utf-8" });

readStream.pipe(writeStream);

writeStream.on('finish', () => {
    console.log("Write Stream Finished");
});
writeStream.on('error', (err) => {
    console.log("Write Stream Error:", err);
})

console.log("CL 4");