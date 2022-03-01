## THIS
1. 외부출력
console.log(this);
-> windows 객체

2. 함수내 출력
function sum(a, b){
  console.log(this)
  return a+b;
}
-> windows 객체

3. 생성자 내 출력
function Vue(el){
  console.log(this)
  return el;
}
-> Vue객체