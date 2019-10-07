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
                co; - +/-
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

/* GLOBALS */
//
const divApp = document.getElementById('App')


/*
---------------------------- L O G I C -----------------------------------------
*/

function operator(){

}
// calculate inputs/expression to display 2 
function calculate(){

}






/*
-------------------------------- U I -----------------------------------------
*/

//render interface, divs, buttons(numbers,operators, misc), populate afterwards
function renderCalc(){
   
    //create calculator rows to populate with buttons
    for (let i = 0; i < 7; i++)
        let calcRows = document.createElement("div")
        calcRows.id = "outputDisplay"
        calcRows.
        
        // populate each row with respectively
        if (i < 2 ){

        }

}

// create all number input buttons 
function createNumBtns(){

}

// create all operator input buttons 
function createOpBtns(){

}

// create all misc input buttons
function createMiscBtns(){

}

function init(){
    renderCalc
}