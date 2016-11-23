//Array类型

var colors = ["red","black","blue"];
colors[colors.length] = "orange";
console.log(colors.length);



//join()
var arr = [1,"2K",222,"4444"];
console.log(arr.join("|"));

//push() -- 返回添加末尾后的数组长度
var arr1 = [1,2,3,4,5];
console.log(arr1.push(1));

//pop();
var arr2 = [1,2,3,4,5,5,"ancunho"];
var newArr2LastVar = arr2.pop();
console.log(newArr2LastVar);

//shift() && unshift()


//reverse() && sort()

//concat() && slice()--1个或2个参数

//splice()


// 下面的函数是在IE9+浏览器可以使用
//indexOf() && lastIndexOf()

//every() && some() && filter() && forEach() && map()

//reduce() && reduceRight()
