function full_Sentence() { // defining a function that will concatenate a string from many parts
    var part_1 = "I have "; //These are
    var part_2 = "made this "; // the parts
    var part_3 = "into a complete "; // that go into
    var part_4 = "sentence."; // the concat function
    var whole_sentence = part_1.concat(part_2, part_3, part_4); // this is the .concat at work
    document.getElementById("Concatenate").innerHTML = whole_sentence // this prints the output in the html where id="concatenate"
}

function slice_Method() { // defining a function that will slice a string 
    var Sentence = "All work and no play makes Johnny a dull boy."; /* defining a variable
    from where we will slice from */
    var Section = Sentence.slice(27,33); /* defining a variable to assign the value of 
    the sliced part of the sentence variable*/
    document.getElementById("slice").innerHTML = Section; /* this prints the Section variable 
    to the html */
}

function second_slice_Method() { // defining a function that will slice a string 
    var second_Sentence = "My feet are cold today."; /* defining a variable
    from where we will slice from */
    var second_Section = second_Sentence.slice(3,7); /* defining a variable to assign the value of 
    the sliced part of the second_sentence variable*/
    document.getElementById("second_slice").innerHTML = second_Section; /* this prints the second_Section variable 
    to the html */
}

var X = "hi" // defining a variable with the value of "hi"
document.write(X.toUpperCase()); // using the .toUppercase method on the variable X


function searchMe() { /* defining a function that will search a string and 
    spit out the location for the searched item */
let how = "How are you today?" /* declaring a variable with the value of the string 
"How are you today?" */
let area = how.search("today"); /* declaring a variable with the value of 
the location of the searched item in the how variable using the search method */
document.getElementById("search").innerHTML = area; /* Printing the area variable 
to the HTML where the search id is placed */
}

function string_Method() { // defining a function to perform the .toString method
    var G = 184; //decfining a variable with a number
    document.getElementById("Numbers_to_string").innerHTML = G.toString(); /* printing 
    the variable G with the .toString method performed on it to the HTML where
    the id for it is placed */
}

function precision_Method() { //defining a function to perform the precision method
    var F = 123.1232230498203948345; /* declaring the variable F with a number */
    document.getElementById("Precision").innerHTML = F.toPrecision(5); /* printing out the 
    value of the variable F with the .toPrecision method performed on it to the HTML where
    the id "Precision" is placed */
}

function fixed() { //defining a function to perform the .toFixed method
    let five = 5.987987987; //declaring a variable with the value of a number
    let fiveg = five.toFixed(3); /* declaring a variable with the value 
    of the variable five with the .toFixed method performed on it*/
document.getElementById("5g").innerHTML = fiveg; /* printing the result variable 
to the HTML where 5g was called */
}

function fixedThis() { //defining a function to perform the .valueOf method
    let five = "value of"; //declaring a variable with the value of a number
    let fiveg = five.valueOf(five); /* declaring a variable with the value 
    of the variable five with the .valueOf method performed on it*/
document.getElementById("fixThis").innerHTML = fiveg; /* printing the result variable 
to the HTML where 5g was called */
}