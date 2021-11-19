function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " ro ride.";
}

function Age_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough to vote":"You can vote!";
    document.getElementById("Vote").innerHTML = Can_vote;
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function Info(FirstName, LastName, DOB, EyeColor) {
    this.Info_FirstName = FirstName;
    this.Info_LastName = LastName;
    this.Info_DOB = DOB;
    this.Info_EyeColor = EyeColor;
}

var Daniel = new Info("Daniel", "Alvarez", "11/19/1996", "Brown");
var Stephanie = new Info("Stephanie", "Hong", "12/05/1996", "Brown");
var Sally = new Info("Sally", "Alvarez", "06/15/2020", "Brown");
function newFunction() {
    document.getElementById("New_and_This").innerHTML = "My first name is " + Daniel.Info_FirstName + " I was born on " + Daniel.Info_DOB + " and my eye color is " + Daniel.Info_EyeColor;
}

/* if = "Yeah"
document.write(if); */

function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}

function nested_Function() {
    document.getElementById("Nested").innerHTML = Guess();
    function Guess() {
        var first_Number = 5;
        function Plus_five() {first_Number += 5;}
        Plus_five();
        return first_Number;
    }
}