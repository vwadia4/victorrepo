// // car.name = Fiat

// // car.model = 500

// // car.weight = 850kg

// // car.color = white

// let carName = "range rover"
// let model = "wellar"
// let = carWeight = "1000"
// let = carColor =" red"
// let = engineType = 'turbo'
// let car =  {
//     carName: range rover;,
//     model: wellar;,
//     carWeight: "1000;,
//     carColor: red;,
//     engineType: turbo;
// }

start: function() {
    console.log("Vrrrrrr")
}

drive: function() {
    console.log("Vrrrrrr")
}

brake: function() {
    console.log("Vrrrrrr")
}

stop: function() {
    console.log("krrrrrr")
}

car.start();
car.drive();
car.brake();
car.stop();

let farmer = {
    name: "victor",
    age: 46,
    isRegistered: true,

    greetFarmer: function () {
        console.log("Welcome" + " " + "to young for chicks!")
    },

    chickRequest: function (quantity) {
        console.log(this.name + " " + quantity + "chicks")
    }
}
console.log(farmer.age)
farmer.greetFarmer()
farmer.chickRequest(100)