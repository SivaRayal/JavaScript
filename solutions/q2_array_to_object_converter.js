/* Write a Program to convert an array of objects to an object
	based on a given key */


const convert = (arr, field) => {
	// Write your code here
	// var finalObj = {};
	// arr.forEach(item => {
	// 	finalObj[item[field]]=item;
	// });
	// console.log(finalObj);
	
	try{
		return arr.reduce((obj, item) => {
			return { ...obj, [item[field]]: item };
		}, {});
	} catch(err){
		return null;
	}
	
};

console.log(convert('x', 'id'));

/* For example,
INPUT - convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id')
OUTPUT - {
			'1': {id: 1, value: 'abc'},
			'2': {id: 2, value: 'xyz'}
		 }


*/

module.exports = convert;
