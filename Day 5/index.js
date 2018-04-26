const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//helper variables
const menuStart = '\nWelcome to ChatRoullete 2.0! Here are your options:\n1) Users options\n2) Groups options\n3) Groups and their Users\n4) Exit';

//imports
const helpers = require('./helpers');
const userFuncs = require('./userFunctions');
const groupFuncs = require('./groupFunctions');
const assoFuncs = require('./assoFunctions');

//MAIN MENU AREA

function mainMenu() {
    console.log(menuStart);

    rl.question('Choose your destiny...: ', dealWithOption);
}

function dealWithOption(answer) {
    try {
        helpers.option = parseInt(answer);
    }
    catch (e){
        console.error('Woah! Numbers only, man!');
        rl.question('Now get it right, please! ', dealWithOption);
        return;
    }
    switch (helpers.option) {
        case 1:
            userFuncs.showUserMenu();
            break;
        case 2:
            groupFuncs.showGroupMenu();
            break;
        case 3:
            assoFuncs.showUserToGroupMenu();
            break;
        case 4:
            console.log('ok... byeeee');
            rl.close();
            break;
        default:
            console.log('ah? numbers in range, please');
            rl.question('Now get in range, please! ', dealWithOption);
            break;
    }
}

//END MAIN MENU

//here it where it all starts...
mainMenu();

//exports
module.exports.rl = rl;
module.exports.mainMenu = mainMenu;
module.exports.dealWithOption = dealWithOption;
