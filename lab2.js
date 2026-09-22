console.log("bai1");
const names = ["An","Binh","Nam","Hoa","Lan"];
console.log(names);
console.log(names[0]);
console.log(names[4]);
console.log(names.length);
names.push("Thanh");
names.pop();



console.log("bai2");
for (let i =0; i< names.length;i++){
    console.log(names[i]);
}

console.log("Bai 3");
const student = {
    id: 1,
    name: "Nguyễn Văn An",
    age: 20,
    email: "an@gmail.com",
    major: "CNTT"
};
console.log(student);
console.log("Tên sinh viên:", student.name);
console.log("Tuổi:", student.age);
console.log("Email:", student.email);
student.age = 21;
console.log("Tuổi sau khi thay đổi:", student.age);
student.phone = "0123456789";
console.log("Phone:", student.phone);
console.log("Student sau khi cập nhật:", student);

console.log("Bai 4");
const studentss = [
    {
        id: 1,
        name: "Nguyễn Văn An",
        age: 20
    },
    {
        id: 2,
        name: "Trần Văn Bình",
        age: 21
    },
    {
        id: 3,
        name: "Lê Văn Nam",
        age: 20
    }
];
console.log("Danh sách sinh viên:");
console.log(studentss);
console.log("Tên sinh viên đầu tiên:", studentss[0].name);
console.log("Tuổi sinh viên thứ hai:", studentss[1].age);
console.log("Duyệt danh sách:");
for (let i = 0; i < studentss.length; i++) {
    console.log(studentss[i]);
}
console.log("Tên tất cả sinh viên:");
for (let i = 0; i < studentss.length; i++) {
    console.log(studentss[i].name);
}

console.log("bai5");
const products = [
    {
        id: 1,
        name: "iPhone 15",
        price: 20000000
    },
    {
        id: 2,
        name: "Samsung Galaxy S24",
        price: 18000000
    },
    {
        id: 3,
        name: "Xiaomi 14",
        price: 12000000
    }
];
console.log("Danh sach:");
console.log(products);
console.log("Ten sp + gia:");

for (let i = 0; i < products.length; i++) {
    console.log(products[i].name + " - " + products[i].price);
}
let Tong = 0;
for (let i = 0; i < products.length; i++) {
    Tong = Tong + products[i].price;
}
console.log("Tong gia:", Tong);
let productList = document.getElementById("products");
productList.innerHTML = "";
for (let i = 0; i < products.length; i++) {
    productList.innerHTML += `
        <div>
            <h3>${products[i].name}</h3>
            <p>Giá: ${products[i].price} VNĐ</p>
        </div>
    `;
}
console.log(products);
