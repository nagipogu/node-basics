var assert = require("assert");

// method 1
function add(a, b){
    return a + b;
}

var expected = add (1,2);
assert( expected === 3, 'one plus two is three');
assert.ok(expected === 4, 'one plus two is three');
assert.equal(expected,3, 'one plus two is three');
assert.notEqual(expected, 4, 'one plus two is three (Not four!).')


//Advanced
var list1 = [1,2,3,4,5];
var list2 = [1,2,3,4,5];

assert.deepEqual(list1,list2, 'deepEqual checks the elements in the arrays are identical');

var person1 = {"name" : "John", "age":"21"}
var person2 = {"name" : "John", "age":"21"}

assert.deepEqual(person1, person2, 'these two objects are the same');

var person1 = {"name" : "John", "age":"21"}
var person2 = {"name" : "Jone", "age":"19"}

assert.notDeepEqual(actual, expected, [message]);


////
assert.throws(
    function(){
        throw new Error("Wrong value");
    },
    Error
)