const os = require('os');

// console.log("OS:", os);

console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());
console.log("Total Memory:", os.totalmem());
console.log("Free Memory:", os.freemem());

console.log("CPU Info:", os.cpus());
console.log("Home Directory:", os.homedir());
console.log("Temporary Directory:", os.tmpdir());
console.log("Network Interfaces:", os.networkInterfaces());
console.log("Uptime (seconds):", os.uptime());
console.log("Release:", os.release());
console.log("Hostname:", os.hostname());
console.log("Load Average:", os.loadavg());
console.log("Endianness:", os.endianness());
console.log("OS Type:", os.type());
console.log("OS Version:", os.version());
console.log("OS Constants:", os.constants);
console.log("OS User Info:", os.userInfo());
console.log("OS EOL:", os.EOL);