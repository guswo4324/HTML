let sum = 10 + 20*3;

console.log(sum);

sum = (10 + 20) * 3;
console.log(sum);

let increment = 10;
increment++;
console.log(increment); //11
console.log(increment++); //11
console.log(increment); //12
console.log(++increment); //13
console.log(increment); //13

let decrement = 1;
decrement--;
console.log(decrement); //0
console.log(decrement--); //0
console.log(decrement); //-1
console.log(--decrement); //-2
console.log(decrement); //-2

let x = 10;
x += 5;
console.log(x); //15
x -= 5;
console.log(x); //10
x *= 5;
console.log(x); //50
x /= 2;
console.log(x); //25
x %= 3;
console.log(x); //1
x **= 2;
console.log(x); //1

console.log(10 == 10); //true
console.log(10 == '10'); //*true* == : 값 같으면 true
console.log(10 === 10); //true  
console.log(10 === '10'); //false === : 값 같더라도 자료형이 다르면 false

console.log(10 != 10); //false
console.log(10 != '10'); //*false* 

//==, != : 자료형 달라도됨 값만 확인

console.log(10 != 9); //true
console.log(10 !== '9'); //true
console.log(10 !== 9); //true
console.log(10 !== '10'); //flase

console.log(!(10 == 10)); //false 
console.log(!(10 !== 10)); //true

console.log(10 < 10); //false
console.log(10 <= 10); //true
console.log(10 > 10); //false
console.log(10 >= 10); //true