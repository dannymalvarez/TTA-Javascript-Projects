 function countdown() { //defining a function that will countdown from an input time
    var seconds = document.getElementById("seconds").value; // sets the variable seconds to the value of the input in the HTML

    function tick() { // defining a function that will set the time between counting 
        seconds = seconds - 1; // sets the seconds variable to seconds - 1, to allow it to countdown
        timer.innerHTML = seconds; //sets the timer that will display on the HTML to whatever seconds equals
        var time = setTimeout(tick, 1000); // defining a variable to equal the time to reset?
        if (seconds == -1) { // defining an if statement that checks if seconds is loosely equal to "-1"
            alert("Time's up!"); // if true display a window with the message "Time's up!"
            clearTimeout(time); // furthermore if true, clear the reset interval to make the timer stop counting down 
            timer.innerHTML = ""; //the timer method is set to empty
        }
    }
    tick(); //call the tick function 
}

var slideIndex = 1; // setting a variable equal to 1
showSlides(slideIndex); // this is calling the showSlides function with the input of slideIndex

// Next/previous controls
function plusSlides(n) { //this function is for the next/previous controls
    showSlides(slideIndex += n); // this calls the showSlides function with (slideIndex += n) as the input. N being the input from the html?
}

//Thumbnail image controls
function currentSlide(n) { //defining a function that takes in the input of "n" and affects the current slide.
    showSlides(slideIndex = n); //this calls the showSlides function with the input of (slideIndex = n)
}

function showSlides(n) { // defining the function showSlides which takes the input of "n"
    var i; // declaring a variable, i;
    var slides = document.getElementsByClassName("mySlides"); /* declaring a variable "slides" and setting it to 
    affect the element at the instance of "mySlides" from the HTML */
    var dots = document.getElementsByClassName("dot"); /* declaring a variable "dots" and setting it to 
    affect the element at the instance of "dot" from the HTML */
    if (n > slides.length) {slideIndex = 1} /* declaring an if statement that checks if n is greater than slides.length,
     if true  set slideIndex equal to 1*/
    if (n < 1) {slideIndex = slides.length} /* declaring an if statement that checks if n is less than slides.length,
    if true  set slideIndex equal to 1*/
    for (i = 0; i < slides.length; i++) { /* delaring a for loop that loops through slides and
        sets the style.display for each element at that position of slides to equal "none"*/
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) { /* delaring a for loop that loops through the dots and
        replaces the className from active to blank */
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block"; //sets the slides at slideIndex-1.style.display equal to "block"
    dots[slideIndex-1].className += " active"; // sets the dots at slideIndex-1.className to active
}