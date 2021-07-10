// Produces new array.
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
  "Tan Vo",
];

let allFirstName = [],
  allLastName = [],
  allFirstNameLength = [],
  allLastNameLength = [],
  allNameLength = [];
// programmers.forEach((element) => {
//   // const element = programmers[i];
//   allNameLength.push(element.length);
//   elementBreak = element.split(" ");
//   firstName = elementBreak[1];
//   allFirstName.push(firstName);
//   allFirstNameLength.push(firstName.length);
//   lastName = elementBreak[0];
//   allLastName.push(lastName);
//   allLastNameLength.push(lastName.length);
//   eachCharBreak = element.split("");
// });

for (let i = 0; i < programmers.length; i++) {
  const element = programmers[i];
  allNameLength.push(element.length);
  elementBreak = element.split(" ");
  firstName = elementBreak[1];
  allFirstName.push(firstName);
  allFirstNameLength.push(firstName.length);
  lastName = elementBreak[0];
  allLastName.push(lastName);
  allLastNameLength.push(lastName.length);
  eachCharBreak = element.split("");
}

const NameOder = programmers.sort();

// result
const threeOne = () => {
  document.getElementById("3.1").innerHTML = allFirstName.join(", ");
};
threeOne();
// const NameOder = programmers.sort(),
(firstNameOder = allFirstName.sort()), (lastNameOder = allLastName.sort());
function compareNumbers(a, b) {
  return a.length - b.length;
}
let lWithFirstName = allFirstName.filter((element) => {
  return element.split("")[0] == "L";
});
let tWithLastName = allLastName.filter((element) => {
  return element.split("")[0] == "T";
});

let lengthLessThanFouFirstName = allFirstName.filter((element) => {
  return element.length < 4;
});

let lengthMoreThanFouFirstName = allFirstName.filter((element) => {
  return element.length > 4;
});

let sumLengthMoreThanEiName = programmers.filter((element) => {
  return element.length > 9;
});

let sumLengthLessThanEiName = programmers.filter((element) => {
  return element.length < 7;
});

let lastNameBeKEnN = allLastName.filter((element) => {
  return element[0] == "K" && element[element.length - 1] == "n";
});
let threeChFirstName = allFirstName.filter((element) => {
  return element.length == 3;
});
// console.log(allLastName);
console.log(threeChFirstName);
document.getElementById("3.2").innerHTML = allLastName.join(", ");
document.getElementById("3.3").innerHTML = allFirstNameLength.join(", ");
document.getElementById("3.4").innerHTML = allLastNameLength.join(", ");
document.getElementById("3.5").innerHTML = allNameLength.join(", ");
document.getElementById("3.6").innerHTML = NameOder.join(", ");
document.getElementById("3.7").innerHTML = firstNameOder.join(", ");
document.getElementById("3.8").innerHTML = lastNameOder.join(", ");
document.getElementById("3.9").innerHTML =
  NameOder.sort(compareNumbers).join(", ");
document.getElementById("3.10").innerHTML = lWithFirstName.join(", ");
document.getElementById("3.11").innerHTML = tWithLastName.join(", ");
document.getElementById("3.12").innerHTML =
  lengthLessThanFouFirstName.join(", ");
document.getElementById("3.13").innerHTML =
  lengthMoreThanFouFirstName.join(", ");
document.getElementById("3.14").innerHTML = sumLengthMoreThanEiName.join(", ");
document.getElementById("3.15").innerHTML = sumLengthLessThanEiName.join(", ");
document.getElementById("3.16").innerHTML = lastNameBeKEnN.join(", ");
sumLengthLessThanEiName.join(", ");
document.getElementById("3.17").innerHTML = threeChFirstName.join(", ");
