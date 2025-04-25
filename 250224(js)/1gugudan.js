// function gugudan(){
//     for(let i = 1; i <= 9; i++){
//         console.log(`3 * ${i} = ${3 * i}`);
//     }
// }
// gugudan();
// console.log("\n");

// const gugudan1 = function gugudan3(){
//     for(let i = 1; i <= 9; i++){
//         console.log(`3 * ${i} = ${3 * i}`);
//     }
// }
// gugudan1(); //function gugudan3()을 변수 gugudan1로 지정 , 출력할때 소괄호 적어주기

// const annoymous_gugudan = function(){
//     for(let i = 1; i <= 9; i++){
//         console.log(`3 * ${i} = ${3 * i}`);
//     }
// }
// annoymous_gugudan();

// const gugudan = () => {
//     for(let i = 1; i <= 9; i++){
//         console.log(`3 * ${i} = ${3 * i}`);
//     }
// }
// gugudan();

// function gugudan(dan){
//     for(let i = 1; i <= 9; i++){
//         console.log(`${dan} * ${i} = ${dan*i}`);
//     }
// }
// gugudan(4);

// function sum(num1, num2){
//     console.log(`${num1} + ${num2} = ${num1+num2}`);
// }
// sum(10, 20);

// function sum1(){
//     console.log("파라미터 없습니다");
// }
// sum1();

// function sum(num1 = 1, num2 = 99){
//     console.log(`${num1} + ${num2} = ${num1+num2}`);
// }
// sum();

// function sum(num1, num2){
//     let result = num1 + num2;
//     console.log(`result = ${result}`);
//     return result;
// }

// const value1 = sum(10,20);
// console.log(`value1 = ${value1}`);
// console.log(`${result}`); ->안됨


function getArrayMaxNumber(arr){
    let result = arr[0];
    for(let i = 0; i<arr.length; i++){
        if(result < arr[i]){
            result = arr[i];
        }
    }
    return result;
}
const max = getArrayMaxNumber([10, 50, 30, 100]);
console.log(max);

function getArrayMinNumber(arr){
    let result1 = arr[0];
    for(let i = 0; i<arr.length; i++){
        if(result1 > arr[i]){
            result1 = arr[i];
        }
    }
    return result1;
}
const min = getArrayMinNumber([50, 1, 5, 100]);
console.log(min);