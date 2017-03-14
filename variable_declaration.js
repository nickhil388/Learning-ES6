

"use strict";

function dec(){

	if(1+1===2){
		var foo = "Foo";
		console.log(foo);
	}
	console.log(foo);
}

dec();



//use Strict mode

//a = 23.2;
//console.log(a);


//var foo = "foo";          //function scope
let  bar = "bar";    // block scope

const baz = "baz"     // cannot be reassigned
//constant are not immutable i.e they cannot be reassined to new value 
//but the value of object properties and array elements can be changed.
//

//baz = "Aaz"; 
// no change in baz it is still equals to baz;
const cob = {
	a :'a'
};

const carr =  [ 1, 2, 3];


cob.a = 'b'; // propery value changed;
carr[1]= 0;

console.log(cob);
console.log(carr);



// function scope


function varTest(){
	var foo = true;
	if(true){
		var foo = false;
		console.log(foo);
	}

	console.log(foo)
}
//varTest();

function letTest(){
	let foo = true;
	if(true){
		let foo = false;
		console.log(foo);
	}

	console.log(foo)
}
letTest();