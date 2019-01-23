function outerFunc() {
  var x = 10;
  var innerFunc = function () {
    console.log(x++);
  }
  return innerFunc;
}


var inner = outerFunc();
console.dir(inner);
inner();
inner();
inner();
inner();
inner();
inner();

console.log("\n\n\n");

function outerFunc1(arg1, arg2) {
  var local = 8;
  function innerFunc(innerArg) {
    console.log((arg1 + arg2) / (innerArg + local));
  }
  return innerFunc;
}

var exam1 = outerFunc1(2, 4);
exam1(-2);