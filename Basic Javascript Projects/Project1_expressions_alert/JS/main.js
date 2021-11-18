var family = "The Alvarezes", Dad = "Daniel", Mom = "Stephanie", Dogter = "Sally";

document.write(Dogter);
document.write(Dad);
document.write(Mom);
document.write(family);

var family = family.fontcolor("red");
document.write(family);

var Dad = Dad.fontcolor("pink");
document.write(Dad);

var Mom = Mom.fontcolor("green");
document.write(Mom);
var Dogter = Dogter.fontcolor("orange");
document.write(Dogter);

var B = (3 * 5);
document.write(B);

function My_First_Function() { // Defining a function and naming it
    var str = "This text is green!"; //Defining a variable and giving it a string value
    var result = str.fontcolor("green"); // Using the fontcolor method on str variable
    document.getElementById("Green_Text").innerHTML = result; //putting the value of result into HTML element with "Green_Text" id
}