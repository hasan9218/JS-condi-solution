// Practice Problem-1   -------------------------------------

let price = 600;
if(price > 500){
   console.log("Get a free coke");
}
else {
    console.log("coke is 30 taka");
}

// Practice Problem-2   -------------------------------------

let weight = 80;
let height = 160;
let  bmiValue = weight / (height * height);


if (bmiValue < 18.5){
    console.log("you are underweight");


}
else if (bmiValue >= 18.5 && bmiValue <=24.9) {
    console.log("you are normal");

}
else if (bmiValue >=25 && bmiValue <= 29.9) {
    console.log("you are overweight");

}
else{
    console.log("you are obese");
}

// Practice Problem-3   -------------------------------------


let marks = 66;

if( marks >=90 && marks <= 100) {
    console.log("A");
}
else if ( marks >= 80 && marks <= 89) {
    console.log("B");

}
else if ( marks >= 70 && marks <= 79) {
    console.log("C");
}
else if ( marks >= 60 && marks <= 69){
    console.log("D");
}
else {
    console.log("F");
}

// Practice Problem-4   -------------------------------------

let myScore =  90;
let friendScore = 30;

if (myScore < 80) {
    console.log("go to home and sleep and act sad");
}
else {
    if (friendScore > 80){
        console.log("go for a lunch");
    }
    else{
        if (friendScore < 80 && friendScore >= 60){
            console.log("good luck next time");
        }
        else {
            if (friendScore < 60 && friendScore >= 40){
                console.log("keep your friend's message unseen");
            }
            else {
                if (friendScore < 40){
                    console.log("block your friend");
                }
            }
        }
    }
}

// Practice Problem-5   -------------------------------------

let num1 = 7;
let num2 = 9;
let result;

// simple if-else

if (num1 > num2){
    result = num1 * 2;
    console.log(result);
     
}
else {
    result = num1 + num2;
    console.log(result);
}

// ternary operator

result = num1 > num2 ? (num1 * 2) : (num1 + num2);
console.log(result);

// Practice Problem-6   -------------------------------------

let ticketPrice = 800;
let age = 45;
let isStudent = true;
if (age < 10){
    console.log("free");

}
else if (isStudent){
    let discounted = ticketPrice * 50 / 100;
    let payAmount = ticketPrice - discounted;
    console.log(payAmount);
}
else if (age >= 60){
    let discounted = ticketPrice * 15 / 100;
    let payAmount = ticketPrice - discounted;
    console.log(payAmount);
}
else {
    console.log(ticketPrice);
}




















