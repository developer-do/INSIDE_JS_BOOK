/* 함수 객체와 프로토타입 객체와의 관계를 보여주는 코드 */

// MyFunction() 함수 정의
function MyFunction() {
  return true;
}

console.dir(MyFunction);
console.dir(MyFunction.prototype.maple = "name");
console.dir(MyFunction.prototype.constructor);