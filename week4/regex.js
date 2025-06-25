//let emailPattern;
let phonepattern;
//let ninPattern;
let urlPattern;
let farmerNamePattern = /^[A-Za-Z]+$/;
//let farmerName = prompt("Enter your name:");

let farmerName = "wandera";
console.log(farmerNamePattern.test(farmerName));

let ninpattern = /^[A-Za-Z0-9]{14}$/;
console.log(ninpattern.test("123456789")); //true if valid, false if invalid
let emailPattern= /^[a-zA-zo-9._%+-]+@[a-zA-z0-9.-]+\.[a-zA-Z]{2,}&/;
//simple email pattern
let emailPattern2 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;