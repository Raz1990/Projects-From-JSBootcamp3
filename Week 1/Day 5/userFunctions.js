//object of User.
//has the following: user_name, password, age
var User = {};

//will hold user names to check for uniqueness
var user_Names = {};

//array of users, will be filled with User objects
var Users = [];

//helper variables
const menuUsers = '\n1) Add new User\n2) Delete User\n3) Update User\n4) Show Users\n5) Return to main menu\n6) Exit';

//imports
const helpers = require('./helpers');
const indexFuncs = require('./index');
const groupFuncs = require('./groupFunctions');
const assoFuncs = require('./assoFunctions');

/*
//sanity check
User.user_name = 'Raz';
User.age = 27;
User.password = 'rrr';
Users[0] = Object.assign({},User);

User.user_name = 'Boaz';
User.age = 40;
User.password = 'bbb';
Users[1] = Object.assign({},User);

user_Names = {'Raz': true, 'Boaz': true};
*/

//USERS AREA

function showUserMenu() {
    indexFuncs.rl.question('\nIn the Users menu. Now what? ', dealWithUserInput);
    console.log(menuUsers);
}

function dealWithUserInput (answer){
    try {
        helpers.option = parseInt(answer);
    }
    catch (e){
        console.error('Woah! Numbers only, man!');
        indexFuncs.rl.question('Now get it right, please! ', dealWithUserInput);
        return;
    }

    switch (helpers.option){
        case 1:
            dealWithUserActionUSER('ADD');
            break;
        case 2:
            dealWithUserActionUSER('REMOVE');
            break;
        case 3:
            updateUser();
            break;
        case 4:
            showUsers();
            break;
        case 5:
            console.log('Ok, going back to main menu now\n');
            indexFuncs.mainMenu();
            break;
        case 6:
            //return to the main menu and input the exit option
            indexFuncs.dealWithOption(4);
            break;
        default:
            console.log('ah? normal numbers, please');
            indexFuncs.rl.question('Now get in range, please! ', dealWithUserInput);
            break;
    }
}

//OPTION 1 OF USER MENU - ADDING A NEW USER

function dealWithUserActionUSER(action) {
    if (action === 'ADD') {
        console.log('\nVery well, lets add a new user!');
        indexFuncs.rl.question('\nEnter user name (must be unique!): ', dealWithInputUSERNAME);
    }
    if (action === 'REMOVE') {
        indexFuncs.rl.question('K. Whats the user name? ', dealWithUserDELETE);
    }
}

function dealWithInputUSERNAME(answer) {
    if (user_Names[answer]) {
        console.error('It appears this user name is already taken! Please choose another!');
        indexFuncs.rl.question('Enter new user name (must be unique!): ', dealWithInputUSERNAME);
    }
    else {
        User.user_name = answer;
        user_Names[answer] = true;
        indexFuncs.rl.question('\nEnter user password: ', dealWithInputUSERPASSWORD);
    }
}

function dealWithInputUSERPASSWORD(answer) {
    User.password = answer;
    indexFuncs.rl.question('\nEnter user age: ', dealWithInputUSERAGE);
}

function dealWithInputUSERAGE(answer) {
    try {
        if (isNaN(answer)) {
            throw 'NUMBERS PLEASE';
        }
        if (answer < 1){
            throw 'now this isnt right... age is invalid!';
        }
        User.age = parseInt(answer);
    }
    catch (err) {
        indexFuncs.rl.question('Now get it right, please! ', dealWithInputUSERAGE);
        console.error(err);
        return;
    }

    console.log('New ' , User , ' Added successfully\n');
    Users.push(Object.assign({},User));

    indexFuncs.mainMenu();
}

//OPTION 2 OF USER MENU - DELETE A USER

//answer = user name
function dealWithUserDELETE(answer) {
    //if there are no users...
    if (Users.length === 0){
        console.info('\nThere appears to be no users here... Nothing to delete!\n');
        return;
    }
    //if the user name is not in use, it must mean it's not in the db
    if (!user_Names[answer]) {
        console.error('Sorry, no such user found!');
        indexFuncs.mainMenu();
        return;
    }
    //find the user in the array using the user_name provided
    var userToDelete = Users.find(o => o.user_name === answer);

    //first, check if the user is in a group(s)
    //if any are found, they will be removed
    groupFuncs.checkUserInGroup(userToDelete);

    //erase the user name from the db to free its use for others.
    user_Names[answer] = false;

    //get the index of the user in the array
    var index = Users.indexOf(userToDelete);
    //remove the user in the correct index
    Users.splice(index, 1);

    console.log('Sad to see you go,' , userToDelete.user_name, '!');
    console.log('Going back to the main menu now...\n');
    indexFuncs.mainMenu();
}

//OPTION 3 OF USER MENU - SHOW USERS

function printUsers(){
    if (Users.length === 0){
        console.info('\nThere appears to be no users here... lonely much?\n');
    }
    else {
        console.info('there are ' + Users.length + ' active users in the system');
        Users.forEach(function (user) {
            console.log(user);
        });
    }
}

function showUsers() {
    printUsers();
    indexFuncs.mainMenu();
}

//OPTIONS 4 OF USERS MENU - UPDATE USER

function updateUser(){
    indexFuncs.rl.question('\nEnter user name to update: ', dealWithUserUpdate);
}

//answer = user name
function dealWithUserUpdate(answer){
    //if there are no users...
    if (Users.length === 0){
        console.info('\nThere appears to be no users here... Nothing to update!\n');
        return;
    }
    //if the user name is not in use, it must mean it's not in the db
    if (!user_Names[answer]) {
        console.error('Sorry, no such user found!');
        indexFuncs.mainMenu();
        return;
    }
    //find the user in the array using the user_name provided
    helpers.chosenUser = Users.find(o => o.user_name === answer);
    indexFuncs.rl.question('\nOk, please enter new user name: ', updateUserName);
}

//answer = new user name
function updateUserName(answer){
    helpers.chosenUser.user_name = answer;
    indexFuncs.rl.question('\nOk, please enter the new age: ', updateUserAge);
}

//answer = user new age
function updateUserAge(answer){
    try {
        if (isNaN(answer)) {
            throw 'NUMBERS PLEASE';
        }
        if (answer < 1){
            throw 'now this isnt right... age is invalid!';
        }
        helpers.chosenUser.age = parseInt(answer);
    }
    catch (err) {
        indexFuncs.rl.question('Now get it right, please! ', updateUserAge);
        console.error(err);
        return;
    }

    console.log('Updated!\n');

    //get the index of the user in the array
    var index = Users.indexOf(helpers.chosenUser);

    //update the user in the correct index
    Users.splice(index, 1, helpers.chosenUser);

    indexFuncs.mainMenu();
}

//END USERS

//helper functions
function checkIfUserExists(userName){
    return user_Names[userName];
}

function getUser(userName){
    return Users.find(o => o.user_name === userName);
}

//exports
module.exports.showUserMenu = showUserMenu;
module.exports.checkIfUserExists = checkIfUserExists;
module.exports.getUser = getUser;

