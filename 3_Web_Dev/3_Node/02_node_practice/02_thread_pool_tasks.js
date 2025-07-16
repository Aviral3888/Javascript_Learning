const fs = require('fs');

const dns = require('dns');

// DNS
dns.lookup("google.com", (error, address, family) => {
    if (error) {
        console.log("DNS error:", error);
        return;
    }
    else {
        console.log("address:", address);
        console.log("family:", family);
    }
});


// FS
fs.readFile('./02_thread_pool_fs_check.txt', 'utf-8', (error, data) => {
    if (error) {
        console.log("FS Error:", error)
    }
    else {
        console.log("FS Data:", data)
    }
})