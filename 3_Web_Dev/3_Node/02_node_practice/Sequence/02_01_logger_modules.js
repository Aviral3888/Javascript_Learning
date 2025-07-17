
var url = "http://mylogger.io/log";

function log(message) {
    // Send an HTTP request
    console.log(message);
}

module.exports.log = log;
module.exports.endPoint = url;

console.log(module);
/*
{
  id: '.',
  path: '/Users/aviralgoel/Developer/Self/Javascript/Javascript/Javascript_Learning/3_Web_Dev/3_Node/02_node_practice/Sequence',
  exports: { log: [Function: log], endPoint: 'http://mylogger.io/log' },
  filename: '/Users/aviralgoel/Developer/Self/Javascript/Javascript/Javascript_Learning/3_Web_Dev/3_Node/02_node_practice/Sequence/02_01_logger_modules.js',
  loaded: false,
  children: [],
  ...
}
*/