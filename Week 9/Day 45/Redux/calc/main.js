const {store} = require("./store");
const {inc, reset} = require("./actions");

const firstNumInput = document.getElementById("one");
const secondNumInput = document.getElementById("two");

const BTNcalc = document.getElementById("BTNCalc");
const BTNreset = document.getElementById("BTNReset");

BTNcalc.addEventListener("click", myCalc);
BTNreset.addEventListener("click", myReset);

function myCalc(){
    const num1 = parseInt(firstNumInput.value);
    const num2 = parseInt(secondNumInput.value);
    store.dispatch(inc(num1,num2));
}

function myReset() {
    firstNumInput.value = 0;
    secondNumInput.value = 0;
    store.dispatch(reset());
}

