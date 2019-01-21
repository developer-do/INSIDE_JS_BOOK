var myObject = {
  name: 'foo',
  sayName() {
    console.log(`My Name is ` + this.name);
  }
}
console.dir(myObject);

myObject.sayName();
console.log(myObject.hasOwnProperty('name'));
console.log(myObject.hasOwnProperty('nickName'));
myObject.sayNickName();