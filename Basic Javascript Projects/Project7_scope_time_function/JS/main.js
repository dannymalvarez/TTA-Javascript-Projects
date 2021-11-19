var X = 15; // This is the global variable
function multiply_num() { //defining a function to multiply numbers
    document.write(30 * X + "<br>"); //printing out the product to the html
}

function multiply_num2() { //defining a function to multiply numbers
    document.write(40 * X); //printing out the product when the function is called 
}

multiply_num(); //calling function
multiply_num2(); //calling function


/* ****** This is commented out because it for some reason wasn't letting my if (5 > 1) statement work ****** */

function multiply_num3() { //defining a function to multiply numbers
    var Y = 5; //decided to use Y instead of X so it wouldn't pull in the global "X"
    console.log(20 * Y); //logging output to console
}

function multiply_num4() { //defining a function to multiply numbers
    var Y = 23;
    console.log(10 * Y); // logging output to console
}

multiply_num3();
multiply_num4(); 

function get_Date() { //defining function for getting the time and spitting out a result based on that info
    if (new Date().getHours() < 18) { // defining if statement that checks if time is earlier than 6 pm 
        document.getElementById("Greeting").innerHTML = "How are you today?"; // if true, spit out "How are you today?"
    }
}

function grab_Date() { //defining a function to get the time and spit out a result based on that info
    if (new Date().getHours() < 12) { // defining an if statement that checks if time is earlier than 12 pm
        document.getElementById("Hello").innerHTML = "Good morning" // if true, print out "Good morning"
    }
}

if (5 > 1) { // defining if statement that checks if 5 is greater than 1
    document.write("<br>" + "5 is greater than 1" + "<br>") // if true, print out to the html "5 is greater than 1"
}

function Age_Function() { // defining function that checks age
    Age = document.getElementById("Age").value; /* declaring what the value of the 
    variable Age will be set to, based on input */
    if (Age >= 18) { //defining an if statement that checks if Age is greater than or equal to 18
        Vote = "You are old enough to vote!"; //if true, print out "You are old enough to vote"
    }
    else { //else statement that is reached if all if / else if statements before it are not met
        Vote = "You are not old enough to vote!"; /* if we reach this point with no true if / else if statements before it
          print out "you are not old enough to vote*/
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote; //this sets this place in the html to output "Vote" to
}

function Name_Function() { //defining the function that checks the name
    FirstName = document.getElementById("FirstName").value; /* declaring what the value of the 
    variable FirstName will be set to, based on input */
    if (FirstName === "Daniel") { //defining an if statement that checks if Name is equal to "Daniel"
        Great = "Great!"; //if true, print out "Great"
    }
    else { //else statement that is reached if all if / else if statements before it are not met
        Great = "Sorry, try again next time"; /* if we reach this point with no true if / else if statements before it
        print out "Sorry, try again next time"*/
    }
    document.getElementById("What_is_your_name?").innerHTML = Great; //this sets this place in the html to output the value of "Great"
}

function Time_function() { //defining new function for time retrieval
    var Time = new Date().getHours(); //setting variable Time to current time
    var Reply; // declaring new variable
    if (Time < 12 == Time > 0) { //defining if statement that checks if time is less than 12 and greater than 0
        Reply = "It is morning time!"; //sets reply equal to the string "It is morning time!"
    }
    else if (Time >= 12 == Time < 18) { /* if the first condition isn't met, this one is checked to see if time is greater 
        than or equal to 12 and if tiem is less than 18 */
        Reply = "It is afternoon."; // sets reply equal to the string "It is afternoon"
    }
    else { //if all prior if / else if statement conditions are not met, run this
        Reply = "It is evening time."; // sets reply equal to "it is evening time"
    }
    document.getElementById("Time_of_day").innerHTML = Reply; //this sets this place in html to output the value of "Reply"
}