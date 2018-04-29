const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var menu = 'Welcome to ChatRoullete 2.0! Here are your options:\n1) Add new user\n2) Add new group\n3) Add a user to a group';
var option;

function main() {
    console.log(menu);

    rl.question('Choose your destiny...: ', dealWithInput);
}

function dealWithInput (answer){
    option = parseInt(answer);
    switch (option){
        case 1:
            addNewUser();
            break;
        case 2:
            addNewGroup();
            break;
        case 3:
            addUserToGroup();
            break;
        case 4:
            console.log('ok... byeeee');
            break;
        default:
            console.log('ah? normal numbers, please');
            break;
    }
    if (option!=4) {
        //main();
    }
    else {
        rl.close();
        sayBye();
    }
}

function addNewUser() {
    console.log('Very well, let\'s add a new user!');
    rl.question('Choose your destiny...: ', dealWithInputUSER);
}

function dealWithInputUSER(answer) {
    console.log(answer);
}

function addNewGroup() {
    console.log('f2 is now');
}

function addUserToGroup() {
    console.log('f3 is now');
}

function sayBye(){
    console.log('done');
}

main();

