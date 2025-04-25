const fruit = ["apple", "banana", "cherry", "mango", "orange"];
// for(let i = 0; i <fruit.length; i++){
//     console.log(`furit[${i}]:${fruit[i]}`);
// }

fruit.push("peach");
console.log(`furit:${fruit}`);
fruit.push("strawberry");
console.log(`furit:${fruit}`);
//push : 맨 뒤 추가

fruit.pop();
console.log(`fruit:${fruit}`);
//pop : 맨 뒤 삭제

fruit.unshift("blueberry");
console.log(`fruit:${fruit}`);
fruit.unshift("lemon");
console.log(`fruit:${fruit}`);
//unshift : 맨 앞 추가

fruit.shift();
console.log(`fruit:${fruit}`);
//shift : 맨 앞 삭제

console.log("=================================");
fruit.forEach(function(f){
    console.log(`1value:${f}`);
});

fruit.forEach(function(f, idx){
    console.log(`idx:${idx}, value:${f}`);
});

console.log("=================================");
for(let i = 0; i < fruit.length; i++){
    console.log(`idx:${i}, fruit[${i}]:${fruit[i]}`)
}