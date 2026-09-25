// template literal
const name = "hoadv";
const age = 30 ;
const info = "ten: " + name + " tuoi: " + age;
console.log(info);
//``
const myName = `-ten toi la:${name}
                - tuoi:${age}
`;
console.log(myName);

const student ={
    id :1,
    name: "Nguyen Van A",
    age: 30
};
const studentInfo =`
Ma sinh vien:${student.id}
ten:${student.name}
tuoi:${student.age}
`;
// arrow function
function add(a, b) {
  return a + b;
};
console.log(add(1,2));

const add2 = (a,b) => {
    return a+b;
};
console.log(add2(4,5));

const add3 =(a,b)=>a+b;//return a+b
console.log(add3(5,6));

// map()
const students =[
{id:1, name:"An", age:21},
{id:2, name:"b", age:22},
{id:3, name:"c", age:20},
];

// return `ID: ${item.id} - ten:${item.name}`;
const html = students.map((students)=>{
    return `
            <tr class="hover:bg-gray-50">
              <td class="px-4 py-2 border border-gray-300">${students.id}</td>
              <td class="px-4 py-2 border border-gray-300">${students.name}</td>
              <td class="px-4 py-2 border border-gray-300">${students.age}</td>
              <td class="px-4 py-2 border border-gray-300">
                <div class="flex items-center justify-center gap-2">
                  <a
                    href="#"
                    class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </a>

                  <button
                    class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          `;
})
.join("");
document.getElementById("students").innerHTML= html;
