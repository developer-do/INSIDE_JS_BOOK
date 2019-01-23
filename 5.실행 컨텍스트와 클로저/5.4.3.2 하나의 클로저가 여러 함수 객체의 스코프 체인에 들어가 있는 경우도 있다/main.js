function func() {
  var x = -1;
  return {
    func1: function () { console.log(++x); },
    func2: function () { console.log(--x); }
  };
};

var exam = func();
console.log(exam);
exam.func1();
exam.func2();
exam.func1();
exam.func1();
exam.func2();
exam.func2();
exam.func1();
exam.func1();
exam.func1();
exam.func1();
exam.func2();
