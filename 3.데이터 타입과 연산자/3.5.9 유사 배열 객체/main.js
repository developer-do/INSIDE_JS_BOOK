/* 유사 배열 객체의 배열 메서드 호출 */
var arr = ['bar'];
var obj = {
	name : 'foo',
	length : 1
};

arr.push('baz');
console.log(arr);

//obj.push('baz');

/* 유사 배열 객체에서 apply()를 활용한 배열 메서드 호출 */
var arr1 =['bar'];
var obj1 = {
	name: 'foo',
	length: 1
};

arr1.push('baz');
console.log(arr1);

Array.prototype.push.apply(obj1, ['baz']);
console.log(obj1);

