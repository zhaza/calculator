//Calculation functions and operator/equals
function calcAdd(a, b) {
    return a + b;
};
function calcSubtract(a, b) {
    return a - b;
}
function calcMultiply(a, b) {
    return a * b;
}
function calcDivide(a, b) {
    return a / b;
}
function calcOperate(x, y, z) {
    if (y === ("+")) return Number.parseFloat(calcAdd(+x, +z)).toFixed(2);
    if (y === ("-")) return Number.parseFloat(calcSubtract(+x, +z)).toFixed(2);
    if (y === ("*")) return Number.parseFloat(calcMultiply(+x, +z)).toFixed(2);
    if (y === ("/")) return Number.parseFloat(calcDivide(+x, +z)).toFixed(2);
}

let x = "";
let y = "";
let z = "";
//All number button.eListens for click to update display, then display.
function input() {
    const buttons = document.querySelectorAll(".digit");
    
    buttons.forEach((button) => {
        button.addEventListener("click", event => {
            const show = document.querySelector(".display");
            if (y === "") { //take in first num
                x += button.textContent;
                return show.textContent = x;
            } else { //take in last num
                z += button.textContent;
                return show.textContent = z;
            }
        })
    })
}
input();

// All Ops button.eListeners, pushes number when clicked wipes display for next number
function operate() {
    const ops = document.querySelectorAll(".ops")
    
    ops.forEach((button) => {
        button.addEventListener("click", event => {
            const show = document.querySelector(".display");
            let result = "";
            if (button.textContent === "clear") return clear();
            if (y === "") { //take in operator, unless "="
                if (button.textContent === "=") return y = "";
                return y = button.textContent;
            } else if (z === "0" && y === "/") {
                alert("yup");
                return show.textContent = "You need coffee?";
            } else { //calculate + set operator for next calc, unless "="
                if (z === "") z = show.textContent;
                result = calcOperate(x, y, z);
                clear();
                x = result;
                if (button.textContent !== "=") y = button.textContent;
                return show.textContent = result;
            }
        })
    })
}
operate();

//clear function
function clear() {
    const show = document.querySelector(".display");
    show.textContent = "0";
    x = "";
    y = "";
    z = "";
};

// //history function, to collect previous calculations
// function history() {
    // const container = document.querySelector(".container")
//     const history = document.createElement('div')
//     history.textContent = button.textContent
//     container.appendChild(history)
// }