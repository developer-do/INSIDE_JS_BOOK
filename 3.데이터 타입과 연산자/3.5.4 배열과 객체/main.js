/* 배열과 객체의 유사점과 차이점 */

/* colorsArray 배열 */
var colorsArray = ['orange', 'yellow', 'green'];
console.log(colorsArray[0]);
console.log(colorsArray[1]);
console.log(colorsArray[2]);

/* colorsObj 객체 */
var colorsObj = {
	'0': 'orange',
	'1': 'yellow',
	'2': 'green'
};

console.log(colorsObj[0]);
console.log(colorsObj[1]);
console.log(colorsObj[2]);

/* typeof 연산자 비교 */
console.log(typeof colorsArray);
console.log(typeof colorsObj);

/* length property */
console.log(colorsArray.length);
console.log(colorsObj.length);

/* 배열 표준 method */
colorsArray.push('red');
console.log(colorsArray.length);
/* colorsObj.push('red'); */

