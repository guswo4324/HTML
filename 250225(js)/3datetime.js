const curDate = new Date();
console.log(`현재:${curDate}`);

console.log("============================");
const newDate = new Date(2025, 11, 25, 18,30,50);
const dateFormat =`${newDate.getFullYear()} - ${newDate.getMonth()+1} -${newDate.getDate()} ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`;
console.log(`dateFormat:${dateFormat}`);
console.log("============================");

const date1 = new Date('2025-02-01');
const date2 = new Date('2025-02-25');
const dateDiff = date2.getTime() - date1.getTime();
console.log(`dateDiff:${dateDiff}`);
//밀리초
const interval = dateDiff / (24*60*60*1000); 
//날짜차이
console.log(`둘 날짜의 차이는 ${interval}일 입니다`);