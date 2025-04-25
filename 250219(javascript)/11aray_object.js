let studentScore1 = {
  koreanScore:80, 
  englishScore:70, 
  mathScore:90, 
  scienceScore:60
};

console.log(studentScore1.koreanScore); // 80
console.log(studentScore1['englishScore']); // 70


let studentScore = [80, 70, 90, 60]; // 국어, 영어, 수학, 과학 점수 
console.log(studentScore[3]); // 60, 3번 인덱스의 데이터에 접근