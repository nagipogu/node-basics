// Node.js Timer API. setTimeout, setInterval,   and how to cancel a timer
// https://www.youtube.com/watch?v=2I7BWkD-tGg

setTimeout(()=>{
   console.log('Hello after 4 seconds');
}, 4 * 1000);

////
const myFunc = () =>{
    console.log('Hello after 5 seconds');
}

setTimeout(myFunc, 5 * 1000);

///
const myFunction = (param1,param2) =>{
    console.log(param1 + param2 + '. Tt rocks');
}
setTimeout(myFunction, 2 * 1000, 'India', ' is Great');

///

const myFunctiontask = delay =>{
    console.log('Hello after ' + delay + ' seconds');
}
setTimeout(myFunctiontask, 5 * 1000, 'five');
setTimeout(myFunctiontask, 10 * 1000, 'ten');


///set
setInterval(() => console.log('Hello every 4 second'), 4000);


///
const myFunc2 = ()=> console.log('You will not see this one');
const timerId = setTimeout(myFun2, 0);
clearTimeout(timerId);

///
setTimeout(() => console.log('Hello after 0.5 seconds. MAYBE'),
500,
);
for(let i=0; i<le10; i++){
    //Block node sychronously
}

///


let counter = 0;

const myFun3 = () => {
    console.log('Hello world');
    counter += 1;

    if(counter === 5){
     console.log('Done');
     clearInterval(timerId);
    }
};

const timerId = setInterval(myFun3, 1000);

