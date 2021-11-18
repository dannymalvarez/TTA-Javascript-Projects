function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}

function concat() { //defining my function to concatenate
    var sentence = "I am learning"; // defining the sentence variable
    sentence += " a lot from this book!"; // adding a second string to the sentence variable
    document.getElementById("Concatenate").innerHTML = sentence; //putting the result "sentence" into the html by the concatenate id
}

function multiply() {
    var B = 4;
    var A = 3;
    product = A * B;
    document.getElementById("Multiply").innerHTML = product;
}