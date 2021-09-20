// function a(){
//   console.log('A');
// }

// 익명함수이며 a는 익명함수의 객체이다
// JavaScript에선 함수가 값이다는 뜻이다
var a = fuction(){
  console.log('A');
}

// a();

function slowfunc(callback){
  callback();
}

slowfunc(a);
