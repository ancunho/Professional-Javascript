//Object类型

function displayInfo(args) {
	var output = "";
	if (typeof args.name == 'string') {
		output += "Name : " + args.name + "\n";
		console.log("string--");
	}
	if (typeof args.age == 'number') {
		output += "Age : " + args.age + "\n";
		console.log("number--");
	}
	console.log(output);

}

displayInfo({
	name : "cunho"
	,age : 29
	,name : "ancunho"
});
