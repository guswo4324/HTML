let num = 10;
let strNum = "10";

// 자료형을 확인할 때
console.log(typeof(num)); 
//number
console.log(typeof(strNum));
//string

let number = 10;

console.log(number); //10
number += 1;
console.log(number); //11
number += 1;
console.log(number); //12
number += 1;

let number2 = 10;

console.log(++number2); //11
console.log(++number2); //12
console.log(++number2); //13

let r = 10;
console.log(`넓이 = ${3.14 * r * r}`);
console.log(`둘레 = ${3.14 * 2 * r}`);

// 숫자 자료형으로 바꾸기
console.log(Number("273"));
console.log(typeof(Number("273")));