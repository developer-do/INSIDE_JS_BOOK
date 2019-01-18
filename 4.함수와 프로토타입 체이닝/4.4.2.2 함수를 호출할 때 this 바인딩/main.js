/* 전역 객체와 전역 변수의 관계를 보여준느 예제 코드 */
var foo = "i'm foo";

console.log(foo);
console.log(window.foo);


/* 함수를 호출할 때 this 바인딩을 보여준느 예제 코드 */
var test = "This is test";
console.log(window.test);

// sayFoo() 함수
var sayFoo = function () {
  console.log(this.test);
}

sayFoo();