var person = {
  name: "이름을 적어주세요.",
  getName() {
    return this.name;
  },
  setName(value) {
    this.name = value;
  }
};

function create_object(o) {
  function F() { };
  F.prototype = o;
  return new F();
}

function extend(obj, prop) {
  if (!prop) {
    prop = obj;
    obj = this;
  }
  for (var i in prop) {
    obj[i] = prop[i];
  }
  return obj;
};

var student = create_object(person);
var added = {
  age: '나이를 적어주세요.',
  setAge(age) {
    this.age = age;
  },
  getAge() {
    return this.age;
  }
};

var job = {
  job: '직업을 정해주세요.',
  setJob(job) {
    this.job = job;
  },
  getJob() {
    return this.job;
  }
}

var list = {
  fullInfo() {
    return `${this.name} 님의 나이는 ${this.age}이며, 직업은 ${this.job}입니다.`;
  }
}

extend(student, added);
extend(student, job);
extend(student, job);
extend(student, list);
student.setName("도현");
student.setAge(28);
student.setJob("개발자");


console.log(student.fullInfo());
console.dir(student);