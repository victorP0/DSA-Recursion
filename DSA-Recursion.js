const Sheepcount = function(Sheeps) {
    // Base case
    if (Sheeps < 1) {
        return console.log("All sheep jumped over the fence");
    }
    // General case
    console.log(Sheeps + ": Another sheep jumps over the fence")
    Sheeps--
    Sheepcount(Sheeps)
}

let Sheeps = 3;
console.log(Sheepcount(Sheeps));

const powerCalculator = function(base, exponent){
    if (exponent == 0) {
        return console.log("exponent should be >= 0")
    }
    else{    
        return base * powerCalculator(base, exponent-1)
    } 
}

console.log(powerCalculator(2,2))

var factorial = function(n) {
	// base case: 
	if (n === 0){
	    return 1;
	}
	// recursive case:
	return factorial(n-1)* n;
}; 

console.log(factorial(5))