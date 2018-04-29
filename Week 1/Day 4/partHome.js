const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//object of User.
//has the following: user_name, password, age
var User = {};

//will hold user names to check for uniqueness
var user_Names = {};

//array of users, will be filled with User objects
var Users = [];


//sanity check
Users[0] = {
    'user_name' : 'Raz',
    'password' : 'rrr',
    'age': 27
};
Users[1] = {
    'user_name' : 'Boaz',
    'password' : 'bbb',
    'age': 40
};

user_Names = {'Raz': true, 'Boaz': true};


//object of Group.
//has the following: group_name, list_of_users
var Group = {
    'list_of_users' : []
};

//will hold group names to check for uniqueness
var group_Names = {};

//array of groups, will be filled with Group objects
var Groups = [];

/*
//sanity check
Groups[0] = {
    'list_of_users' : [Users[0]],
    'group_name' : 'AAA',
};
Groups[1] = {
    'list_of_users' : [Users[1]],
    'group_name' : 'BBB',
};

group_Names = {'AAA': true,'BBB':true};
*/

//helper variables
var chosenGroup, chosenUser;

var menuStart = 'Welcome to ChatRoullete 2.0! Here are your options:\n1) Users options\n2) Groups options\n3) Groups and their Users\n4) Exit';
var menuUsers = '\n1) Add new User\n2) Delete User\n3) Show Users\n4) Return to main menu';
var menuGroups = '\n1) Add new Group\n2) Delete Group\n3) Show Groups\n4) Return to main menu';
var menuAsso = '\n1) Add user to a group\n2) remove a user from a group\n3) Show groups and their users\n4) Return to main menu';
var option;

//MAIN MENU AREA

function mainMenu() {
    console.log(menuStart);

    rl.question('Choose your destiny...: ', dealWithOption);
}

function dealWithOption(answer) {
    try {
        option = parseInt(answer);
    }
    catch (e){
        console.error('Woah! Numbers only, man!');
        rl.question('Now get it right, please! ', dealWithOption);
        return;
    }
    switch (option) {
    case 1:
        showUserMenu();
        break;
    case 2:
        showGroupMenu();
        break;
    case 3:
        showUserToGroupMenu();
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
    if (option === 3) {
        return;
    }
}

//END MAIN MENU

//USERS AREA

function showUserMenu() {
    rl.question('\nIn the Users menu. Now what? ', dealWithUserInput);
    console.log(menuUsers);
}

function dealWithUserInput (answer){
    try {
        option = parseInt(answer);
    }
    catch (e){
        console.error('Woah! Numbers only, man!');
        rl.question('Now get it right, please! ', dealWithUserInput);
        return;
    }

    switch (option){
        case 1:
            dealWithUserActionUSER('ADD');
            break;
        case 2:
            dealWithUserActionUSER('REMOVE');
            break;
        case 3:
            showUsers();
            break;
        case 4:
            console.log('Ok, going back to main menu now\n');
            mainMenu();
            break;
        default:
            console.log('ah? normal numbers, please');
            rl.question('Now get in range, please! ', dealWithUserInput);
            break;
    }
}

//OPTION 1 OF USER MENU - ADDING A NEW USER

function dealWithUserActionUSER(action) {
    if (action === 'ADD') {
        console.log('\nVery well, lets add a new user!');
        rl.question('\nEnter user name (must be unique!): ', dealWithInputUSERNAME);
    }
    if (action === 'REMOVE') {
        rl.question('K. Whats the user name? ', dealWithUserDELETE);
    }
}

function dealWithInputUSERNAME(answer) {
    if (user_Names[answer]) {
        console.error('It appears this user name is already taken! Please choose another!');
        rl.question('Enter new user name (must be unique!): ', dealWithInputUSERNAME);
    }
    else {
        User['user_name'] = answer;
        user_Names[answer] = true;
        rl.question('\nEnter user password: ', dealWithInputUSERPASSWORD);
    }
}

function dealWithInputUSERPASSWORD(answer) {
    User['password'] = answer;
    rl.question('\nEnter user age: ', dealWithInputUSERAGE);
}

function dealWithInputUSERAGE(answer) {
    try {
        if (isNaN(answer)) {
            throw 'NUMBERS PLEASE';
        }
        if (answer < 1){
            throw 'now this isnt right... age is invalid!';
        }
        User['age'] = parseInt(answer);
    }
    catch (err) {
        rl.question('Now get it right, please! ', dealWithInputUSERAGE);
        console.error(err);
        return;
    }

    console.log('New ' , User , ' Added successfully\n');
    Users.push(Object.assign({},User));

    mainMenu();
}

//OPTION 2 OF USER MENU - DELETE A USER

function dealWithUserDELETE(answer) {
    //if there are no users...
    if (Users.length === 0){
        console.info('\nThere appears to be no users here... Nothing to delete!\n');
        return;
    }
    //if the user name is not in use, it must mean it's not in the db
    if (!user_Names[answer]) {
        rl.question('Try again? y/n ', askGoBackUSER);
        console.error('Sorry, no such user found!');
        return;
    }
    //erase the user name from the db to free its use for others.
    user_Names[answer] = false;
    //find the user in the array using the user_name provided
    var userToDelete = Users.find(o => o.user_name === answer);
    //get the index of the user in the array
    var index = Users.indexOf(userToDelete);
    //remove the user in the correct index
    Users.splice(index, 1);
    console.log('Sad to see you go,' , userToDelete.user_name, '!');
    console.log('Going back to the main menu now...\n');
    mainMenu();
}

function askGoBackUSER(answer) {
    if (answer.toLowerCase() === 'y') {
        rl.question('Lets try again. Please input a user name ', dealWithUserDELETE);
    }
    else {
        console.log('Ok, lets go back to the main menu\n');
        mainMenu();
    }
}

//OPTION 3 OF USER MENU - SHOW USERS

function printUsers(){
    if (Users.length === 0){
        console.info('\nThere appears to be no users here... lonely much?\n');
    }
    else {
        Users.forEach(function (user) {
            console.log(user);
        });
    }
}

function showUsers() {
    printUsers();
    mainMenu();
}

//END USERS

//GROUPS AREA

function showGroupMenu() {
    rl.question('\nIn the Groups menu. Now what? ', dealWithGroupInput);
    console.log(menuGroups);
}

function dealWithGroupInput (answer){
    try {
        option = parseInt(answer);
    }
    catch (e){
        console.error('Woah! Numbers only, man!');
        rl.question('Now get it right, please! ', dealWithGroupInput);
        return;
    }

    switch (option){
        case 1:
            dealWithUserActionGROUP('ADD');
            break;
        case 2:
            dealWithUserActionGROUP('REMOVE');
            break;
        case 3:
            showGroups();
            break;
        case 4:
            console.log('Ok, going back to main menu now\n');
            mainMenu();
            break;
        default:
            console.log('ah? numbers in range, please');
            rl.question('Now get in range, please! ', dealWithUserInput);
            break;
    }
}

function dealWithUserActionGROUP(action) {
    if (action === 'ADD') {
        console.log('\nVery well, lets add a new group!');
        rl.question('\nEnter group name (must be unique!): ', dealWithInputGROUPNAME);
    }
    if (action === 'REMOVE') {
        rl.question('K. Whats the group name? ', dealWithGroupDELETE);
    }
}

//OPTION 1 OF GROUP MENU - ADDING A NEW GROUP

//answer = group name
function dealWithInputGROUPNAME(answer) {
    if (group_Names[answer]) {
        console.error('It appears this group name is already taken! Please choose another!');
        rl.question('Enter new group name (must be unique!): ', dealWithInputGROUPNAME);
    }
    //BUG?
    else {
        Group['group_name'] = answer;
        group_Names[answer] = true;

        console.log('New group named' , answer , 'Added successfully\n');
        Groups.push(Object.assign({},Group));

        mainMenu();
    }
}

//OPTION 2 OF GROUP MENU - DELETE A GROUP

function dealWithGroupDELETE(answer) {
    //if there are no groups...
    if (Groups.length === 0){
        console.info('\nThere appears to be no such group... Nothing to delete!\n');
        return;
    }
    //if the group name is not in use, it must mean it's not in the db
    if (!group_Names[answer]) {
        rl.question('Try again? y/n ', askGoBackGROUP);
        console.error('Sorry, no such group found!');
        return;
    }
    //erase the group name from the db to free its use for others.
    group_Names[answer] = false;
    //find the group in the array using the group_name provided
    var groupToDelete = Groups.find(o => o.group_name === answer);
    //get the index of the group in the array
    var index = Groups.indexOf(groupToDelete);
    //remove the group in the correct index
    Groups.splice(index, 1);
    console.log(groupToDelete.group_name, 'deleted!');
    console.log('Going back to the main menu now...\n');
    mainMenu();
}

function askGoBackGROUP(answer) {
    if (answer.toLowerCase() === 'y') {
        rl.question('Lets try again. Please input a group name ', dealWithGroupDELETE);
    }
    else {
        console.log('Ok, lets go back to the main menu\n');
        mainMenu();
    }
}

//OPTION 3 OF GROUPS MENU - SHOW GROUPS

function printGroups(withUsers){
    if (Groups.length === 0){
        console.info('\nThere appears to be no groups...\n');
    }
    else {
        Groups.forEach(function (group) {
            console.log('group name :', group.group_name);
            if (withUsers) {
                if (group.list_of_users.length===0) {
                    console.log('which has no members in it yet. Try adding some!');
                }
                else {
                    console.log(group.group_name, 'has the following users in it:');
                    group.list_of_users.forEach(function (user) {
                        console.log(user.user_name, 'aging', user.age);
                    });
                }
            }//if
        });//forEach Groups
    } //else
}

function showGroups() {
    //print without details about users
    printGroups(false);
    mainMenu();
}


function addUserToGroup() {
    console.log('f3 is now');
}

//END GROUP

//GROUPS AND USERS TOGETHER

function showUserToGroupMenu(){
    rl.question('\nIn the Association menu. Now what? ', dealWithAssoInput);
    console.log(menuAsso);
}

function dealWithAssoInput (answer){
    try {
        option = parseInt(answer);
    }
    catch (e){
        console.error('Woah! Numbers only, man!');
        rl.question('Now get it right, please! ', dealWithAssoInput);
        return;
    }

    switch (option){
        case 1:
            dealWithUserActionASSO('ADD');
            break;
        case 2:
            dealWithUserActionASSO('REMOVE');
            break;
        case 3:
            showGroupsAndUsers();
            break;
        case 4:
            console.log('Ok, going back to main menu now\n');
            mainMenu();
            break;
        default:
            console.log('ah? normal numbers, please');
            rl.question('Now get in range, please! ', dealWithAssoInput);
            break;
    }
}

//ADD/REMOVE USER TO/FROM A GROUP

function dealWithUserActionASSO(action) {
    if (Groups.length===0) {
        console.error('There are no groups to do actions with....\n');
        mainMenu();
        return;
    }
    if (action === 'ADD') {
        console.log('\nVery well, lets add a user to a group!');
        rl.question('\nEnter the group name first: ', dealWithASSOaddGROUPNAME);
    }
    if (action === 'REMOVE') {
        console.log('\nVery well, lets remove a user from a group!');
        rl.question('\nEnter the group name first: ', dealWithASSOdeleteGROUPNAME);
    }
}

//ADD USER TO GROUP

//answer = group name
function dealWithASSOaddGROUPNAME(answer) {
    //if group does not exist
    if (!group_Names[answer]) {
        console.error('It appears this group does not exist! Please enter another!');
        rl.question('Enter correct group name: ', dealWithASSOaddGROUPNAME);
    }
    else {
        chosenGroup = Groups.find(o => o.group_name === answer);
        rl.question('Ok, enter the user name you want to add to '+ answer +': ', checkUserInGroupTOADD);
    }
}

//answer = user name
function checkUserInGroupTOADD(answer) {
    //if the user name is not in use, it must mean it's not in the db
    if (!user_Names[answer]) {
        rl.question('No user found. Try again', checkUserInGroupTOADD);
        return;
    }
    //if the user is already in the group
    if (chosenGroup.list_of_users.find(o => o.user_name === answer)){
        rl.question('Try again!', checkUserInGroupTOADD);
        console.log('\nThis user is already in the group! What kind of sick game youre playing here?!\n');
        return;
    }
    //otherwise, it's ok to add the user to the group
    else{
        chosenUser = Users.find(o => o.user_name === answer);
        chosenGroup.list_of_users.push(chosenUser);
        //FIX BUG
        console.log(Groups[0].group_name);
        console.log(Groups[0].list_of_users);
        console.log(Groups[1].group_name);
        console.log(Groups[1].list_of_users);
        console.log(chosenUser.user_name, 'was added to', chosenGroup.group_name + '\n');
        mainMenu();
    }
}

//answer = group name
function dealWithASSOdeleteGROUPNAME(answer) {
    //if group does not exist
    if (!group_Names[answer]) {
        console.error('It appears this group does not exist! Please enter another!');
        rl.question('Enter correct group name: ', dealWithASSOdeleteGROUPNAME);
    }
    else {
        chosenGroup = Groups.find(o => o.group_name === answer);
        rl.question('Ok, enter the user name you want remove from '+ answer +':', checkUserInGroupTOREMOVE);
    }
}

//answer = user name
function checkUserInGroupTOREMOVE(answer) {
    //if the user name is not in use, it must mean it's not in the db
    if (!user_Names[answer]) {
        rl.question('No user found. Try again', checkUserInGroupTOREMOVE);
        return;
    }
    //if the user is in the group
    if (chosenGroup.list_of_users.find(o => o.user_name === answer)){
        console.log('Okay, we will remove ' + answer + ' from ' + chosenGroup.group_name);

        //get the index of the user in the group
        var index = chosenGroup.list_of_users.indexOf(chosenUser);
        //remove the user in the correct index from the group
        chosenGroup.list_of_users.splice(index, 1);
        console.log('Going back to the main menu now...\n');
        mainMenu();
    }
    //otherwise, user is not in the group, and cannot be removed
    else{
        console.log(chosenUser.user_name, 'is not in ', chosenGroup.group_name,'!');
    }
}

//OPTION 3 OF ASSOCIATION MENU - PRINT GROUPS AND THEIR USERS

function showGroupsAndUsers() {
    //print with details about users
    printGroups(true);
    mainMenu();
}

//here it where it all starts...
mainMenu();