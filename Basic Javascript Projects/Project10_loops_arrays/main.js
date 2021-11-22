function Call_Loop() { // function for while loop
    var counter = "" //declaring variable counter and setting equal to ""
    var G = 1; //declaring variable G and setting it equal to 1
while(G<11) { //while loop that loops while G is less than 11
    counter += "<br>" + G; // if G is < 11, add the value of G to counter and a paragraph break
    G++ //increase G by 1
}
document.getElementById("Loop").innerHTML = counter; //display the value of counter at the id="Loop"
}

let myName = "Daniel"; //declaring a variable myName set to "Daniel"
let nameLength = myName.length; // The length property returns the length of a string
 // and is applied to a variable or string by adding ".length" to the end of it
document.getElementById("myName2").innerHTML = nameLength;  /** set nameLength to print where the
"myName2" id is located */

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"]; /**
 * declaring a variable Instruments set to an array with various instruments
 */
var Content=""; /** declaring a variable Content with the value of an empty string */
function for_Loop() { /** function for a for loop that will print out the instruments in the array */
    for (let Y = 0; Y < Instruments.length; Y++) { /** For loop that loops through the Instruments array  */
        Content += Instruments[Y] + "<br>"; /** updating the Content variable with the 
        value of Instruments at index Y and an HTML break statement */
    }
    document.getElementById("List_of_Instruments").innerHTML = Content; /** set Content to print
    where the id of "List_of_Instruments" is placed in HTML */
}

function array_Function() { /** declaring a function for an array to be printed out */
    var myArray = ["Daniel", " Steph", " Sally."]; /** declaring a variable myArray
     set to an array with names */
    document.getElementById("Array").innerHTML = myArray; /** set myArray to be displayed
    where the id of "Array" is placed in HTML */
}

function constant_function() { /** declaring a function for concatenating a sentence
    with parts of an object */
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"}; /**
     * declaring a constant Musical_Instrument to an object with keys and value pairs */
    Musical_Instrument.color = "blue"; /** setting the color for the musical instrument within the array 
    to the color blue */
    Musical_Instrument.price = "$900"; /** Adding the price for the musical instrument 
    to the array */
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price; /** printing
    out a sentence made up of the array information where the "Constant" id is placed */
}

const X = 10; /** declaring a constant X set to the value of 10; */
//X = 2; This is to show how you can not change a constant once it is declared and set to a value
document.getElementById("printX").innerHTML = X; /** set X to print where the id tag for 
"PrintX" is placed in the HTML */

function constant_practice() { /** declared a function for another object with kvps */
    const favorite_vehicle = {type:"Sports Car", brand: "Nissan", model:"400z", color: "grey"}; /** declaring a 
    new variable favorite_vehicle set to the object containing key value pairs of a vehicle */
    favorite_vehicle.color = "yellow"; /** setting the value of the color value to "yellow" */
    favorite_vehicle.price = "$40,000"; /** adding the price of the vehicle to the object */
    favorite_vehicle.type = "Truck"; /** setting the value of the type of vehicle to "Truck"*/
    favorite_vehicle.engine = "fun one"; /**adding a kvp */
    document.getElementById("Car").innerHTML = "The upcoming release of the " + favorite_vehicle.model + " in the color " + favorite_vehicle.color + " is highly anticipated by some." + favorite_vehicle.engine + favorite_vehicle.type; 
    /** ^This is setting the output sentence made up of the kvp info to be displayed
     * wherever the id "car" is in the HTML
     */
}

//the return statement stops the execution of a function and returns a value from the function.
function practice() {
    return 15;
}
document.getElementById("return").innerHTML = practice(); /** Setting the practice function 
output to be displayed where the id "return" is in the HTML*/

let car = { /** declaring a new object with kvps */
    make: "Nissan ",
    model: "400z ",
    year: "2022 ",
    color: "gray ",
    description: function() { /** this function returns a sentence comprised of the kvps  */
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description(); /** setting the specific
output of the function to be displayed where the id "Car_Object" is in the HTML */

function text_counter() { /** function for counting */
    let counter = ""; /** declaring a variable set to an empty string */
    for (let i = 0; i < 10; i++) { /** for loop that loops until i = 10 */
        if (i===3) {break; } /** break statement that breaks the loop if i is exactly equal to the number 3 */
        counter += "The number is " + i + "<br>"; /** updates the value of the counter variable
        with a string that includes the value of i to be printed out to the HTML */
    
    }
    document.getElementById("Break").innerHTML = counter; /** displays the counter output wherever
    the id "Break" is displayed in the HTML */
    }

function text_counter2() { /** another function for counting to get some more practice */
let counter = ""; /** declaring a variable set to an empty string */
for (let i = 0; i < 10; i++) { /** break statement that breaks the loop if i is exactly equal to the number 3 */
    if (i===3) {continue; } /** break statement that skips and then continues the loop if i is exactly equal to the number 3 */
    counter += "The number is " + i + "<br>"; /** updates the value of the counter variable
    with a string that includes the value of i to be printed out to the HTML */

}
document.getElementById("Continue").innerHTML = counter; /** displays the counter output wherever
the id "Break" is displayed in the HTML */
}