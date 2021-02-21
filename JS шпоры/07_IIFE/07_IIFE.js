//Immediate Invoked Function Expression

// let result = [];
// for (var i = 0; i < 5; i++) {
//     result.push(function () {
//         console.log(i);
//     })
// }

// result[2](); //5
// result[4](); //5

// let result = [];
// for (var i = 0; i < 5; i++) {
//     (function () {
//         var j = i;
//         result.push(function () { console.log(j) })
//     })()
// }

// result[2]();//2
// result[3]();//3
// result[4]();//4

// let result = [];
// for (let i = 0; i < 5; i++) {
//     result.push(function () {
//         console.log(i);
//     })
// }

// result[3]()//3
// result[2]()//2
// result[1]()//1