let num = 3;
let num1 = 0;

if(num %2 == 0){
    console.log("짝수");
}
else{
    console.log("홀수");
}

if(num1 > 0){
    console.log("양수");
}else if(num1 < 0){
    console.log("음수");
}else{
    console.log("0");
}

let age = 8;
if(age > 19){
    console.log("성인");
}else{
    if(age > 13){
        console.log("청소년");
    }
    else if(age > 7){
        console.log("어린이");
    }
    else{
        console.log("응애");
    }
}