function each(obj, fn, args) {
  if (obj.length === undefined) {
    for (var i in obj) {
      console.log(fn.apply(obj[i], args || [i, obj[i]]));
      fn.apply(obj[i], args || [i, obj[i]]);
    }
  } else {
    for (var i = 0; i < obj.length; i++) {
      console.log(fn.apply(obj[i], args || [i, obj[i]]));
      fn.apply(obj[i], args || [i, obj[i]]);
    }
  }
  return obj;
}

each([1, 2, 3], function (idx, num) {
  console.log(idx + ": " + num);
});

var z = {
  name: "도현",
  age: 28,
  sex: "Male"
};

each(z, function (idx, value) {
  console.log(idx + ": " + value);
});
