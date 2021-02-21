// __proto__
// Object.getPrototypeOf()// ES 5

// function Cat(name, color) {
//     this.name = name;
//     this.color = color;
// }

// Cat.prototype.voice = function () {
//     console.log(`Cat ${this.name} says myay`);
// }

// const cat = new Cat('Kot', 'white');
// console.log(Cat.prototype);//{voice: ƒ, constructor: ƒ}
// console.log(cat);//Cat {name: "Kot", color: "white"}
// console.log(cat.__proto__);//{voice: ƒ, constructor: ƒ}
// console.log(cat.__proto__ === Cat.prototype);//true
// console.log(cat.constructor);//ƒ Cat(name, color) {
//     this.name = name;
//     this.color = color;
// }
// cat.voice();//Cat Kot says myay

//===============
// function Person() { }
// Person.prototype.legs = 2;
// Person.prototype.skin = 'white';

// const person = new Person();
// person.name = 'Dmitriy';

// // console.log('skin' in person)//true
// // console.log(person.legs);//2
// // console.log(person.eyes);//undefined
// // console.log(person.name);//Dmitriy

// console.log(person.hasOwnProperty('name'));//true
// console.log(person.hasOwnProperty('skin'));//true

// Object.create();
// const proto = { year: 2019 };
// const myYear = Object.create(proto);

// console.log(myYear.year);//2019

// proto.year = 2200;

// console.log(myYear.year);//2200


// console.log(myYear.hasOwnProperty('year'));//false
// console.log(myYear.__proto__ === proto);//true