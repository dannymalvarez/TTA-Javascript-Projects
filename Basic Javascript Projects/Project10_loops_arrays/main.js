function Call_Loop() {
    var counter = ""
    var G = 1;
while(G<11) {
    counter += "<br>" + G;
    G++
}
document.getElementById("Loop").innerHTML = counter;
}

let myName = "Daniel";
let nameLength = myName.length; // The length property returns the length of a string
 // and is applied to a variable or string by adding ".length" to the end of it
document.getElementById("myName2").innerHTML = nameLength;

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content="";
function for_Loop() {
    for (let Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() {
    var myArray = ["Daniel", " Steph", " Sally."];
    document.getElementById("Array").innerHTML = myArray;
}

function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}

const X = 10;
//X = 2;
document.getElementById("printX").innerHTML = X;

function constant_practice() {
    const favorite_vehicle = {type:"Sports Car", brand: "Nissan", model:"400z", color: "grey"};
    favorite_vehicle.color = "yellow";
    favorite_vehicle.price = "$40,000";
    favorite_vehicle.type = "Truck";
    favorite_vehicle.engine = "fun one";
    document.getElementById("Car").innerHTML = "The upcoming release of the " + favorite_vehicle.model + " in the color " + favorite_vehicle.color + " is highly anticipated by some." + favorite_vehicle.engine + favorite_vehicle.type;
}

//the return statement stops the execution of a function and returns a value from the function.
function practice() {
    return 15;
}
document.getElementById("return").innerHTML = practice();

let car = {
    make: "Nissan ",
    model: "400z ",
    year: "2022 ",
    color: "gray ",
    description: function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();

function text_counter() {
    let counter = "";
    for (let i = 0; i < 10; i++) {
        if (i===3) {break; }
        counter += "The number is " + i + "<br>";
    
    }
    document.getElementById("Break").innerHTML = counter;
    }

function text_counter2() {
let counter = "";
for (let i = 0; i < 10; i++) {
    if (i===3) {continue; }
    counter += "The number is " + i + "<br>";

}
document.getElementById("Continue").innerHTML = counter;
}