/* "I am XXX. I live in XXX. i'm XX years old" 라는 문장을 출력하는데 XX 부분은 사용자에게 인자로 입력받아 값을 출력하는 함수 */

var buffAr = [
  'I am ', 
  '', 
  '. I live in ', 
  '', 
  '. I\'m ', 
  '', 
  ' year old'
];


function getCompletedStr(name, city, age) {
  buffAr[1] = name;
  buffAr[3] = city;
  buffAr[5] = age;
}

var str = getCompletedStr('도현', '춘천', 28);

console.log(str);


var getCompletedStr2 = (function () {
  var buffAr = [
    'I am ',
    '',
    '. I live in ',
    '',
    '. I\'m ',
    '',
    ' year old'
  ];

  return (function (name, city, age) {
    buffAr[1] = name;
    buffAr[3] = city;
    buffAr[5] = age;

    return buffAr.join('');
  });
})();

var str2 = getCompletedStr2("Dohyun", "chuncheon", 28);
console.log(str2);