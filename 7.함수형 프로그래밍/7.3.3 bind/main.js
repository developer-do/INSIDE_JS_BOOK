Function.prototype.bind = function (thisArg) {
  var fn = this,
    slice = Array.prototype.slice,
    args = slice.call(arguments, 1);
  return function () {
    return fn.apply(thisArg, args.concat(slice.call(arguments)));
  }
}

var print_all = function (arg) {
  for (var i in this) {
    console.log(i + "(i[this]) : " + this[i]);
  }
  for (var i in arguments) {
    console.log(i + "(i[arguments]) : " + arguments[i]);
  }
}

var myobj = { name: "도현" };

var myfunc = print_all.bind(myobj);
myfunc();

var myfunc1 = print_all.bind(myobj, "도도", "현현");
myfunc1("inside_js_study");


if (!Function.prototype.bind) {
  Function.prototype.bind = function (oThis) {
    if (typeof this !== "function") {
      throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    }

    var aArgs = Array.prototype.slice.call(arguments, 1),
      fToBind = this,
      fNOP = function () { },
      fBound = function () {
        return fToBind.apply(this instanceof fNOP && oThis ? this : oThis,
          aArgs.concat(Array.prototype.slice.call(arguments)));
      };
    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();

    return fBound;
  };
}


/* --------------------------------------- */
  
function Person(arg) {
  if (this.name === undefined) {
    this.name = arg ? arg : "dohyun";
  }
  console.log("Name : " + this.name);
}


Person.prototype.setName = function (value) {
  this.name = value;
};

Person.prototype.getName = function () {
  return this.name;
};

var myobj = { name: "도현" };
var new_func = Person.bind(myobj);
new_func();

var obj = new Person();
console.log(obj.getName());