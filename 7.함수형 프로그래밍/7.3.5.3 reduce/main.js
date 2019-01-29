Array.prototype.reduce = function (callback, memo) {
  // this가 null인지, 배열인지 체크
  // callback이 함수인지 체크
  if (memo === undefined) {
    memo = 0;
  }

  var obj = this; // obj = this 참조
  var value, accumulated_value = 0; // 나머지 변수 선언

  for (var i = 0; i < obj.length; i++) {
    value = obj[i];  // value 에 obj[i] 값 대입 (value는 계속 대입되서 값이 계속 변함)
    accumulated_value = callback.call(null, accumulated_value, value);  // 
  }

  return accumulated_value + memo;
};

var arr = [1, 2, 3];
var accumulated_val = arr.reduce(function (a, b) {
  return a + b * b;
});

console.log(accumulated_val);