// Produces new array.
function newProgrammers() {
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
  // result
  const NameOder = programmers.sort(),
    firstNameOder = allFirstName.sort(),
    lastNameOder = allLastName.sort();
  function compareNumbers(a, b) {
    return a.length - b.length;
  }
  let lWithFirstName = allFirstName.filter((element) => {
    return element.split("")[0] == "L";
  });
  let tWithLastName = allLastName.filter((element) => {
    return element.split("")[0] == "T";
  });
  // Find all programmers where the first name's length is less than 4 characters.
  // let lengthLessThanFouFirstName = allFirstName.filter((element) => {
  //   return element.split("")[0] == "T";
  // });
  document.getElementById("3.1").innerHTML = allFirstName.join(", ");
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
}
newProgrammers();
