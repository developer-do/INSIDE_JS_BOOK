Array.prototype.map = function (callback) {
  /* this가 null인지, 배열인지 체크 */
  /* callback이 함수인치 체크 */
  if (typeof callback !== "function") {
    new TypeError("")
  }
  
  var obj = this;  // arr
  var value, mapped_value; 
  var A = new Array(obj.length);  // arr.length만큼 A배열 길이도 똑같이 만듬

  for (var i = 0; i < obj.length; i++) {
    value = obj[i];  // value에 obj[i]를 넣고
    mapped_value = callback.call(null, value);  // mapped_value에 인자로 들어온 callback 함수 call 메서드로 value (obj[i]) 를 가져와서 대입
    A[i] = mapped_value;  // 새로운 배열에 변환된 데이터 저장
  }

  return A; // A 출력
};

var arr = [1, 2, 3];
var new_arr = arr.map(function (value) {
  return value * value;
});

console.log(new_arr);