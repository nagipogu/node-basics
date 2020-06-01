let myString = "This is the most wonderful string in the world.";

let encodedString = encodeURIComponent(myString);
console.log(encodedString)

let decodedString = decodeURIComponent(encodedString);
console.log(decodedString)