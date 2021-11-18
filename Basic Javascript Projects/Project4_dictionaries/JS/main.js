function my_Dictionary() {
    var Truck = {
        Brand: "Dodge",
        Model: "Ram 1500",
        Year: 2016,
        Color: "Blue"
    };
    delete Truck.Model
    document.getElementById("Dictionary").innerHTML = Truck.Model;

}