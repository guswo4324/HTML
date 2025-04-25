let input = prompt('inch 단위의 숫자를 입력하세요'); 
//문자열 값으로 받음

let inchVal = Number(input);
//문자열 값으로 받은 input값을 숫자형(Number)값으로 변환

let cm = inchVal * 2.54;

alert(`${inchVal}inch는 ${cm} cm입니다`);
//``//