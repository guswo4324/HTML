const pw = "124";
console.log(`pw.length:${pw.length}`);
if(pw.length < 4){
    console.log("비밀번호는 최소 4자리 이상 입력해 주세요.");
}
//변수명.length : 문자열 길이

const email = "test!@naver.com";
console.log(`email.includes("@"):${email.includes("@")}`);
if(email.includes("@") === false){
    console.log("1올바른 이메일 형식이 아닙니다.");
}
if(!email.includes("@")){
    console.log("2올바른 이메일 형식이 아닙니다.");
}
else{
    console.log(`${email.includes("@")}`);
}
//변수명.includes("~") : ~포함하면 true, ~없으면 false

const email1 = "test!naver.com";
console.log(`eamil1.indexOf("@"): ${email1.indexOf("@")}`); //값이 존재하지 않으면 -1값 
console.log(`eamil1.indexOf("."): ${email1.indexOf(".")}`);
console.log(`eamil1.indexOf("e"): ${email1.indexOf("e")}`); //같은 값이 있을때 제일 첫번째값
console.log(`eamil1.indexOf("N"): ${email1.indexOf("N")}`); 
//변수명.indexOf("~") : 문자열의 ~의 인덱스상 위치

const str = "Hello, Dooly";
console.log(`str.replace("Dooly", "Donur") : ${str.replace("Dooly", "Donur")}}`);
console.log(`str.replace("o", "a") : ${str.replace("o", "a")}}`);
console.log(`str.replaceAll("o", "a") : ${str.replaceAll("o", "a")}}`);
console.log(`str.toUpperCase():${str.toUpperCase()}`);
console.log(`str.toLowerCase():${str.toLowerCase()}`);
console.log(`str.substring(0, 1):${str.substring(0, 1)}`);
console.log(`str.substring(0, 5):${str.substring(0, 5)}`);
console.log(`str.substring(6, str.length):${str.substring(6, str.length)}`);

console.log("===========================");

const fruit = "apple,banana,cherry,mango,orange";
const fruitArr = fruit.split(",");
console.log(`fruitArr:${fruitArr}`);
console.log(`fruitArr[0]:${fruitArr[0]}`);
console.log(`fruitArr.length:${fruitArr.length}`);
