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
function calcOperate(arr) {
    if (arr.includes("+")) return calcAdd(+arr[0], +arr[2]).toFixed(2);
    if (arr.includes("-")) return calcSubtract(+arr[0], +arr[2]).toFixed(2);
    if (arr.includes("*")) return calcMultiply(+arr[0], +arr[2]).toFixed(2);
    if (arr.includes("/")) return calcDivide(+arr[0], +arr[2]).toFixed(2);
}
// function calcOperate(x, y, z) {
//     if (y === ("+")) return calcAdd(+x, +z);
//     if (y === ("-")) return calcSubtract(+x, +z);
//     if (y === ("*")) return calcMultiply(+x, +z);
//     if (y === ("/")) return calcDivide(+x, +z);
// }

let str = "";
let step = "";
//All number button.eListens for click to update display, then display.
function input() {
    const buttons = document.querySelectorAll(".digit");
    const show = document.querySelector(".display");
    
    buttons.forEach((button) => {
        button.addEventListener("click", event => {
            if (str.match(/\D/)) {
                step += button.textContent;
                show.textContent = step;
                return str += step
            } else {
                str += button.textContent;
                return show.textContent = str;
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
            if (str.split(" ").length === 3) {
                result = calcOperate(str.split(" "));
                clear();
                if (button.textContent === "=") {
                    str += result + " ";
                } else {
                    str += result + " " + button.textContent + " ";
                }
                return show.textContent = result;
            } else {
                if (str.split(" ").length === 2 && !str.match(/\D/)) {
                    clear();
                    show.textContent = result;
                    return alert("Invalid Format, try again with an operator.");
                } else {
                    return str += " " + button.textContent + " ";
                }
            }
        })
    })
}
operate();

//clear function
function clear() {
    const show = document.querySelector(".display");
    show.textContent = "0";
    str = "";
    step = "";
};

// //history function, to collect previous calculations
// function history() {
    // const container = document.querySelector(".container")
//     const history = document.createElement('div')
//     history.textContent = button.textContent
//     container.appendChild(history)
// }