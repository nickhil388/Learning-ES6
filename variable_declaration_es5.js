


/*
	Javascript has two scope ie. Global Scope and Function Scope

	Variables declared in global scope are accessible anywhere in the program.

	Variable declared in function scope are only accessible in function scope.

	If a variable is not declared but assigned a value. Javascript checks its parent nodes to find variable if it exists assign it new value.
	if it does not find it , then javascript implicity declares it in global scope.

*/

var glob = "Global Vaiable";


direct_assign = "Not declared but used";
function funcSc(){
	var local = "Local Variable";
	console.log(local);
	console.log(glob);

	glob = "Global Variable has been modified by function";
	console.log(direct_assign);

	direct_assign_infunction = 2222;
}

funcSc();

console.log(glob);


console.log(direct_assign_infunction);