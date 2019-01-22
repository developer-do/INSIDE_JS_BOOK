var var1 = 1;
var var2 = 2;
function func() {
  var var1 = 10;
  var var2 = 20;
  console.log(var1);
  console.log(var2);
}
console.dir(window);
console.dir(func);
console.log(var1);
console.log(var2);

var value = 'value1';

function printFunc() {
  var value = 'value2';

  function printValue() {
    console.log(this);
    return value;
  }

  console.log(printValue());
}

printFunc();

console.log('\n\n\n');

var value1 = 'value1';

function printValue1() {
  return value;
}

function printFunc1(func) {
  var value1 = 'value2';
  console.log(func());
}

printFunc1(printValue1);


var y = { x : 5 };
function withExamFunc() {
  var x = 10;
  var z;
  console.log(x);

  with(y) {
    z = function() {
      console.log(x);
    }
  }
  z();
}
withExamFunc();