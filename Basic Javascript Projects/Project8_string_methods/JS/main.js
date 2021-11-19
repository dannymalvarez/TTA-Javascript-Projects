function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence
}

function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("slice").innerHTML = Section;
}

function second_slice_Method() {
    var second_Sentence = "My feet are cold today.";
    var second_Section = second_Sentence.slice(3,7);
    document.getElementById("second_slice").innerHTML = second_Section;
}

var X = "hi"
document.write(X.toUpperCase());


function searchMe() {
let how = "How are you today?"
let area = how.search("today");

document.getElementById("search").innerHTML = area;
}

function string_Method() {
    var G = 184;
    document.getElementById("Numbers_to_string").innerHTML = G.toString();
}

function precision_Method() {
    var F = 123.1232230498203948345;
    document.getElementById("Precision").innerHTML = F.toPrecision(5);
}

function fixed() {
    let five = 5.987987987;
    let fiveg = five.toFixed(3);
document.getElementById("5g").innerHTML = fiveg;
}

function fixedThis() {
    let five = "value of";
    let fiveg = five.valueOf(five);
document.getElementById("fixThis").innerHTML = fiveg;
}