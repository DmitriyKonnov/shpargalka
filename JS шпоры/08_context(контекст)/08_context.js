// const person = {
//     surname: 'Старк',
//     knows: function (what, name) {
//         console.log(`Ты ${what} знаешь, ${name} ${this.surname}`);
//     }
// }

// const john = {
//     surname: 'Сноу'
// }

// person.knows('все', 'Бран'); //Ты все знаешь, Бран Старк

// person.knows.call(john, 'ничего не', 'Джон');//Ты ничего не знаешь, Джон Сноу
// person.knows.apply(john, ['ничего не', 'Джон']);//Ты ничего не знаешь, Джон Сноу
// person.knows.call(john, ...['ничего не', 'Джон']);//Ты ничего не знаешь, Джон Сноу
// const bound = person.knows.bind(john, 'ничего не', 'Джон');
// bound();//Ты ничего не знаешь, Джон Сноу

//=======

//ES5

// function Person(name, age) {
//     this.name = name;
//     this.age = age;

//     console.log(this);
// }

// const elena = new Person('Elena', 20);

//=======  Явный  =======
// function logThis() {
//     console.log(this);
// }

// const obj = { num: 42 };

// logThis.apply(obj);//{num: 42}
// logThis.call(obj);//{num: 42}
// logThis.bind(obj)();//{num: 42}

// //=======  Неявный  =======

// const animal = {
//     legs: 4,
//     logThis: function () {
//         console.log(this);
//     }
// }

// animal.logThis();//{legs: 4, logThis: ƒ}


//=====

// function Cat(color) {
//     this.color = color;
//     console.log('This', this);
//     (() => console.log('Arrow', this))()
// }

// new Cat('red');