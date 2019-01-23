function outerFunc(argNum) {
  var num = argNum;
  return function (x) {
    num += x;
    console.log(`num : ${num}`);
  }
}

var example = outerFunc(40);
example(5);
example(-10);