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
  const NameOder = programmers.sort(),
    firstNameOder = allFirstName.sort(),
    lastNameOder = allLastName.sort();
  console.log(firstNameOder);
  function compareNumbers(a, b) {
    return a.length - b.length;
  }
  // test
  let lWithFirstName = allFirstName.filter((element) => {
    return element.split("")[0] == "L";
  });
  console.log(lWithFirstName);
  // let lWithName = programmers.filter((element) => {
  //   return element.split("")[0] == "L";
  // });
  // console.log(lWithName);
  // test
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
  document.getElementById("3.10").innerHTML = lWithName.join(", ");
  document.getElementById("3.11").innerHTML = lWithName.join(", ");

  //     Use filter() to:

  // Find all programmers whose first name starts with L.
  // Find all programmers whose last name starts with T.
  // Find all programmers where the first name's length is less than 4 characters.
  // Find all programmers where the first name's length is greater than 4 characters.
  // Find all programmers where the sum of the length of their name's characters is greater than 8.
  // Find all programmers where the sum of the length of their name's characters is less than 8.
  // Find all programmers where the last name begins with the letter K and ends with the letter n.
  // Find all programmers whose first name is 3 characters long exactly.
  // Find all programmers whose first name starts with ‘A'.
  // Find all programmers whose first & last name start with the same character, for example, Abhinav Asthana.

  // console.log(result);
}
newProgrammers();
