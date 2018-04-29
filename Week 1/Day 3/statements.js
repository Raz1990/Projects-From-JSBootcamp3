var age = 18;

age >= 18 ? goOn() : stopRightThere();

function goOn() {
    console.log('k, you may go');
}

function stopRightThere() {
    console.log('STOP!');
}

age = 17;

age >= 18 ? goOn() : stopRightThere();