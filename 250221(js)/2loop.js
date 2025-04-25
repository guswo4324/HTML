// let num = 1;
// while(num <= 10){
//     console.log(num);
//     num++;
// }

// do{
//     console.log("=================");
// } while(false);

// for(let i = 0; i < 11; i++){
//     console.log(i);
// }

// for(let dan = 2; dan < 10; dan++){
//     for(let col = 1; col < 10; col++){
//         console.log(`${dan} * ${col} = ${dan*col}`);
//     }
//     console.log("=================");
// }

// for(let dan = 1; dan < 10; dan++){
//     console.log(`2 * ${dan} = ${2*dan}`);
// }

// let fruit = ["apple", "banana", "cherry", "dangam", "mango", "strawberry", "melon", "peach"];
// for(i = 0; i < fruit.length; i++){
//     console.log(fruit[i]);
// }

// console.log("=================");

// for(let idx in fruit){
//     console.log(fruit[idx]);
// }

// console.log("=================");

// let obj = {name : "철수", age:"20"};
// for(let key in obj){
//     console.log(key + " : " + obj[key]);
// }

// console.log("=================");

// let person = {
//     name : "김수호",
//     age : 20,
//     height : 180,
//     weight: 100,
// }

// for(let key in person){
//     console.log(key + " : " + person[key]);
// }

// for(let j = 1; j <= 3; j++){
//     console.log("j="+j);
//     console.log("===============");
//     for(let i = 1; i < 11; i++){
//         console.log("i="+i);
//         if(i === 5){
//             console.log("\n");
//             break;
//         }
//         console.log("----------")
//     }
// }

// for(let j = 1; j <= 3; j++){
//     console.log("j="+j);
//     for(let i = 1; i < 11; i++){
//         console.log("     i="+i);
//         if(i === 5){
//             continue;
//         }
//         console.log("----------")
//     }
//     console.log("==============");
// }

// let sum = 0;
// for(i = 1; i<=100; i++){
//     sum = sum + i;
// }
// console.log(sum);
// console.log("1~100까지 합은"+sum+"입니다");

// let sum1 = 0;
// for(j = 1; j<=999; j++){
//     if(j%2 == 0){
//         sum1++;
//     }
// }
// console.log(sum1);

// for(i = 1; i<=9; i++){
//     for(j=1; j<=9; j++){
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
//     console.log("===============")
// }
//parseInt

for(let i=100; i<=999; i++){
    let A = parseInt(i/100);
    let B = parseInt((i-(100*A))/10); 
    let C = i%10; 
    let sum = (A*A*A) + (B*B*B) + (C*C*C);
    if(sum === i){
        console.log(i);
    }
}

