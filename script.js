
// const person = {
//     userName: 'Daniel',
//     age: 22,
//     isMarried: false,
//     sayHi: function(name){
//         console.log(`Привет, ${name}!`)
//     }
// };

// person.sayHi('Даниэл');

const timerID = setInterval(function(){
    console.log("Daniel")
}, 1000)

setTimeout(function(){
    clearInterval(timerID)
    console.log("Time out")
}, 10000);



//clearInterval(timeIntervalId);


