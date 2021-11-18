function math() { // defining a function for math
    var A = 5; //defining the variable A with the value of 5;
    var B = 10; //defining the variable B with the value of 10
    result = (B + A); //defining the variable result with the value of (B plus A)
    document.getElementById("math").innerHTML = result; // inserting the result into the html with the id "math"
}

function subtraction_Function() { //defining the function subtraction_Function
    var subtraction = 5 - 2; //defining the variable subtraction with the value of (5-2)
    document.getElementById("subtract").innerHTML = "5 - 2 = " + subtraction; // inserting the result into the html with the id "subtract"
}

function multiplication() { //defining the function multiplication
    var simple_Math = 6 * 8; //defining the variable simple_Math with the value of 6*8
    document.getElementById("multiply").innerHTML = "6 x 8 = " + simple_Math; // inserting the result into the html with the id "multiply"
}

function division() { //defining the function division
    var simple_Math = 48 / 6; //defining the variable simple_Math with the value of 48/6
    document.getElementById("Math").innerHTML = "48 / 6 = " + simple_Math; // inserting the result into the html with the id "Math"
}

function more_Math() { // defining the function more_math
    var math_Simple = (1 + 2) * 10 / 2 - 5; //defining the variable of math_Simple with the value of ((1 + 2) * 10 / 2 - 5)
    document.getElementById("More").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + math_Simple; // inserting the result into the html with the id "More"
}

function modulus() { //defining the function modulus
    var simply_Math = 25 % 6; //defining the variable simply_Math with the value (remainder) of 25/6
    document.getElementById("Mod").innerHTML = "If you divide 25 by 6 you get a remainder of: " + simply_Math; // inserting the result into the html with the id "Mod"
}

function negation_Operator() { //defining the function negation_Operator 
    var x = 10; //defining the variable x with the value of 10
    document.getElementById("Moth").innerHTML = -x; // inserting the result into the html with the id "Moth"
}

var Y = 50; //defining the variable Y with the value of 50
Y++; //adding 1 to the value of Y
document.write(Y); //printing the value of Y on the page

var M = 45; //defining the variable M with the value of 45
M--; //subtracting 1 from the value of M
document.write(M); //printing the value of M on the page

window.alert(Math.random()); //displaying a window with a random number between 0 and 100

window.alert(Math.random() * 100); //displaying a window with a random number between 0 and 100
var J = 5.567; //defining the variable J with the value of 5.567
document.write(Math.round(J)); //printing the value of J when it is rounded up

// math is a built in object that has properties and methods for mathematical constants and functions.
// you use if by calling math.insertmethod(variable)
