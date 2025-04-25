console.log("이번주 로또 예상 번호");
for(let i = 1; i<=6; i++){
    console.log((`번호 ${i} : ${Math.floor(Math.random() * 45)+1}`));
}

console.log("이번주 로또 예상 번호");
const rannum = new Array(6)
for(let i = 0; i<rannum.length; i++){
    rannum[i] = Math.floor(Math.random() * 45)+1;
}
console.log(`로또번호 : ${rannum}`);

// const arr = [10, 120, 30, 50, 20];
// let Max = arr[0];
// for(let i = 0; i<arr.length; i++){
//     if(Max < arr[i]){
//         Max = arr[i];
//     }
// }
// console.log(`최댓값 : ${Max}`);


// const arr1 = [10, 120, 30, 50, 20];
// let Min = arr[0];
// for(let i = 0; i<arr.length; i++){
//     if(Min > arr[i]){
//         Min = arr[i];
//     }
// }
// console.log(`최솟값 : ${Min}`);

