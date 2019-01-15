/* 배열의 length 프로퍼티 변경 */
var arr = [ ];
console.log(arr.length);

arr[0] = 0;
arr[1] = 1;
arr[2] = 2;
arr[100] = 100;
console.log(arr.length);

var arr1 = [0, 1, 2];
console.log(arr1.length);

arr1.length = 5;
console.log(arr1);

arr1.length = 2;
console.log(arr1);
console.log(arr1[2]);


