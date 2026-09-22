//array
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

// object
const student ={
    id: "ph6232",
    name: "hoadv",
    age: 36
};
console.log(student.id);
student.id = "ph888";
// student = {}=>error
student.address ="ha noi";
console.log(student.id);
console.log(student.address);

// array object
const Mystudent = [
    {name: "Nguyễn Văn An",
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
console.log("Tuổi sinh viên thứ hai:", Mystudent[1].age);

// truy cap dom id = Mystudent
let html = document.getElementById("Mystudent");
let content = "";
// c1
for(let i =0 ; i < Mystudent.length;i++){
    content = content + `
    <div>
    <h3>Ten sinh vien: ${Mystudent[i].name}</h3>
    <h4>ID sinh vien:${Mystudent[i].id}</h4>
    </div>
    `;
}

html.innerHTML = content;

console.log(html);