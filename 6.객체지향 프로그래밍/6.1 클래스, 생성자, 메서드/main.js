function Person(arg) {
  this.name = arg;

  this.getName = function () {
    return this.name;
  }

  this.setName = function (value) {
    this.name = value;
  }
}

var me = new Person("ehgus");
console.log(me.getName());

me.setName("Dohyun");
console.log(me.getName());

var you = new Person('you');
var him = new Person('him');

function Person1(arg) {
  this.name = arg;
}

Person1.prototype.getName = function () {
  return this.name;
}

Person1.prototype.setName = function (value) {
  this.name = value;
}
console.log(Person1.prototype['setName']);
console.log(!undefined);

console.dir(Person1);

Function.prototype.method = function (name, func) {
  if (!this.prototype[name]) {
    this.prototype[name] = func;
  } else {
    throw "이미 존재하는 prototype 입니다.";
  }
}

function Person2(name, age) {
  this.name = name;
  this.age = age;
  this.info = function() {
    return `${this.name}님의 나이는 ${this.age}입니다.`;
  }
}

Person2.method("setName", function (value) {
  this.name = value;
});

Person2.method("getName", function () {
  return this.name;
});

Person2.method("setAge", function (value) {
  this.age = value;
});

Person2.method("getAge", function () {
  return this.age;
});

console.dir(Person2);
var dohyun = new Person2("Dohyun", 28);
console.log(dohyun.info());
dohyun.setName("도현");
dohyun.setAge(27);
console.log(dohyun.info());