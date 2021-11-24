function getReceipt() {
    // This initializes our string so it can get passed from
    // function to function, growing line by line into a full receipt
    var text1 = "<h3>You Ordered:<h3>"; /** declaring this variable with the  */
    var runningTotal = 0; /** declaring a variable with the value of 0 to be changed later */
    var sizeTotal = 0; /** declaring a variable with the value of 0 to be changed later */
    var sizeArray = document.getElementsByClassName("size"); /** declaring an array to store the size */
    for (var i = 0; i < sizeArray.length; i++) { // for loop to loop through sizeArray and check if item is checked
        if (sizeArray[i].checked) { // if an item is checked
            var selectedSize = sizeArray[i].value; //set new variable to the value of the selected item
            text1 = text1 + selectedSize + "<br>"; // add selectedSize variable to the text1 variable and a break
        }
    }
    if (selectedSize === "Personal Pizza") { //these if statements check which size was selected and assigns a cost number to size total variable
        sizeTotal = 6; 
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal; // set new variable to sizetotal variable
    console.log(selectedSize + " = $" + sizeTotal + ".00"); //prints selected size and price
    console.log("size text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");
    // these variables will get passed on to each function
    getTopping(runningTotal, text1); //this calls the getTopping function
};

function getTopping(runningTotal, text1) { // declaring function to get the toppings and add their cost to the total 
    var toppingTotal = 0; //declaring variable set to 0 for topping total
    var selectedTopping = []; //declaring empty variable fo r
    var toppingArray = document.getElementsByClassName("toppings"); //declaring new variable that stores the selected info from the toppings
    for (var j = 0; j < toppingArray.length; j++) { //for loop that loops through topping array
        if (toppingArray[j].checked) { //checks if which items were selected and stored in the empty array
            selectedTopping.push(toppingArray[j].value); // pushes the value
            console.log("selected topping item: (" + toppingArray[j].value+")");
            text1 = text1 + toppingArray[j].value + "<br>";
        }
    }
    var toppingCount = selectedTopping.length; //setting new variable to the length of the selectedTopping array
    if (toppingCount > 1) { //if statement that checks if toppingCount is great than 1
        toppingTotal = (toppingCount - 1); //if true set topping total to topping count - 1
    } else { // otherwise set topping total to 0
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal); //adding the toppingtotal to the running total variable
    console.log("total selected topping items: " + toppingCount); //printing variety of outputs
    console.log(toppingCount + " topping - 1 free topping = " + "$" + toppingTotal + ".00");
    console.log("topping text1: " + text1);
    console.log("Purchase Total: " + "$" + runningTotal + ".00");
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal+".00"+"</strong></h3>"; //prints out total after everything is done
};