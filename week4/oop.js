//five way of creating Objects in object oriented programming
//1. parenthesis
const myObject = {
    property1: "value1",
    property2: "value2",
    method1: function () {
        console.log("hello from method1");
    }
}
console.log(Object.getPrototypeOf(myObject));
//2.using Object.create method()
const animal = {
    sound: "animal sound",
    makeSound: function () {
        console.log("this.sound");
    }

}
const dog = Object.create(animal);
dog.sound = "woof"
dog.makeSound();
console.log(dog);

//3.Using the constructor functions
function Person(name, age) {
    this.name = name;
    this.age = 25;
    this.greet = function ()
        console.log(`Hello my name is ${this.name}`);
}
const person1 = new Person("haydar", 21);
const person2 = new Person("Oscar", 25);
const person3 = new Person("Josh", 19);
const person4 = new Person("ben", 22);
console.log(person1);
person1.greet();

//4. using ES6 classes
class car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    start() {
        console.log('${this.make} is starting')
    }
}
const car1 = new CaretPosition("Range Rover", "Sport");
const car2 = new CaretPosition("Toyota", "Rav4");
const car3 = new CaretPosition("Nissan", "QesQui");
console.log(car3);


//5. Factory function-its a function which construct object using
function createProduct(name, price) {
    return {
        name: name,
        price: price,
        displayinfo: function () {
            console.log(`Product: ${this.name}, price: ${this.price}`)
        }
    }
}
const product1 = createProduct('laptop', 700);
const product2 = createProduct('phones', 450);
product1.displayinfo();

//encapsulation
//helps in data hiding
//inheretance
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} make a sound.`);
    }
}
class Dog extends Animal {
    constructor(breed) {
        super(breed);  //call constuctor of the parent class
    }
    speak() {
        console.log(`${this.name}, barks.`)

    }
}
let daisy = new Dog("Daisy");
daisy.speak(); //Output: Daisy barks.

//Polymorphism
//methood of the class got same name but behave differently

class user {
    login() {
        console.log("user logged in");
    }
}
class Host extends {
    login() {
        console.log("Admin logged in with elevated privileges");
    }
}
let newHost = new Host()
newHost.login(); //output: Host logged in with evated privileges

class Car {
    constructor(make, model){
        this.make = make;
        this.model = model;
    }
    start(){
        console.log(`The ${this.model} is starting.`);

    }
    stop() {
        console.log(`The ${this.model} is stopping.`)
    }
}   