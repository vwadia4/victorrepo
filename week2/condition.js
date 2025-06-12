//conditions
//if
//if else
//if else if else
//switch foe menus
//ternary operator

// if (condition){
//     // this code runs if the condition is truthy
// }

// if (condition){
//     // this code runs if the condition is truthy
// } else{
//     // this runs when the condition is falsy

// }

// if (condition){
//     // this code runs if the condition is truthy
// } else if(condition2){
// //this code runs if the condition2 is truthy
// }
// else{
//     // this runs when the condition is falsy   
// }


// //switch
// switch(expression) {
//     case value:
//         //drive
//         break;
//         default:
//             //l2
// } 
// //ternary operator
// condition ? expressionIfTrue : expressionIfFalse;


// //If condition example
// let number = 3;
// if(number>0){
//     console.log(number + " " + "is a positive number")
// }

// let isRaining = true;
// if(isRaining){
//     console.log(isRaining + " " + "remember to take your umbrella")

// } 

// let age 20>=<=30;
// if(age>=20 && age<=30){
//     console.log(age + "eligible for chick request")
// }

// if(age>=18){
//     console.log("You are an adult")
// };


// //EXAMPLE 1(NUMBER)
// let number = prompt(`enter number:`);
// if (number >0) {
//     alert(`${number} is positive`);
//     console.log (`${number} is positive.`);
// } 
// else if(number){
//     alert(`${number} is positive`);
//     console.log (`${number} is negative.`);
// } 
// else{
//     alert(`the number is zero`);

// }

//EXAMPLE 2(QUANTITY)
// let quantity = prompt(`enter quantity:`);
// if (quantity>=100 && quantity<=500){
//     alert(`requested accepted`)
// } 
// else{
//     alert(`invalid quantity`)
// }

 //SWITCH FOR NUMBER
 let number = prompt(`enter number:`);    //switch is used for calenders, dropdowns, menu's
 switch (true) {
    case number >0:
        alert(`${number} is positive`);
     console.log (`${number} is positive.`);     
        break;

    case number ==0:
    alert(`${number} is zero`);
     console.log (`${number} is zero.`);
        
        break;
    case number <0:
    alert(`${number} is negative`);
     console.log (`${number} is negative.`);
        break;
    
    default:
    alert(`${number} is invalid`);
//     console.log (`${number} is invalid.`);
        
 }

        
