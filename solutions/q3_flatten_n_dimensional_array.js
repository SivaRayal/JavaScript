/* Write a Program to Flatten a given n-dimensional array */

const flatten = (arr) => {
	// Write your code here
	// let output = Array.isArray(arr) ? arr.reduce ((outObj,items) => {
	// 	return outObj.concat(items);
	// },[]):arr;
	// console.log(output);

	return Array.isArray(arr) ? arrayConverter(arr) : null;
	
};

function arrayConverter(arr){
	try{
		let output = Array.isArray(arr) ? [].concat(...arr.map(arrayConverter)) : arr;
		return output;
	}catch(err){
		return null;
	}
};

console.log(flatten([1, [2, 3], [[4], [5]]]));

/* For example,
INPUT - flatten([1, [2, 3], [[4], [5]])
OUTPUT - [ 1, 2, 3, 4, 5 ]

*/

module.exports = flatten;
