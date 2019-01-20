// Person() 생성자 함수
var Person = function (name) {
  // 함수 코드 실행 전
  this.name = name;
  // 함수 리턴
};

// foo 객체 생성
var foo = new Person('foo');
console.log(foo.name);

/* 객체 생성 두 가지 방법(객체 리터럴 vs 생성자 함수) */

// 객체 리터럴 방식으로 foo 객체 생성
var foo2 = {
  name: 'foo',
  age: 35,
  gender: 'man'
};

console.dir(foo2);

// 생성자 함수
function Persons(name, age, gender, position) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

var bar = new Persons('bar', 33, 'woman');
console.dir(bar);

var baz = new Persons('baz', 25, 'woman');
console.dir(baz);

var qux = Persons('qux', 20, 'man');

console.log(qux);

console.log(window.name);
console.log(window.age);
console.log(window.gender);


function A(arg) {
  console.log(this instanceof A);
  if (!(this instanceof A)) {
    return new A(arg);
  }
  this.value = arg ? arg : 0;
}

var a = new A(100);
var b = A(10);

console.log(a.value);
console.log(b.value);