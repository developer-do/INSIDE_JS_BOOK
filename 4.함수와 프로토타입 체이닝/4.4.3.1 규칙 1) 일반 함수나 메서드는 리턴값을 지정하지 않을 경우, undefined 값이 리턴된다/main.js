/* return 문 없는 일반 함수의 리턴 값 확인 */

// noReturnFunc() 함수
var noReturnFunc = function () {
  console.log(`This function has no return statement.`);
  return 1;
};

var result = noReturnFunc();

console.log(result);