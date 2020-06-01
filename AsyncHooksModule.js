var async = require("async");

var stack = [];

function functionOne(callback) {
    console.log("This is text1");
    callback(null, "This is First Function");
}

function functionTwo(callback) {
    console.log("This is text2");
    callback(null, "This is Second Function");
}

function functionThree(callback) {
    console.log("This is text3");
    callback(null, "This is Third Function");
}

stack.push(functionOne);
stack.push(functionTwo);
stack.push(functionThree);

async.parallel(stack, function (error, result) {
    console.log(result);
})


/// Life time events of async resources
// *    init (asyncId, type, triggerAsyncid, resource)
// *    before
// *    after
// *    destroy