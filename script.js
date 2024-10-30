// // CRUD
// 1-c=CREATE

// let datas = [
//   { id: 1, name: "John", age: 25, gender: "male" },
//   { id: 2, name: "Alice", age: 30, gender: "female" },
//   { id: 3, name: "Bob", age: 28, gender: "male" },
//   { id: 4, name: "Charlie", age: 32, gender: "female" },
//   { id: 5, name: "David", age: 27, gender: "male" },
//   { id: 6, name: "Emily", age: 35, gender: "female" },
//   { id: 7, name: "Frank", age: 29, gender: "male" },
//   { id: 8, name: "Grace", age: 33, gender: "female" },
//   { id: 9, name: "Harry", age: 31, gender: "male" },
//   { id: 10, name: "Isabella", age: 34, gender: "female" },
// ];

// function create(data) {
//   let lastIndex = datas[datas.length - 1].id;
//   datas.push({ id: lastIndex + 1, ...data });
// }
// create({ name: "Asadbek", age: 14, gender: "male" });
// create({ name: "Jasurbek", age: 17, gender: "male" });
// console.log(datas);

// 2-R=>READ
// let datas = [
//   { id: 1, name: "John", age: 25, gender: "male" },
//   { id: 2, name: "Alice", age: 30, gender: "female" },
//   { id: 3, name: "Bob", age: 28, gender: "male" },
//   { id: 4, name: "Charlie", age: 32, gender: "male" },
//   { id: 5, name: "David", age: 27, gender: "male" },
//   { id: 6, name: "Emily", age: 35, gender: "female" },
//   { id: 7, name: "Frank", age: 29, gender: "male" },
//   { id: 8, name: "Grace", age: 33, gender: "female" },
//   { id: 9, name: "Harry", age: 31, gender: "male" },
//   { id: 10, name: "Isabella", age: 34, gender: "female" },
// ];

// function read(input, key) {
//   return datas.filter((value) => {
//     if (typeof value[key] === "number") {
//       return value[key] === Number(input);
//     }
//     return value[key].toLowerCase().includes(input.toLowerCase());
//   });
// }

// console.log(read("31", "age"));

// U => UPDATE
// let datas = [
//   { id: 1, name: "John", age: 25, gender: "male" },
//   { id: 2, name: "Alice", age: 30, gender: "female" },
//   { id: 3, name: "Bob", age: 28, gender: "male" },
//   { id: 4, name: "Charlie", age: 32, gender: "male" },
//   { id: 5, name: "David", age: 27, gender: "male" },
//   { id: 6, name: "Emily", age: 35, gender: "female" },
//   { id: 7, name: "Frank", age: 29, gender: "male" },
//   { id: 8, name: "Grace", age: 33, gender: "female" },
//   { id: 9, name: "Harry", age: 31, gender: "male" },
//   { id: 10, name: "Isabella", age: 34, gender: "female" },
// ];

// function update(idi, nameValue, ageValue, genderValue) {
//   return datas.map((value) =>
//     value.id === idi
//       ? { ...value, name: nameValue, age: ageValue, gender: genderValue }
//       : value
//   );
// }
// console.log(update(2, "asal", 90, "female"));

// D => DELETE
// let datas = [
//   { id: 1, name: "John", age: 25, gender: "male" },
//   { id: 2, name: "Alice", age: 30, gender: "female" },
//   { id: 3, name: "Bob", age: 28, gender: "male" },
//   { id: 4, name: "Charlie", age: 32, gender: "male" },
//   { id: 5, name: "David", age: 27, gender: "male" },
//   { id: 6, name: "Emily", age: 35, gender: "female" },
//   { id: 7, name: "Frank", age: 29, gender: "male" },
//   { id: 8, name: "Grace", age: 33, gender: "female" },
//   { id: 9, name: "Harry", age: 31, gender: "male" },
//   { id: 10, name: "Isabella", age: 34, gender: "female" },
// ];

// function delet(idi) {
//   return datas.filter((value) => value.id !== idi);
// }
// console.log(delet(2));
// -------------------------------------------------
// -------------------------------------------------
// -------------------------------------------------
// -------------------------------------------------
// -------------------------------------------------
// -------------------------------------------------
// -------------------------------------------------
// -------------------------------------------------
// -------------------------------------------------
// -------------------------------------------------
// -------------------------------------------------
// -------------------------------------------------
// QOSHIMCHA

const quotes = [
  "Hayotda eng muhim narsa — o'z maqsadlaringizga erishish.",
  "Tajribalar muvaffaqiyatsizliklar orqali keladi.",
  "O'z ustingizda ishlashni hech qachon to'xtatmang.",
  "Har bir kun yangi imkoniyatlar va'da qiladi.",
  "O'z orzularingizga ergashing.",
  "Katta yutuqlar kichik qadamlar bilan boshlanadi.",
  "Maqsadingiz sari intilib, qiyinchiliklarni quchoqlang.",
  "Har bir muvaffaqiyatning ortida tinimsiz mehnat va sabr bor.",
  "Boshqa hech kimdan ko‘ra o‘zingizni ishonchli qo‘llab-quvvatlang.",
  "Barcha imkoniyatlar sizning qo‘lingizda, ulardan foydalanishni o‘rganing.",
];

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

document.getElementById("new-quote").addEventListener("click", () => {
  document.getElementById("quote").textContent = getRandomQuote();
});
