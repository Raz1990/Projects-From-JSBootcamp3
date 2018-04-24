//console.log('first, normal, easy log');

var num = 10000;
var name = 'Raz';

//console.log(name +' should get a minimum of ' + num + '$ per day!');

var Person = {num: 10000, name: 'Raz'};

//console.log(Person);
//console.log(Person.name +' should get a minimum of ' + Person.num + '$ per day!');

//Wrapper

function betterLogging(n1,n2,oper) {
    //if the two vars are numbers
    if (!isNaN(n1) && !isNaN(n2)){
        switch (oper) {
            case '+':
                console.log(n1+ '+' + n2 + '= %d', n1+n2);
                break;
            case '*':
                console.log(n1+ '*' + n2 + '= %d', n1*n2);
                break;
            case '-':
                console.log(n1+ '-' + n2 + '= %d', n1-n2);
                break;
            default:
                console.warn('I don\'t know what you want me to do... only +, * and - are allowed!');
        }
    }
    //if the two are strings
    else if (isNaN(n1) && isNaN(n2)){
        if(oper === '+')
        {
            console.log(n1+n2);
        }
        else
        {
            console.error('What you wanna do can\'t be done with strings!');
        }

    }
    else
    {
        console.error('2 different vars detected! Bad user!');
    }
}

betterLogging(5,5,'+');
betterLogging(5,5,'*');
betterLogging(5,5,'-');
betterLogging('abc','def','+');
betterLogging('abc','def','*');
betterLogging(5,5,'/');
betterLogging(5,'abc','+');