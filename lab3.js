console.log("bai1");
const student = {
    id:1,
    name: "Nguyen Van An",
    age:20,
    major: "Lap trinh Web"
};
const studentInfo = `
Ma sinh vien: ${student.id}
Ten sinh vien: ${student.name}
Tuoi: ${student.age}
Chuyen nganh: ${student.major}`;
console.log(studentInfo);

console.log("Bai2a");
const square = (number) => {
    return number * number;
};
console.log(square(5));

console.log("Bai2b");
const sum = (a, b) =>{
    return a + b;
}; 
console.log(sum(10, 20));

console.log("Bai3")
const sayHello = (name) => {
    return "Xin chao " + name;
};
console.log(sayHello("An"));

console.log("Bai4");
const numbers = [1, 2, 3, 4, 5];
const newNumbers = numbers.map((number) =>{
    return number * 2;
});
console.log(newNumbers);

console.log("Bai5");
const students = [
    { id: 1, name: "An" },
    { id: 2, name: "Bình" },
    { id: 3, name: "Cường" },
];
const names = students.map((student) => {
    return student.name;
});
console.log(names);

console.log("Bai6");
const product = [
    {
        id: 1,
        name: "iPhone 15",
        price: 20000000,
    },
    {
        id: 2,
        name: "MacBook Air",
        price: 25000000,
    },
    {
        id: 3,
        name: "AirPods",
        price: 5000000,
    },
];

const htmlBai6 = product.map((product) => {
    return `
      <tr class="hover:bg-gray-50">
              <td class="px-4 py-2 border border-gray-300">${product.id}</td>
              <td class="px-4 py-2 border border-gray-300">${product.name}</td>
              <td class="px-4 py-2 border border-gray-300">${product.price}</td>
              <td class="px-4 py-2 border border-gray-300"></td>
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
    `
})
.join("");
document.getElementById("product-lists").innerHTML = htmlBai6;

console.log("Bai7");
const products = [
    {
        id: 1,
        name: "Áo thun",
        price: 150000,
        category: "Thời trang",
    },
    {
        id: 2,
        name: "Quần jean",
        price: 350000,
        category: "Thời trang",
    },
    {
        id: 3,
        name: "Giày sneaker",
        price: 800000,
        category: "Giày",
    },
];
const htmlBai7 = products.map((products)=>{
    return `
    <tr class="hover:bg-gray-50">
              <td class="px-4 py-2 border border-gray-300">${products.id}</td>
              <td class="px-4 py-2 border border-gray-300">${products.name}</td>
              <td class="px-4 py-2 border border-gray-300">${products.price}</td>
              <td class="px-4 py-2 border border-gray-300">${products.category}</td>
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
          `
})
.join("");
document.getElementById("product-list").innerHTML = htmlBai7;