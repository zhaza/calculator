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
// function calcOperate(arr) {
//     if (arr.includes("+")) return calcAdd(+arr[0], +arr[2]);
//     if (arr.includes("-")) return calcSubtract(+arr[0], +arr[2]);
//     if (arr.includes("*")) return calcMultiply(+arr[0], +arr[2]);
//     if (arr.includes("/")) return calcDivide(+arr[0], +arr[2]);
// }
function calcOperate(x, y, z) {
    if (y === ("+")) return calcAdd(+x, +z);
    if (y === ("-")) return calcSubtract(+x, +z);
    if (y === ("*")) return calcMultiply(+x, +z);
    if (y === ("/")) return calcDivide(+x, +z);
}

let arr = [];
//All number button.eListens for click to update display, then display.
function input() {
    const buttons = document.querySelectorAll(".digit");
    const show = document.querySelector(".display");
    
    buttons.forEach((button) => {
        button.addEventListener("click", event => {
            if (show.textContent === "0") clear();
            show.textContent += button.textContent;
            return show.textContent;
        })
    })
};
input();

//All Ops button.eListeners, pushes number when clicked wipes display for next number
function operate() {
    const ops = document.querySelectorAll(".ops")
    
    ops.forEach((button) => {
        button.addEventListener("click", event => {
            const show = document.querySelector(".display");
            if (button.textContent === "=") {
                arr = show.textContent.split(' ')
                if (arr.length > 3) {
                    let x = arr[0]
                    let y = 0;
                    let z = 0;
                    for (let i = 1; i <= arr.length-1; i+=2) {
                        y = arr[i];
                        z = arr[i+1];
                        console.log(x, y, z);
                        let result = calcOperate(x, y, z);
                        x = result;
                    }
                    return show.textContent = x
                } else if (arr.length <= 3) {
                    let result = calcOperate(...arr)
                    console.log(result)
                    return show.textContent = result;
                }
            }
            if (button.textContent === "clear") {
                clear()
                return show.textContent = "0";
            }
            return show.textContent += " " + button.textContent + " "
        })
    })
}
operate();

//clear function
function clear() {
    const show = document.querySelector(".display");
    show.textContent = "";
    arr = [];
};

// //history function, to collect previous calculations
// function history() {
    // const container = document.querySelector(".container")
//     const history = document.createElement('div')
//     history.textContent = button.textContent
//     container.appendChild(history)
// }