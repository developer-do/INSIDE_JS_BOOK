// myObject 객체 생성
var myObject = {
  name: "foo",
  sayName() {
    console.log(this.name);
  }
};

// otherObject 객체 생성
var otherObject = {
  name: "ber"
};

// otherObject.sayName() method
otherObject.sayName = myObject.sayName;
console.log(otherObject.sayName);
console.log(myObject.sayName);

// sayName() method 호출
myObject.sayName();
otherObject.sayName();