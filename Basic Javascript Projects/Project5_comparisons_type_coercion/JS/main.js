document.write(typeof "Word");

document.write(typeof 3);

document.write("100" + 67);

function my_Function() {
    document.getElementById("Test").innerHTML = 0/0;
}

function my_Function2() {
    document.getElementById("Test2").innerHTML = isNaN('09')
}

function my_Function3() {
document.getElementById("Test3").innerHTML = isNaN('This is a string')
}

document.write(-3E310);

function infinity() {
    document.getElementById("Infinity").innerHTML = (2E310)
}

function negInfinity() {
    document.getElementById("negInfinity").innerHTML = (-3E310)
}

document.write(5 > 2);

document.write(4 > 10);

console.log(4+3);

console.log(4>5);

document.write(10 == 10);

document.write(3 == 12);

var X = 100;
var Y = 100;
document.write( X === Y);

var C = 50;
var D = "40";
document.write(C === D);

var Z = 50;
var G = "50";
document.write(Z === G);

var Q = 40;
var M = "40";
document.write(Q === M);

document.write(5 > 1 && 10 > 5);

document.write(3 > 4 && 10 > 4);

document.write(5 > 10 || 10 > 9);

document.write(4 > 5 || 5 > 20);

function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 10);
}

function not_not_Function() {
    document.getElementById("Notnot").innerHTML = !(5 > 10);
}

