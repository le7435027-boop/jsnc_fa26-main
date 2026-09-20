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
const students = [
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
console.log(students);
console.log("Tên sinh viên đầu tiên:", students[0].name);
console.log("Tuổi sinh viên thứ hai:", students[1].age);
console.log("Duyệt danh sách:");
for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}
console.log("Tên tất cả sinh viên:");
for (let i = 0; i < students.length; i++) {
    console.log(students[i].name);
}
