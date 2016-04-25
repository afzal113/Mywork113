'use strict';

// closure example

function addOne(x){
	return function addTwo(y) {
		return x + y;
	};
}

var add = addOne(5);
console.log(add(15));