/* 배열의 동적 프로퍼티 생성 */

/* 배열 생성 */
var arr = ['zero', 'one', 'two'];
console.log(arr.length);

/* 프로퍼티 동적 추가 */
arr.color = 'blue';
arr.name = 'number_array';
console.log(arr.length);
console.log(arr['color']);
console.log(arr['name']);

/* 배열 원소 추가 */
arr[3] = 'red';
console.log(arr.length);

/* 배열 객체 출력 */
console.dir(arr);

