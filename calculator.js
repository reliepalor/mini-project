const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        let expression = display.value.replace(/,/g, '');

        expression = expression.replace(/(\d+(\.\d+)?)%/g, '($1/100)');

        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}
