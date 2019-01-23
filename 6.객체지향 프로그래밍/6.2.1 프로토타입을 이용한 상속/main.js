var person = {
  name: "dohyun",
  getName: function () {
    return this.name;
  },
  setName: function (value) {
    this.name = value;
  }
};

function create_object(o) {
  function F() { }
  F.prototype = o;
  return new F();
}

var student = create_object(person);
console.dir(student);

console.log(student.getName());
student.setName("me");
console.log(student.getName());

student.setAge = function (age) { this.age = age; }
student.getAge = function () { return this.age; }

$.extend = $.fn.extend = function (obj, prop) {
  if (!prop) {
    prop = obj;
    obj = this;
  }
  for (var i in prop) {
    obj[i] = prop[i];
  }
  return obj;
}


/* for (; i < length; i++) {
  if ((options = arguments[i]) != null) {
    for (name in options) {
      src = target[name];
      copy = options[name];

      if (target === copy) {
        continue;
      }

      if (deep && copy && ($.isplainObject(copy) || (copyIsArray = $.isArray(copy)))) {
        if (copyIsArray) {
          copyIsArray = false;
          clone = src && $.isArray(src) ? src : [];
        } else {
          clone = src && $.isPlainObject(src) ? src : {};
        }

        target[name] = $.extend(deep, clone, copy);
      } else if (copy !== undefined) {
        target[name] = copy;
      }
    } 
  }
} */