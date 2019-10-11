//structure = var, then defined func, then overall func


/*
container
    row 
        col - calculator column 
            row - output display
                row form/textbox
            row - input display
                row form/textbox
            row - onclick/btn row 1 - 7, 8 , 9, c +/- 
                col - 7
                col - 8 
                col - 9
                col - c
                col - +/-
            row - onclick/btn row 2 - 4, 5, 6, *. /
                col - 4
                col - 5
                col - 6
                col - *
                col - /
            row - onclick/btn row 3 - 1, 2, 3, +, -
                col - 1 
                col - 2
                col - 3
                col - +
                col - -
            row - onclick/btn row 4 0, ., =
                col - 0
                col - .
                col - =

                */

/*----------------------------- GLOBALS ------------------------- */
// divApp initialization
const divApp = document.getElementById('App')


/*---------------------------- L O G I C -----------------------------------------*/

function operator() {

}
// calculate inputs/expression to display 2 
function calculate() {

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
    containerCol.className = "";

    //create calculator rows to populate with buttons
    for (let i = 0; i < 7; i++) {
        let calcRow = document.createElement("div");
        calcRow.id = "calcRow"+i;
        calcRow.className = "row justify-content-center";

        console.log(i)
        // populate each row with respective elements (forms, btns)
        if (i < 2) {
            //make 2 rows of form, one enter, one no enter 
            for (let j = 0; j < 2; j++) {
                let formRow = document.createElement("div");
                formRow.id = i + "form" + j;
                formRow.className = "";
                //BOARD TESTING
                formRow.innerHTML = ""

                calcRow.appendChild(formRow);
            
            }

        } else if (1 < i && i < 6) {
            //make 5 col for each new row to make divs for btns
            for (let j = 0; j < 5; j++) {
                let btnCol = document.createElement('div');
                btnCol.id = i + "btn" + j;
                btnCol.className = "col border btn-primary";
                //BOARD TESTING
                btnCol.innerHTML = "test"

                calcRow.appendChild(btnCol);
                
            }

        } else if (i == 6) {
            //on last row only 3 divs, 
            for (let j = 0 ; j < 3; j++) {
                let btnCol = document.createElement('div');
                btnCol.id = i + "btn" + j;
                btnCol.className = "col border btn-primary  ";
                //BOARD TESTING
                btnCol.innerHTML = "test"

                calcRow.appendChild(btnCol);
            }
        }
        containerCol.appendChild(calcRow)

    }

    // append everything to divapp
    containerRow.appendChild(containerCol);
    containerfluid.appendChild(containerRow);
    divApp.appendChild(containerfluid);

    //test display rows
    let outputDisplay = document.getElementById("calcRow1");
    outputDisplay.innerHTML = "test";

    let inputDisplay = document.getElementById("calcRow2");
    inputDisplay.innerHTML = "test";
}

// create all number input buttons 
function createNumBtns() {
   
    //initialize all number divs
    let num1 = document.getElementById("");
    let num2 = document.getElementById("");
    let num3 = document.getElementById("");
    let num4 = document.getElementById("");
    let num5 = document.getElementById("");
    let num6 = document.getElementById("");
    let num7 = document.getElementById("3btn0");
    num7.setAttribute()
    let num8 = document.getElementById("4");
    let num9 = document.getElementById("");
    
    // add onlick event to all numbers
    let nums = "0123456789"
    let numarray = [num0, num1, num2, num3, num4, num5, num6, num7, num8, num9];
    for (let i = 0; i < 10; i++){
        let num0 = document.getElementById();
        .addEventListener('click',);
        numarray[0].innerHTML = "";
        .addEventListener('click', calc);       
    } 
}

// create all operator input buttons 
function createOpBtns() {

}

// create all misc input buttons
function createMiscBtns() {

}

function init() {
    renderCalc();
}