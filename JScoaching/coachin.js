class student {
    constructor(name, age, course, address, number) {
        this.name = name;
        this.age = age;
        this.course = course;
        this.adress = address;
        this.number = number;
    }
    learn() {
        console.log(`my name is ${this.name}. I am studying ${this.course}.`);
    }
}

const mary = new student("Mary Jane", 28, "javascript", "refactory", 75123456789);
console.log(mary);

const john = new student("John", 14, "python", "refactory", 7812345678);
console.log(john);
console.log(john.learn())

//inheritance
class scholarship extends student {
    constructor(name, age, course, address, number, amount, sponsor) {
        ssuper(name, age, course, address, number);
        this.amount = amount;
        this.sponsor = sponsor;
    }
    scholarshipInfo() {
        return `${this.name} has scholorship of UGX${this.amount}scholarship`;
    }
}
const scholar1 = new scholarship("Alice", 22, "javascript", "kampala", 7483454355, 1000000, "mastercard foundation");
console.log(scholar1);