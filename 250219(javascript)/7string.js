let string1 = "Hello, World!";
let string2 = 'Hello, World!'; 

console.log(string1);
console.log(string2);

let string3 = '문자열은 큰따옴표(")나 작은따옴표(\')로 감싸면 됩니다.';
console.log(string3);

let string4 = "이스케이프 문자열을 이용해서\n줄바꿈을 하고 싶어요";
console.log(string4);

let string5 = '문자열' + " 연결 연산자";
console.log(string5);
  
let string6 = '문자열은 큰따옴표(")나' + " 작은따옴표(')로 감싸면 됩니다.";
console.log(string6);

let string7 = '문자열은 큰따옴표(")로 감싸면 됩니다.';
let string8 = "문자열은 작은따옴표(')로 감싸면 됩니다.";

console.log(string7);
console.log(string8);

let string = `문자열은 큰따옴표(")나 
작은따옴표(')로 감싸면 됩니다.`;
// `` : \n기능 되는 문자열 표시 문자 
console.log(string);
