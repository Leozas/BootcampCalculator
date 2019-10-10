//structure = var, then defined func, then overall func


/*
container
    row 
        col - calculator column 
            row - output display
                row form/textbox
            row - input display
                row form/textbox
            row -
                container - nums
                    row - 7 8 9 
                        col 7
                        col 8
                        col 9
                    row - 4 5 6
                        col 4
                        col 5
                        col 6 
                    row - 1 2 3
                        col 1
                        col 2
                        col 3
                    row 0
                        col 0
                container misc1
                    row c +/-
                        col c
                        col +/- - onclick/btn row 2 - 4, 5, 6, *. /
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

function checkbtn() {

}

function num() {

}

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
                containerDisplay.id = "display" + j;
                containerDisplay.className = "row";

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
            containerNums.className = "container";

            // create nums btns
            for (var j = 7; 0 < j; j -= 3) {
                for (let k = 0; k < 3; k++) {
                    let num = document.createElement("div")
                    num.id =  (j + k) + "num";
                    num.className = "col-3 border btn-primary";
                    num.innerHTML = j+k;
                    num.addEventListener("click", checkbtn)

                    // append to parent
                    containerNums.appendChild(num)
                }

            }

            // add last btn for 0
            let num = document.createElement("div")
            num.id = "0num";
            num.className = "col border btn-primary";
            num.innerHTML = '0'
            num.addEventListener("click", checkbtn)


            // append to parent
            containerNums.appendChild(num)

            // append to parent 
            containerBtns.appendChild(containerNums)

            //create operators/misc container
            let containerOpMisc = document.createElement("div")
            containerOpMisc.id = "";
            containerOpMisc.className = "container";

            // create OpMisc btns
            let idlist = ['c', '(-)', '*', '/', '+', '-', '.', '=']
            for (var j = 0; j < 8; j++) {
                let OpMisc = document.createElement("div")
                OpMisc.id = idlist[j]
                OpMisc.className = "col-2 border btn-primary";
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

    //test display rows
    let outputDisplay = document.getElementById("display0");
    outputDisplay.innerHTML = "test";

    let inputDisplay = document.getElementById("display1");
    inputDisplay.innerHTML = "test";
}


// create all number input buttons 
function createNumBtns() {

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