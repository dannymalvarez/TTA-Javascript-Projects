function Color_Function() {
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Color_String = " is a great color!";
    switch(Colors) {
        case "Red":
            Color_Output = "Red" + Color_String;
        break;
        case "Yellow":
            Color_Output = "Yellow" + Color_String;
        break;
        case "Green":
            Color_Output = "Green" + Color_String;
        break;
        case "Blue":
            Color_Output = "Blue" + Color_String;
        break;
        case "Pink":
            Color_Output = "Pink" + Color_String;
        break;
        case "Purple":
            Color_Output = "Purple" + Color_String;
        break;
        default: Color_Output = "Please enter a color exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Color_Output;
}

function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

var c = document.getElementById("ID_Name2");
var ctx = c.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(600, 300);
ctx.stroke();

var a = document.getElementById("ID_Name");
var atx = a.getContext("2d");

var grd = atx.createLinearGradient(0,0,170,0);
grd.addColorStop(0, "blue");
grd.addColorStop(1, "white");

atx.fillStyle = grd;
atx.fillRect(20,20,150,210);
