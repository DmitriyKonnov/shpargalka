// function sayHelloTo(name) {
//     const messege = 'Hello ' + name;

//     return function () {
//         console.log(messege);
//     }
// }

// const helloToElena = sayHelloTo('Elena');
// const helloToIgor = sayHelloTo('Igor');
// helloToElena(); // Hello Elena
// helloToIgor(); // Hello Igor

//=======пример использования=========

// function createFrameworkManager() {
//     const fw = ['Angular', 'React'];

//     return {
//         print: function () {
//             console.log(fw);
//         },
//         add: function (framework) {
//             fw.push(framework);
//         }
//     }
// }

// const manager = createFrameworkManager();
// // console.log(manager); // {print: ƒ, add: ƒ}
// manager.print() // ["Angular", "React"]


// manager.add('VueJS');
// manager.print(); // ["Angular", "React", "VueJS"]

//setTimeout

// const fib = [1, 2, 3, 5, 8, 13];

// for (let i = 0; i < fib.length; i++) {
//     setTimeout(function () {
//         console.log(`fib[${i}]  = ${fib[i]}`)
//     }, 1500)
// }
//06_closures.js:43 fib[0]  = 1
// 06_closures.js:43 fib[1]  = 2
// 06_closures.js:43 fib[2]  = 3
// 06_closures.js:43 fib[3]  = 5
// 06_closures.js:43 fib[4]  = 8
// 06_closures.js:43 fib[5]  = 13

//если var 

// for (var i = 0; i < fib.length; i++) {
//     (function (j) {
//         setTimeout(function () {
//             console.log(`fib[${j}]  = ${fib[j]}`)
//         }, 1500)
//     })(i)
// }