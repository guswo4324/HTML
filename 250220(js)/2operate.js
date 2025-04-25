let score = 90;
let grade = score >= 90 ? "A+" : "B";
console.log(grade);

let age = 10;
let adultStatus = age > 19 ? true : false;
console.log(adultStatus);


let result = 10 + "10";  //1010
console.log(result);
//1010

let num = 10;
let strNum = "10";
result = num + strNum; 
console.log(result);
//1010

if(String(num) == strNum){
    console.log("equals1");
}
//equals1

if(num === strNum){
    console.log("equals1");
}
else{
    console.log("not equals2");
}
//not equals2

(num == strNum) ? console.log("equals3") : console.log("not equals4");
//equals3
(num === strNum) ? console.log("equals3") : console.log("not equals4");
//not equals4
(String(num) == strNum) ? console.log("equals5") : console.log("not equals6");
//equals5
let num10 = (String(num) === strNum) ? "equals6" : "not equals7";
console.log(num10);
//equals6

