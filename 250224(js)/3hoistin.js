// console.log(num);
// var num = 10;
// console.log(num);

// var num;
// console.log(num);
// num = 10;

// function printHello(){
//     console.log("Hello May");
// }
// printHello();

// var text = "outside";
// function printScope(){
//     console.log(text);
//     var text = "inside";
// }

// printScope();

(function init(){
    console.log("----------------");
})();

(function sum(num1, num2){
    console.log(`${num1} + ${num2} = ${num1+num2}`);
})(10,20); 
//즉시실행(일회용)

//sum(10,20);  ->실행 X(즉시실행으로 써버려서)