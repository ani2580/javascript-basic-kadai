// 体重(kg)と身長(m)の値を定義
const weight = 68; // kg
const height = 1.7; // m

// BMIの計算式
const bmi = weight / (height * height);

// 計算結果をコンソールに表示
console.log("BMI: " + bmi.toFixed(2));