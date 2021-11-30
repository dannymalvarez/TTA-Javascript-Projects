var obj = {"name":"Daniel", "age":25, "city":"Chattanooga"};
var myJSON = JSON.stringify(obj);
document.getElementById("demo").innerHTML = myJSON;
var obj2 = JSON.parse('{"firstName":"Daniel", "lastName":"Alvarez"}');
document.getElementById("demo2").innerHTML = obj2.firstName;

if (typeof(Storage) !== "undefined") {
    //Store
    localStorage.setItem("lastname", "Alvarez");
    //Retrieve
    document.getElementById("result").innerHTML = localStorage.getItem("lastname");
} else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage..."
}