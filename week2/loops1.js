//loop allows repeated execution
//for loop - if you know the number interations, use for loop
//while loop - if you dont know the number interations, use while loop
//do while loop - if the programme runs once before it ask question use do while loop
/*
OG's
//for loop
for(initialisation, condition,increment/decrement){ 
//code goes here
};

// while loop
//runs while a condition is true
//initialisation
while(condition){
//code goes here.
//increment/decrement
}

//do while loop
do{
//code goes here
//increment/decrement
}while(condition)
*/
/*
//FOR LOOP
//EXAMPLE I
for (let x = 0; x < 6; x++) {
    console.log(x);
    //let x=0; //initialisation
    //x<6; //condition
    //X++ //increment
}

/*
const number = 5
for (let x = 1; x<=12; x++){
console.log(`$(number)*${x} = ${number * x}`);
}
*/
/*
//Example 1
//WHILE LOOP
let x = 0;
while(x < 6){
    console.log(x)
    x++;  
}
*/
/*
//Example 2
//initialization
//condition
//iteration
let password;
const correctPassword ="123";
while(password !== correctPassword){
    password = prompt("enter your password");

}
alert ("access granted");
*/
//Example 1
let y=0
do{
    console.log(y);
    y++;
}while(y<=5);