function my_Dictionary() { // defining a function for a dictionary
    var Truck = { // defining a variable named truck tht contains an object with key value pairs
        Brand: "Dodge", // This is one of 4 key value pairs
        Model: "Ram 1500",
        Year: 2016,
        Color: "Blue"
    };
    delete Truck.Model // this deletes one of the key value pairs
    document.getElementById("Dictionary").innerHTML = Truck.Model; //this prints out the specified value to the html

}

