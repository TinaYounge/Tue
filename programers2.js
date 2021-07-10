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
a = programmers.reduce((hu1, hu2) => {
  if (hu2 == "Tan Vo") return hu1 + hu2.index;
  else return hu1;
}, 0);

const printLastName = (element) =>
  element.split(" ")[element.split(" ").length - 1];

const printFirstNameLength = (element) => element.split(" ")[0].length;
const printLastNameLength = (element) =>
  element.split(" ")[element.split(" ").length - 1].length;
const printFullNameLength = (element) =>
  element.split(" ")[element.split(" ").length - 1].length +
  element.split(" ")[0].length;

const compareLastNameAbc = (a, b) =>
  a
    .split(" ")
    [a.split(" ").length - 1].localeCompare(
      b.split(" ")[b.split(" ").length - 1]
    );
const compareFirstNameLength = (a, b) =>
  a.split(" ")[0].length - b.split(" ")[0].length;
const compareLastNameLength = (a, b) =>
  a.split(" ")[a.split(" ").length - 1].length -
  b.split(" ")[b.split(" ").length - 1].length;

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

//3.5 Print to the screen the sum char length of all the programmers.
let threePointFive = () => {
  const newPrograms = programmers.map(printFullNameLength);
  document.getElementById("3.5").innerHTML = newPrograms.join(", ");
};
threePointFive();
//3.6 Mutate programmers such that it's in alphabetical order of the first name of the programmers, A-Z.
let treePointSix = () => {
  const newPrograms = programmers.map(printFirstName);
  const newPrograms1 = newPrograms.sort();
  document.getElementById("3.6").innerHTML = newPrograms1.join(", ");
};
treePointSix();
//3.7 Mutate programmers such that it's in alphabetical order of the last name of the programmers, A-Z.
let treePointSeven = () => {
  const newPrograms = programmers.sort(compareLastNameAbc);
  document.getElementById("3.7").innerHTML = newPrograms.join(", ");
};
treePointSeven();

//3.8 Mutate programmers such that it's sorted by length of first name characters, shortest to longest.

let treePointEight = () => {
  const newPrograms = programmers.sort(compareFirstNameLength);
  document.getElementById("3.8").innerHTML = newPrograms.join(", ");
};
treePointEight();

// 3.9 Mutate programmers such that it's sorted by length of last name characters, shortest to longest.

let treePointNine = () => {
  const newPrograms = programmers.sort(compareLastNameLength);
  document.getElementById("3.9").innerHTML = newPrograms.join(", ");
};
treePointNine();

// 3.10 Define a betterProgrammers using programmers whose first name starts with L.
let treePointTen = () => {
  const newPrograms = programmers.filter((a) => a.split(" ")[0].includes("L"));
  document.getElementById("3.10").innerHTML = newPrograms.join(", ");
};
treePointTen();

// 3.10 Define a betterProgrammers using programmers whose last name starts with T.
let treePointElev = () => {
  const newPrograms = programmers.filter((a) =>
    a.split(" ")[a.split(" ").length - 1].includes("T")
  );
  document.getElementById("3.11").innerHTML = newPrograms.join(", ");
};
treePointElev();

// 3.10 Define a betterProgrammers using programmers where the first name's length is Less than 4 characters.
let treePointTwel = () => {
  const newPrograms = programmers.filter((a) => a.split(" ")[0].length < 4);
  document.getElementById("3.12").innerHTML = newPrograms.join(", ");
};
treePointTwel();

// 3.13 Define a betterProgrammers using programmers where the first name's length is greater than greater than 4.
let treePointThitn = () => {
  const newPrograms = programmers.map(printFullNameLength);
  const newPrograms1 = newPrograms.filter((a) => a.length > 4);
  document.getElementById("3.13").innerHTML = newPrograms1.join(", ");
};
treePointThitn();

// 3.13 Define a betterProgrammers using programmers where the sum of the length of their name's characters is greater than 8
let treePointFortn = () => {
  // const newPrograms = programmers.map(printFullNameLength);
  const newPrograms1 = programmers.filter(
    (a) => a.map(printFullNameLength) > 8
  );
  document.getElementById("3.14").innerHTML = newPrograms1.join(", ");
};
treePointFortn();
