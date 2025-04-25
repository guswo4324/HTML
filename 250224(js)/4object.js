const person = {
    name:{
        firstName:"Dooly",
        lastName:"Go"
    },
    like:["apple", "samsung"],

    printHello:function(){
        return "호이";
    }
}
person["friend"] = "도우너"; //추가하기



console.log(person["name"]);
console.log(person["name"]["firstName"]);
console.log(person["name"]["lastName"]);

person["name"]["lastName"] = "Park"; //값 바꾸기
console.log("------------------");
console.log(person["friend"]); //추가한 friend 출력
console.log("------------------");

console.log(person["like"]);
console.log(person["like"][0]);
console.log(person["like"][1]);

console.log("------------------");
console.log(person["printHello"]());
console.log("==================");

console.log(person.name);
console.log(person.name.firstName);
console.log(person.name.lastName);
//객체접근

console.log("------------------");
console.log(person.like);
console.log(person.like[0]);
console.log(person.like[1]);
console.log("------------------");

console.log(person.printHello());

console.log(person); 

person["name"] = "둘리";
console.log(person);

//[""] 쓰거나 . 쓰거나

delete person["like"];
console.log(person);

delete person["friend"];
console.log(person);

delete person["printHello"];
console.log(person);

delete person["name"];
console.log(person);
