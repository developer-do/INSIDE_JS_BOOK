function HelloFunc(func) {
  this.greeting = 'hello';
  this.goodBye = 'Good Bye';
}

HelloFunc.prototype.call = function (func) {
  func ? func(this.greeting, this.goodBye): this.func(this.goodBye);
}

var userFunc = function (a) {
  console.log(a + " z");
}

function Dohyun(a, b) {
  console.log(a + " " + b + " Dohyun");
}



var objHello = new HelloFunc();
objHello.func = userFunc;
objHello.call(Dohyun);
objHello.call();

// console.log(HelloFunc.prototype);

// var objHello2 = new HelloFunc();
// objHello2.func = function () {
//   console.log('Hello');
// }
// objHello2.call();
console.log("\n\n\n");


function saySomething(obj, methodName, name) {
  return (function (greeting) {
    return obj[methodName](greeting, name);
  });
}

function newObj(obj, name) {
  obj.func = saySomething(this, 'who', name);
  return obj;
}

newObj.prototype.who = function (greeting, name) {
  console.log(greeting + " " + (name || "everyone"));
}

var obj1 = new newObj(objHello, '도현');
obj1.call();

console.log(obj1['who']);
console.dir(newObj(objHello, '도현'));
// console.dir(newObj);

console.dir(objHello);
console.dir(obj1.name);