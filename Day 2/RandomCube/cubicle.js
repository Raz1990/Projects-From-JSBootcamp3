const readline = require('readline');

//the random number giver
function rollTheDice(min, max) {
    var randNumber = Math.floor(Math.random() * max) + min;
    return randNumber;
}

//the letter holder
function getLetter(num) {
    var letters = ['a','b','c','d','e','f',];
    return letters[num];
}

var result = rollTheDice(1,6);
//console.log(result);
//console.log(getLetter(result-1));

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function play(currentSum){

    currentSum = currentSum || 0;

    var drawnCard = rollTheDice(1,10);
    currentSum += drawnCard;

    console.log('Drawn card: ' + drawnCard);
    console.log('current sum of your cards: ' + currentSum);

    if (currentSum > 21) {
        console.log('BUST!');
        return currentSum;
    }

    rl.question('Draw another card? Y/N ', function (answer) {
        if (answer.toUpperCase() === 'Y') {
            console.log('HIT ME!');
            play(currentSum);
        }
        else {
            console.log('Im good...');
            return currentSum;
        }
    });

    rl.close();
}

console.log(play());






