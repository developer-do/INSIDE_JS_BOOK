/* 프로토타입 체이닝과 동적 프로퍼티 생성 */

// Person() 생성자 함수
function Person(name) {
  this.name = name;
}

Person.prototype.country = 'Korea';

var foo = new Person('foo');
var bar = new Person('bar');
console.log(foo.country);
console.log(bar.country);
foo.country = 'USA';

console.log(foo.country);
console.log(bar.country);

console.dir(foo);
console.dir(bar);