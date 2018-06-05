const data = {
    users: [
        {id: 3, username: 'rrrt', nickname: 'fff'},
        {id: 4, username: 'rrrt', nickname: 'fff'},
        {id: 5, username: 'rrrt'},
        {id: 6, username: 'rrrt'},
    ],
    groups: [
        {
            id: 3, name: 'werwre', messages: [
                {id: 22, body: 'sdffff'},
                {id: 242, body: 'trtrtrt'}]
        },
        {
            id: 33, name: 'werwre', messages: [
                {id: 2442, body: 'FOUND ME'},
                {id: 242, body: 'trtrtrt'}]
        },
        {
            id: 34, name: 'werwre', messages: [
                {id: 242, body: 'sdffff'},
                {id: 2432, body: 'trtrtrt'}]
        }
    ]
};

 let groups= data.groups;
//let {groups, users:[,,user], } = data;

//USING 2 ROWS, LIKE THE SCRUB YOU ARE
//let {groups:[,secondGroup]} = data;
//let {messages:[message]} = secondGroup;
//console.log(secondGroup);
//console.log(message);

//1 row, like a baus
let {groups: [,{messages:[message]}]} = data;
//console.log(message);

// default
let {users:[{nickname:n1='no nickname'},{nickname:n2='no nickname'},{nickname:n3='no nickname'}]} = data;

// console.log(n1);
// console.log(n2);
// console.log(n3);
for (let {nickname:n='NO NICKNAME'} of data.users) {
    console.log(n);
}

//arrays
//let [a,b,c, ...other] = 'a,b,c,ddd,eee,fff'.split(',');
// console.log(a,b,c);
// console.log(other);
// console.log(...other);

let a=1,b=2;
console.log(a,b);

([a,b] = [b,a]);
console.log(a,b);

//just my thing, ignore...
a = a + b;
b = a - b;
a = a - b;
console.log(a,b);