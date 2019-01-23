function countSeconds(howMany) {
  for (var i = 1; i <= howMany; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}

countSeconds(3);

function countS(cnt) {
  for (var i = 1; i <= cnt; i++) {
    (function (current) {
      setTimeout(function () {
        console.log(current);
      }, i * 1000);
    })(i);
  }
}
countS(5);