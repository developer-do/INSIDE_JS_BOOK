var Person = function (arg) {
  var name = arg ? arg : '도현';
  this.getName = function () {
    return name;
  }
  this.setName = function (value) {
    name = value;
  }
};


var me = new Person();
console.log(me.getName());

me.setName('민지');
console.log(me.getName());
console.log(me.name)

console.dir(me);


var Person1 = function (arg) {
  var name = arg ? arg : "도현";

  return {
    getName() {
      return name;
    },
    setName(value) {
      name = value;
    }
  };
}

var me1 = new Person1();
console.log(me1);
console.log(me1.getName());
me1.setName("밍뒤밍뒤");
console.log(me1.getName());


var ArrCreate = function (arg) {
  var arr = [1, 2, 3];

  return {
    getArr: function () {
      return arr;
    }
  };
}

var obj = ArrCreate();
var arr = obj.getArr();
console.log(arr);
arr.push(5);
console.log(arr);

var Person2 = function (arg) {
  var name = arg ? arg : '도현';

  var Func = function () { }
  Func.prototype = {
    getName() {
      return name;
    },
    setName(value) {
      name = value;
    }
  };
  return Func;
}();

var me2 = new Person2();
console.log(me2);
console.dir(me2);
console.log(me2.getName());