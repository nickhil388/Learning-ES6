
var arr = [1,2,3];

function foo(a,b,c){
	console.log(a,b,c);
}

foo(arr); // [1,2,3] undefined undefined


//using apply to solve the problem


foo.apply(null, arr); // and it works !




//ES6 Spread Operator


foo(...arr);



