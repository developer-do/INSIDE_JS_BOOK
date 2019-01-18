function func(arg1, arg2) {
  console.log(arg1, arg2);
}

func();
func(1);
func(1, 2);
func(1, 2, 3);

// add() 함수
function add(a, b) {
  // arguments 객체 출력
  console.dir(arguments);
  return a + b;
}
console.log(add(1));
console.log(add(1, 2));
console.log(add(1, 2, 3));

// sum() 함수
function sum() {
  var result = 0;

  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] !== 'number') {continue;}
    result += arguments[i];
  }
  return result;
}

console.log(sum(1, 2,"2",6));