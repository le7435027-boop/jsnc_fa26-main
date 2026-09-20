console.log("Đây là lab 1");

let name = "Lê Trung Hiếu";
let age = 22;
const address = "Hà Nội";
const status = "Sinh viên";

console.log("Tên tôi là:", name);
console.log("Tuổi:", age);
console.log("Địa chỉ:", address);
console.log("Trạng thái:", status);

console.log("bai2");
let tuoi = 20;
console.log(tuoi);
tuoi = 21;
console.log(tuoi);


console.log("bai3");
const a = 10;
const b = 5;

console.log("Tổng:", a + b);
console.log("Hiệu:", a - b);
console.log("Tích:", a * b);
console.log("Thương:", a / b);

console.log("Bai4");
function sayHello(name) {
    console.log("Xin chào", name);
}
sayHello("An");
sayHello("Bình");
sayHello("Hiếu");

console.log("Bai5");
function sum(a, b) {
    return a + b;
}
let resultSum = sum(4, 5);
console.log(resultSum);

console.log("Bai6");
function calculateTotal(price, quantity) {
    return price * quantity;
}
let total = calculateTotal(20000, 5);
console.log(total);

console.log("Bai7");
function calculateAverage(math, english, javascript) {
    return (math + english + javascript) / 3;
}
let average = calculateAverage(7, 8, 9);
console.log(average);