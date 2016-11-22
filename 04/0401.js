//引用类型
// console.log("===================");
// var obj1 = new Object();
// obj1.name = "cunho";
// console.log(obj1.name);

// var obj2 = obj1;
// obj2.name = "Anchunho";
// console.log(obj1.name);
// console.log(obj2.name);

// console.log("===================");

// function addTen(num) {
//     num += 10;
//     return num;
// }
// var count = 20;
// var count2 = addTen(count);
// console.log(count);
// console.log(count2);

// console.log("===================");

// function setName(obj) {
//     obj.name = "Anchunho";
// }
// var person = new Object();
// setName(person);


// console.log("===================");


//检测类型
var s = "This is String";
var i = 22;
var b = true;
var n = null;
var u;
var o = new Object();

console.log(typeof s); //string
console.log(typeof i); //number
console.log(typeof b); //boolean
console.log(typeof n); //object
console.log(typeof u); //undefined
console.log(typeof o); //object
console.log("===================");
console.log("检测类型的Upgrade Version， 如下：");
console.log(s instanceof Object); 
console.log(n instanceof RegExp);
console.log("===================");







