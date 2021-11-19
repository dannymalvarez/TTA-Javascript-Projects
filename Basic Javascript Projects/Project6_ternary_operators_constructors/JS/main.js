function Ride_Function() { //defining a function to determine if height meets requirements
    var Height, Can_ride; //declaring two variables to be used in the function
    Height = document.getElementById("Height").value; /*declaring what the value of the 
    variable Height will be set to, based on input */
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough"; /* defining what the value of 
    the variable Can_ride will be set to, which is a ternary operator that 
    checks if Height is less/greater than 52 and which 
    output message depending on if it is greater or lesser than */
    document.getElementById("Ride").innerHTML = Can_ride + " ro ride."; //Prints one of the output messages to the html
}

function Age_Function() { //defining a function to determine if age meets requirements
    var Age, Can_vote; //declaring two variables to be used in the function
    Age = document.getElementById("Age").value; /* declaring what the value of the 
    variable Age will be set to, based on input */
    Can_vote = (Age < 18) ? "You are not old enough to vote":"You can vote!"; /* defining what the value of 
    the variable Can_vote will be set to, which is a ternary operator that 
    checks if Age is less/greater than 18 and which 
    output message depending on if it is greater or lesser than */
    document.getElementById("Vote").innerHTML = Can_vote;//Prints one of the output messages to the html
}

function Vehicle(Make, Model, Year, Color) { //defining an object constructor function
    this.Vehicle_Make = Make; // These indicate the value of "this" is the object
    this.Vehicle_Model = Model; // that possesses the function
    this.Vehicle_Year = Year; // which we declare farther down when we use "new"
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "viper", 2020, "Red"); // These create a new object
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() { // defining a function that prints a specific message to the html
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function Info(FirstName, LastName, DOB, EyeColor) { //defining an object constructor function
    this.Info_FirstName = FirstName; // These indicate the value of "this" is the object
    this.Info_LastName = LastName; // that possesses the function
    this.Info_DOB = DOB; // which we declare farther down when we use "new"
    this.Info_EyeColor = EyeColor;
}

var Daniel = new Info("Daniel", "Alvarez", "11/19/1996", "Brown"); // These create a new object
var Stephanie = new Info("Stephanie", "Hong", "12/05/1996", "Brown");
var Sally = new Info("Sally", "Alvarez", "06/15/2020", "Brown");
function newFunction() { // defining a function that prints a specific message to the html
    document.getElementById("New_and_This").innerHTML = "My first name is " + Daniel.Info_FirstName + " I was born on " + Daniel.Info_DOB + " and my eye color is " + Daniel.Info_EyeColor;
}

/* if = "Yeah"
document.write(if); */ //This is the attempt to print out something that is reserved

function count_Function() { //defining a function that will be called from the html
    document.getElementById("Counting").innerHTML = Count(); // This is how the function is called from the html 
    // and how it prints the output to the html
    function Count() { //defining inner function to add 1 to the starting point
        var Starting_point = 9; //defining a variable with the value of 9
        function Plus_one() {Starting_point += 1;} //defining a function to be called
        Plus_one(); //calling the plus one function
        return Starting_point; //return the result which gets printed to the html
    }
}

function nested_Function() { //defining a function that will be called from the html
    document.getElementById("Nested").innerHTML = Guess(); // This is how the function is called from the html 
    //and how it prints the output to the html
    function Guess() { //defining inner function to add 5 to the first number
        var first_Number = 5; //defining a variable with the value of 5
        function Plus_five() {first_Number += 5;} //defining a function to be called
        Plus_five(); //calling the plus five function
        return first_Number; //return the result which gets printed to the html
    }
}