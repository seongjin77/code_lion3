let test = Array.from('하나둘셋');

console.log(test);

let test2 = '하나둘셋';

for(let i of test2){
  console.log(i);
}

// 자바스크립트는 원시타입 or 객체타입으로 나뉜다.

// string은 원시타입이다.
// string은 유사배열객체다. string의 프로퍼티는 원시타입이므로 값을 변경할 수 없다.

// 이해 안가는 점은 애초에 원시타입이 제외한 것은 다 객체 아닌가?
// 그리고 객체면 값을 변경할 수 있는게 아닌가?

let test3 = new String('하나');

console.log(test3);