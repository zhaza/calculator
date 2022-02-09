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
    if (arr.includes("+")) return calcAdd(+arr[0], +arr[2]);
    if (arr.includes("-")) return calcSubtract(+arr[0], +arr[2]);
    if (arr.includes("*")) return calcMultiply(+arr[0], +arr[2]);
    if (arr.includes("/")) return calcDivide(+arr[0], +arr[2]);
}
// function calcOperate(x, y, z) {
//     if (y === ("+")) return calcAdd(+x, +z);
//     if (y === ("-")) return calcSubtract(+x, +z);
//     if (y === ("*")) return calcMultiply(+x, +z);
//     if (y === ("/")) return calcDivide(+x, +z);
// }

let str = "";
let arr = [];
//All number button.eListens for click to update display, then display.
function input() {
    const buttons = document.querySelectorAll(".digit");
    const show = document.querySelector(".display");
    
    buttons.forEach((button) => {
        button.addEventListener("click", event => {
            // if (show.textContent === "0") {
            //     show.textContent = ""
            // }
            // console.log(str);
            str += button.textContent;
            return show.textContent = str;
        })
    })
};
input();

// All Ops button.eListeners, pushes number when clicked wipes display for next number
function operate() {
    const ops = document.querySelectorAll(".ops")
    
    ops.forEach((button) => {
        button.addEventListener("click", event => {
            const show = document.querySelector(".display");
            let result = "";
            if (button.textContent === "clear") return clear();
            if (button.textContent === "=") {
                if (arr.length > 1) {
                    arr.push(str);
                    result = calcOperate(arr);
                    clear();
                    arr.push(result);
                    return show.textContent = result;
                }
            } else {
                if (arr.length === 0) {
                    arr.push(show.textContent);
                    arr.push(button.textContent);
                    return str = "";
                } else if (arr.length === 1) {
                    return arr.push(button.textContent);
                } else {
                    arr.push(str);
                    result = calcOperate(arr);
                    clear();
                    arr.push(result);
                    arr.push(button.textContent);
                    return show.textContent = result;
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
    arr = [];
};

// //history function, to collect previous calculations
// function history() {
    // const container = document.querySelector(".container")
//     const history = document.createElement('div')
//     history.textContent = button.textContent
//     container.appendChild(history)
// }