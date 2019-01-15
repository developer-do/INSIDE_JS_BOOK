// 객체 리터럴 방식을 통한 foo 객체 생성
var foo = {
	name : 'foo',
	major : 'couputer science'
};

// 객체 프로퍼티 읽기
console.log(foo.name);
console.log(foo['name']);
console.log(foo.nickname);

// 객체 프로퍼티 갱신
foo.major = 'electronics engineering';
console.log(foo.major);
console.log(foo['major']);

/* 객체 프로퍼티 동적 생성 */

foo.age = 30;
console.log(foo.age);

/* 대괄호 표기범만을 사용해야 할 경우 */
foo['full-name'] = 'foo bar';
console.log(foo['full-name']);
console.log(foo.full);
console.log(foo.name);
