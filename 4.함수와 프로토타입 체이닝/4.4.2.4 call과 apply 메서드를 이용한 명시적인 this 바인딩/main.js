/* apply() method를 이용한 명시적인 this 바인딩 */

// 생성자 함수
function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

// foo 빈 객체 생성
var foo = {};
var foo2 = {};

// apply() method 호출
Person.apply(foo, ['foo', 30, 'man']);
console.dir(foo);

Person.call(foo2, 'foo2', 31, 'man2');
console.dir(foo2);

/* apply() method를 활용한 arguments 객체의 배열 표준 메서드 slice() method 활용 코드 */

function myfunction() {
  console.dir(arguments);

  // arguments.shift();  => error

  // arguments 객체를 배열로 변환
  var args = Array.prototype.slice.apply(arguments);
  console.dir(args);
}

myfunction(1, 2, 3);

var arrA = [1, 2, 3];
var arrB = arrA.slice(0);
var arrC = arrA.slice();
var arrD = arrA.slice(1);
var arrE = arrA.slice(1,2);
console.log(`arrA => ${arrA} / arrB => ${arrB} / arrC => ${arrC} / arrD => ${arrD} / arrE => ${arrE}`);
