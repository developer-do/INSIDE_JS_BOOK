/* 프로토타입 객체 변경 */

// Person() 생성자 함수
function Person(name) {
  this.name = name;
}
console.log(`Person.prototype.constructor => ${Person.prototype.constructor}`);

// foo 객체 생성
var foo = new Person('foo');
console.log(`foo.country => ${foo.country}`);

// 디폴트 프로토타입 객체 변경
Person.prototype = {
  country: 'korea'
};
console.log(`Person.prototype.constructor => ${Person.prototype.constructor}`);

// bar 객체 생성
var bar = new Person('bar');
console.log(`foo.country => ${foo.country}`);
console.log(`bar.country => ${bar.country}`);
console.log(`foo.constructor => ${foo.constructor}`);
console.log(`bar.constructor => ${bar.constructor}`);
console.dir(foo);
console.dir(bar);