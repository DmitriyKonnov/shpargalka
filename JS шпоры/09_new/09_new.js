// function Cat(color, name) {
//     this.color = color;
//     this.name = name;
// }

// // const cat = new Cat('black', 'Кот');
// // console.log(cat);//Cat {color: "black", name: "Кот"}

//ES 5=====

// function myNew(constructor, ...args) {
//     const obj = {};
//     Object.setPrototypeOf(obj, constructor.prototype);
//     return constructor.apply(obj, args);
// }

// const cat = myNew(Cat, 'black', 'Кот');
// console.log(cat);



