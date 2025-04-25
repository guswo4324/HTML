// let a = 10
// console.log(`a:${a}`);

// function sum(){
//     let a = 100;
//     console.log(`only sum a:${a}`);
// }

// let b = 20;
// // console.log(`a:${a} b:${b}`);
// console.log(`b:${b}`);
// sum();

let a = 10;
{
    let b = 20;
    console.log(`코드 블록 내부 a: ${a}`);
    console.log(`코드 블록 내부 b: ${b}`);
}
console.log(`코드 블록 외부 a: ${a}`);
console.log(`코드 블록 외부 b: ${b}`);

var a1 = 10;
{
    var b1 = 20;
    console.log(`코드 블록 내부 a1: ${a1}`);
    console.log(`코드 블록 내부 b1: ${b1}`);
}
console.log(`코드 블록 외부 a1: ${a1}`);
console.log(`코드 블록 외부 b1: ${b1}`);

// //블록스코프는 let, const만 한정
// //예외 var





