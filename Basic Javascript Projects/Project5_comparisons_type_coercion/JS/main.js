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