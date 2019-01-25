/* 순수 함수 */
var f1 = function (input) {
  var result;
  /* 암호화 작업 수행 */
  result = 1;
  return result;
}

/* 순수 함수 */
var f2 = function (input) { 
  var result;
  /* 암호화 작업 수행 */ 
  result = 2;
  return result;
}

/* 순수 함수 */
var f3 = function (input) {
  var result;
  /* 암호화 작업 수행 */
  result = 3;
  return result;
}

/* 고계 함수 */
var get_encrypted = function (func) {
  var str = 'dohyun';

  return function () {
    return func.call(null, str);
  }
}

var encrypted_value = get_encrypted(f1)();
console.log(encrypted_value);

var encrypted_value = get_encrypted(f2)();
console.log(encrypted_value);

var encrypted_value = get_encrypted(f3)();
console.log(encrypted_value);