/* 객체 리터럴을 통한 foo 객체 생성 */
var foo = {
	name: 'foo',
	nickname: 'babo'
};

console.log(foo.nickname);
delete foo.nickname;
console.log(foo.nickname);

delete foo;
console.log(foo.name);

