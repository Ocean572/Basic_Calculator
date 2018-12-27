let output = "";
let x = "";
let y = "";
let screen = document.querySelector(".screenContainer");
let one = document.getElementById("1");
let two = document.getElementById(".2");
let three = document.getElementById(".3");
let four = document.getElementById(".4");
let five = document.getElementById(".5");
let six = document.getElementById(".6");
let seven = document.getElementById(".7");
let eight = document.getElementById(".8");
let nine = document.getElementById(".9");
let zero = document.getElementById(".0");
let divide = document.getElementById(".%");
let plus = document.getElementById(".+");
let minus = document.getElementById(".-");

document.querySelector(".buttonContainer").addEventListener("click", function(event) {
    x = event.target.id;
    if (x == "%" || x == "+" || x == "-" || x == "/" || x == "x") {
        screen.innerText += (String.fromCharCode(160) + x + String.fromCharCode(160));
    }   else if (x == "=") {
    }   else if (x == "c") {
            screen.innerText = "";
            output = "";
    }   else {
            screen.innerText += x;
    }
});


//Outputs the data on the screen into an array with numbers
document.getElementById("=").addEventListener("click", function() {
    let input = screen.textContent.split(String.fromCharCode(160));
    console.log(input);
    for (let i = 0; i < input.length; i++) {
        if (input[i] == "x") {
            input[i] = "*";
        }   else if(input[i] == "%") {
            input[i] = "/";
        }
    }
    for (let i = 0; i < input.length; i++) {
        output += (input[i] + " ");
    }
    screen.innerText = eval(output);
});



