const programmers = [
  "Dennis Ritchie",
  "Brian Kernighan",
  "Ken Thompson",
  "Linus Torvalds",
  "Bjarne Stroustrup",
  "Tim Berners-Lee",
  "Donald Knuth",
  "Alan Turing",
  "Mark Zuckerberg",
  "Bill Gates",
  "Larry Page",
  "Elon Musk",
  "Jack Dorsey",
  "Satoshi Nakamoto",
  "Ada Lovelace",
  "Grace Hopper",
  "Dan Ambramov",
  "Jordan Walke",
  "Ryan Dahl",
  "David Heinemeier Hansson",
  "Guido van Rossum",
  "Yukihiro Matsumoto",
  "Sergey Brin",
  "Lyndsey Scott",
  "Abhinav Asthana",
  "Abhijit Kane",
  "Ankit Sobti",
  "Loi Tran",
  "Charles Lee",
  "Tuan Nguyen",
  "Ken Thompson",
  "Tan Vo",
  "Ken Thompson",
];
const printFirstName = (element) => element.split(" ")[0];
a = programmers.reduce((hu1, hu2) => hu1 + hu2.length, 0);

Array.isArray(programmers);
console.log(Array.isArray(programmers));
console.log(a);
console.log(programmers);
const printLastName = (element) =>
  element.split(" ")[element.split(" ").length - 1];

const printFirstNameLength = (element) => element.split(" ")[0].length;
const printLastNameLength = (element) =>
  element.split(" ")[element.split(" ").length - 1].length;

// 3.1
let threePointOne = () => {
  const newPrograms = programmers.map(printFirstName);
  document.getElementById("3.1").innerHTML = newPrograms.join(", ");
};
threePointOne();
// 3.2
let threePointTwo = () => {
  const newPrograms = programmers.map(printLastName);
  document.getElementById("3.2").innerHTML = newPrograms.join(", ");
};
threePointTwo();
// 3.3
let threePointThree = () => {
  const newPrograms = programmers.map(printFirstNameLength);
  document.getElementById("3.3").innerHTML = newPrograms.join(", ");
};
threePointThree();

// 3.4
let threePointFour = () => {
  const newPrograms = programmers.map(printLastNameLength);
  document.getElementById("3.4").innerHTML = newPrograms.join(", ");
};
threePointFour();
