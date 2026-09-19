// array[]

const student1 = "nguyen van a";
const student2 = "nguyen van b";
const student3 = "nguyen van c";

const students =["nguyen van a, nguyen van b, nguyen van c"];
const ids = ["1,3,4,5"];
const actives = [true, false ,43,"hoadv32"];

// danh index: 0,1,2
console.log("ban dau", students);
students[0]= "hoadv";
// students = ["hoadv"]; => error
console.log("sau khi thay doi",students);
console.log('do dai array',students.length);

students.push("le van d");
console.log("sau khi thay doi", students);

// for
for (let i =0; i< students.length;i++){
    console.log(students[i]);
}
