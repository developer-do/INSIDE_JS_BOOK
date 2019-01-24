/* 6.4.1.1 subClass 함수 구조 */

// function subClass(obj) {
  /* (1) 자식 클래스 (함수 객체) 생성 */
  /* (2) 생성자 호출 */
  /* (3) 프로토타입 체인을 활용한 상속 구현 */
  /* (4) obj를 통해 들어온 변수 및 메서드를 자식 클래스에 추가 */
  /* (5) 자식 함수 객체 반환 */
// }


// /* var SuperClass = subClass();
// var SubClass = SuperClass.subClass();
// var Sub_SubClass = SubClass.subClass();

// var instance = new Sub_SubClass(); */

/* 6.4.1.2 자식 클래스 생성 및 상속 */

function subClass(obj) {

  var parent = this === window ? Function : this;
  var F = function () { };

  /* 6.4.1.4 생성자 호출 */
  var child = function () { 
    var _parent = child.parent;

    if (_parent && _parent !== Function) {
      _parent.apply(this, arguments);
    }
    if (child.prototype._init) {
      child.prototype._init.apply(this, arguments);
    }
  };
  /* 프로토 타입 체이닝 6.2.2 절에서 설명 되었다. */
  F.prototype = parent.prototype;
  child.prototype = new F();
  child.prototype.constructor = child;
  child.parent = parent;
  child.subClass = arguments.callee;

  /* 6.4.1.3 자식 클래스 확장 */

  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      child.prototype[i] = obj[i];
    }
  }

  return child;
}

/* 6.4.1.6 subClass 활용 */
var person_obj = {
  _init() {
    console.log("person init");
  },
  getName() {
    return this._name;
  },
  setName(name) {
    this._name = name;
  }
};

var student_obj = {
  _init() {
    console.log("student init");
  },
  getName() {
    return `Student Name: ${this._name}`;
  }
};

var Person = subClass(person_obj);  // Person 클래스 정의
var person = new Person();  // person init 출력
person.setName("도현");
console.log(person.getName());


var Student = Person.subClass(student_obj); // Student 클래스 정의
var student = new Student(); // person init , student init 출력
student.setName("밍디");
console.log(student.getName());
console.log(Student.toString());


var person2 = function (arg) {
  var name = undefined;

  return {
    _init(arg) {
      name = arg ? arg : "도현!!";
    },
    getName() {
      return name;
    },
    setName(value) {
      name = value;
    }
  };
}

Person = subClass(person2());
var iam = new Person("iam");
console.log(iam.getName());

Student = Person.subClass();
var student = new Student("student");
console.log(student.getName());