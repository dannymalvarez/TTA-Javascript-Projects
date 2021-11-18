document.write(typeof "Word"); //This tells us the data type of what follows "typeof"

document.write(typeof 3); //This tells us the data type of what follows "typeof"

document.write("100" + 67); //This concatenates and exemplifies coercion as it puts all the numbers together rather than adding them

function my_Function() { // defining a function to display "NaN"
    document.getElementById("Test").innerHTML = 0/0;
}

function my_Function2() { //defining a function to display whether "09" is nan
    document.getElementById("Test2").innerHTML = isNaN('09')
}

function my_Function3() { //defining a function to display whether the "string" is nan
document.getElementById("Test3").innerHTML = isNaN('This is a string')
}

document.write(-3E310); // printing out infinity using numbers

function infinity() { //defining a function to display infinity after clicking on an element
    document.getElementById("Infinity").innerHTML = (2E310)
}

function negInfinity() { //defining a function to display negative infinity after clicking on an element
    document.getElementById("negInfinity").innerHTML = (-3E310)
}

document.write(5 > 2); //printing true/false if 5 > 2

document.write(4 > 10); //printing true/false if 5 > 2

console.log(4+3); //printing the result to the console

console.log(4>5); //printing the result to the console

document.write(10 == 10); //printing true/false if 10 is equal to 10

document.write(3 == 12); //printing true/false if 10 is equal to 10

var X = 100; //declaring a variable equal to 100
var Y = 100; //declaring a different variable equal to 100
document.write( X === Y); //printing out if X matches the data type and value of Y

var C = 50; //declaring a variable equal to 50
var D = "40"; //declaring a variable equal to "50"
document.write(C === D); //printing out if C matches the data type and value of D

var Z = 50; //declaring a variable equal to 50
var G = "50";//declaring a variable equal to "50"
document.write(Z === G);//printing out if Z matches the data type and value of G

var Q = 40;//declaring a variable equal to 40
var M = "40";//declaring a variable equal to "40"
document.write(Q === M); //printing out if Q matches the data type and value of M

document.write(5 > 1 && 10 > 5); //printing true/false if 5 > 1 and if 10 > 5

document.write(3 > 4 && 10 > 4); //printing true/false if 3 > 4 and if 10 > 4

document.write(5 > 10 || 10 > 9); //printing true/false if 5 > 10 or if 10 > 9

document.write(4 > 5 || 5 > 20); //printing true/false if 4 > 5 or if 5 > 20
 
function not_Function() { //defining a function to display the opposite/inverse of the true output of 20 > 10
    document.getElementById("Not").innerHTML = !(20 > 10);
}

function not_not_Function() { //defining a function to display the opposite/inverse of the false output of 5 > 10
    document.getElementById("Notnot").innerHTML = !(5 > 10);
}


document.write(Bigger = (5 > 1) ? "Left number is bigger":"Right number is bigger");