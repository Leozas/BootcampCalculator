//structure = var, then defined func, then overall func


/*----------------------------- GLOBALS ------------------------- */
// divApp initialization
const divApp = document.getElementById('App');

let numplaceholder = '0';

//numa initialization, used to determine first number to operate on in calculations
let numA = '0';

//numb initialization
let numB = '0';

//if operand has been defined, set op state to true so that we more from num a to num b
let opstate = false

let op = ''
//operand type
let optype = { '+': function (a, b) { return a + b }, '-': function (a, b) { return a - b }, '/': function (a, b) { return a * b }, '\xF7': function (a, b) { return a / b } };

// eval state, if equals sign is clicked, eval, if a 2nd op is clicked, eval
let evalstate = false

let solution = 'nosolyet'

/*---------------------------- L O G I C -----------------------------------------*/

//check what button then once determining, execute desired outcome of button press
function checkbtn() {
    switch (this.id[0]) {
        case "+":
            numplaceholder = '0'
            op = '+';
            opstate = true


            break;

        case "-":
                numplaceholder = '0'
                op = '-';
                opstate = true

            break;

        case "*":
                numplaceholder = '0'
                op = '*';
                opstate = true
            break;
            

        case "/":
                numplaceholder = '0'
                op = '/';
                opstate = true
            break;

        case "=":

            break;

        case "c":
            numplaceholder = '0'
            numA = '0'
            numB = '0'
            solution = ''


            break;

        case ".":
            if (numplaceholder.includes('.') == false){
                numplaceholder = numplaceholder+'.'
            }

            display1.innerHTML = numplaceholder + '///' + numA + op + numB + '///' + solution


            break;

        case '(':

            break;

        default:


            if (opstate == false) {


                //update numplaceholder
                //if placeholder is empty set it to new value
                if (numplaceholder === '0') {
                    numplaceholder = this.id[0]
                } else {
                    // if placeholder has value, append new value to end of placeholder
                    numplaceholder += this.id[0]
                }

                numA = numplaceholder
            } else {



                //update numplaceholder
                //if placeholder is empty set it to new value
                if (numplaceholder === '0') {
                    numplaceholder = this.id[0]
                } else {
                    // if placeholder has value, append new value to end of placeholder
                    numplaceholder += this.id[0]
                }

                numB = numplaceholder
            }


            // a better console log :D
            display1.innerHTML = numplaceholder + '///' + numA + op + numB + '///' + solution
            break;
    }
}

function num() {

}

function operator() {

}


// calculate inputs/expression to display 2 
function calculate(op) {
    switch (op) {
        case value:

            break;

        default:
            break;
    }

}

/*-------------------------------- U I -----------------------------------------*/

//render interface, divs, buttons(numbers,operators, misc), populate afterwards
function renderCalc() {

    //container and container row and column
    let containerfluid = document.createElement("div");
    containerfluid.id = "";
    containerfluid.className = "container-fluid bg-light";

    let containerRow = document.createElement("div");
    containerRow.id = "";
    containerRow.className = "row justify-content-center";

    let containerCol = document.createElement("div");
    containerCol.id = "";
    containerCol.className = "col";

    //create 2 calculator rows for display, numpad, operators, misc populators
    for (let i = 0; i < 2; i++) {
        let calcRow = document.createElement("div");
        calcRow.id = "calcRow" + i;
        calcRow.className = "row justify-content-center";

        //display container
        if (i < 1) {
            let containerDisplay = document.createElement("div");
            containerDisplay.id = "";
            containerDisplay.className = "container";

            // make display rows
            for (let j = 0; j < 2; j++) {
                let display = document.createElement("div");
                display.id = "display" + j;
                display.className = "row";
                display.innerHTML = "test";

                //append to parent
                containerDisplay.appendChild(display)
            }
            //append to parent
            calcRow.appendChild(containerDisplay)

            // Btn big container
        } else if (i < 2) {
            let containerBtns = document.createElement("div")
            containerBtns.id = "";
            containerBtns.className = "container";

            //create nums container
            let containerNums = document.createElement("div")
            containerNums.id = "";
            containerNums.className = "row justify-content-center"

            // create nums btns
            for (var j = 7; 0 < j; j -= 3) {
                for (let k = 0; k < 3; k++) {
                    let num = document.createElement("div")
                    num.id = (j + k) + "num";
                    num.className = "col-4 border btn-primary";
                    num.innerHTML = j + k;
                    num.addEventListener("click", checkbtn)

                    // append to parent
                    containerNums.appendChild(num)
                }

            }

            // add last btn for 0
            let num = document.createElement("div")
            num.id = "0num";
            num.className = "col-12 border btn-primary";
            num.innerHTML = '0'
            num.addEventListener("click", checkbtn)


            // append to parent
            containerNums.appendChild(num)

            // append to parent 
            containerBtns.appendChild(containerNums)

            //create operators/misc container
            let containerOpMisc = document.createElement("div")
            containerOpMisc.id = "";
            containerOpMisc.className = "row justify-content-center ";

            // create OpMisc btns
            let idlist = ['c', '(-)', '*', '/', '+', '-', '.', '=']
            for (var j = 0; j < 8; j++) {
                let OpMisc = document.createElement("div")
                OpMisc.id = idlist[j]
                OpMisc.className = "col-6 border btn-primary";
                OpMisc.innerHTML = idlist[j]
                OpMisc.addEventListener("click", checkbtn)

                // append to parent
                containerOpMisc.appendChild(OpMisc)
            }

            // append to parent
            containerBtns.appendChild(containerOpMisc)

            // append to parent
            calcRow.appendChild(containerBtns)
        }

        containerCol.appendChild(calcRow)
    }

    // append everything to divapp
    containerRow.appendChild(containerCol);
    containerfluid.appendChild(containerRow);
    divApp.appendChild(containerfluid);

}

/*-------------------------------- Full Functions ------------------------------------------------------------- */

function init() {
    renderCalc();
}