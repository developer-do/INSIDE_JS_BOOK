/**********************************
function Person(name) {
  this.name = name;
}

Person.prototype.setName = function (value) {
  this.name = value;
};

Person.prototype.getName = function () {
  return this.name;
};

function Student(arg) {
  console.log(this);
  console.log(arguments);
  Person.apply(this, arguments);
}

var you = new Person("DoHyun");
Student.prototype = you;

console.log(Student.prototype);

var me = new Student();
me.setName("민지");
console.log(me.getName());

var me2 = new Student('밍뒤');
console.log(me2.getName());
me2.setName('밍디');
console.log(me2.getName());

*****************************/
function Person(name) {
  this.name = name;
}

Function.prototype.method = function (name, func) {
  this.prototype[name] = func;
}

Person.method("setName", function (value) {
  this.name = value;
});
Person.method("getName", function () {
  return this.name;
});

function Student(arg) {

}

// function F() { };
// F.prototype = Person.prototype;
// Student.prototype = new F();
// Student.prototype.constructor = Student;
// Student.super = Person.prototype;
// console.dir(Student);



// var me = new Student();
// console.dir(me);
// me.setName('도현');
// console.log(me.getName());


var inherit = function (Parent, Child) {
  var F = function () { };
  return function (Parent, Child) {
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    Child.super = Parent.prototype;
  }
}();

var name = inherit(Person, Student);
console.dir(name);
console.dir(inherit);