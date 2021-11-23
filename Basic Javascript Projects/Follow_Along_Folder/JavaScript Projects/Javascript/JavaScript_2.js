function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    let y = document.forms["myForm"]["lname"].value;
    let z = document.forms["myForm"]["email"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    } else if (y == "") {
        alert("Last name must be filled out");
        return false;
    } else if (z == "") {
        alert("Email address must be filled out");
        return false;
    }
}