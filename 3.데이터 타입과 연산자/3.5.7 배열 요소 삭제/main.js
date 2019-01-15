/* delete 연산자를 이용한 배열 프로퍼티 삭제 */
var arr = ['zero', 'one', 'two', 'three'];
delete arr[2];
console.log(arr);
console.log(arr.length);

/* splice() method 를 이용한 배열 프로퍼티 삭제 */
var arr1 = ['zero', 'one', 'two', 'three'];

arr1.splice(2,1);
console.log(arr1);
console.log(arr1.length);

