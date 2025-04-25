// const num = 10.42;
// console.log(Math.floor(num));
// console.log(Math.ceil(num));
// console.log(Math.round(num));

const r = Math.random();
console.log(`r: ${r}`);

//0에서 20 사이의 값 고르기
let num1 = Math.random() * 20;
console.log(`1num1: ${num1}`);
num1 = Math.floor(num1);
console.log(`2num1: ${num1}`);
num1 = num1 + 1;
console.log(`3num1: ${num1}`);
console.log(`0에서 20사이의 값 하나를 골라줘 : ${Math.floor(Math.random() * 20)+1}`);


let num2 = 0.999;
console.log(`1num2:${num2}`);
num2 = num2 * 20;
console.log(`2num2: ${num2}`);
num2 = Math.floor(num2);
console.log(`3num2: ${num2}`);
num2 = num2 + 1;
console.log(`4num2: ${num2}`);