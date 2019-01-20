/* 전역 객체와 전역 변수의 관계를 보여주는 예제 코드 */
var foo = "i'm foo";

console.log(foo);
console.log(window.foo);


/* 함수를 호출할 때 this 바인딩을 보여주는 예제 코드 */
var test = "This is test";
console.log(window.test);

// sayFoo() 함수
var sayFoo = function () {
  console.log(this.test);
}

sayFoo();



// 번역변수 value 정의
var value = 100;

// myObject 객체 생성
var myObject = {
  value: 1,
  func1() {
    var cnt = this;
    this.value += 1;
    console.log(`func1() called. this.value : ${this.value}`);

    // func2() 내부 함수
    func2 = function() {
      cnt.value += 1;
      console.log(`func2() called. this.value : ${cnt.value}`);

      // func3() 내부 함수
      func3 = function() {
        cnt.value += 1;
        console.log(`func3() called. this.value : ${cnt.value}`);
      }
      func3();
    }
    func2();
  }
}

myObject.func1();
myObject.func1();
console.log(value);

