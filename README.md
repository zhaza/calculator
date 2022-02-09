// Calculator project. Dev a working calulator from scratch.

1. Calculation functions: Add, Subtract, Multiply, Divide, and Operate
    a) Operate parameters: 1 variable + 1 Calc function + 1 variable, returns based off included Calc function
2. Set up HTML
    a) Container
    b) Display
    c) Buttons
3. Set up button.EListener function for all Numbers
    a)Take in numbers as strings and update the display. If display = 0, wipe str, then set display to button text
4.  Set up button.eListener function for all operators
    a) Clear, wipe initial value and wipe after operator
    b) stores first full number into an array 
    c) stores operator into an array
    d) stores last full number into an array and executes calculation function
    
Set an array                                          | [ ] 
push a number and operator as an array into the array | [[0.0 & 0.1]]
push a number and operator as an array into the array | [[0.0 & 0.1], [1.0 & 1.1]]

Set a string
Input number
When operator is pushed
    set num as                          X
    set operator & call function as     Y
Input next number
If next operator is pushed
    Set last num as                     Z
    Solve and return full number as     X
If operate / = is pushed
                        Z
    Solve and return full number
