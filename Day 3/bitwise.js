//falafel sample
//options array.
var options =[
    'humus', //1
    'hamutzim', //2
    'salat', //4
    'chips' //8
];

//options object
var bitwiseOptions = {
    'humus': 1, //1
    //will be added via function
    //'hamutzim': 2, //10
    //'salat': 4, //100
    //'chips': 8 //1000
};

function buildOptions() {
    for (var i=1;i<options.length;i++) {
        bitwiseOptions[options[i]] = bitwiseOptions[options[i-1]] << 1;
    }
}

//fill the bitwiseOptions object with options
buildOptions();

function printOptions(){
    console.log('Menu:');
    for (var i=0;i<options.length;i++) {
        console.log(options[i] + ' ' + bitwiseOptions[options[i]]);
    }
    console.log('\n');
}

console.log('the complete obejct: ' , bitwiseOptions);

printOptions();

var pita = 0; //holder of the options. currently with nothing in it

function is(container, option){
    tosefet = bitwiseOptions[option];
    console.log('pita has ' + option + ' ?');
    console.log('checking between ' + tosefet +' and ' + container);
    if (container & tosefet){
        console.log('YES');
        return true;
    }
    else {
        console.log('no');
        return false;
    }
}

function set(container, option){
    container+= bitwiseOptions[option];
    console.log('added ' + option);
    console.log('the pita now = ' , container);
    return container;
}

function setOff(container, option){
    container-= bitwiseOptions[option];
    console.log('removed ' + option);
    console.log('the pita now = ' , container);
    return container;
}

is(pita,options[0]);
pita = set(pita,options[0]);
is(pita,options[0]);

pita = set(pita,options[1]);
is(pita,options[1]);

pita = set(pita,options[2]);
is(pita,options[3]);

pita = set(pita,options[3]);
is(pita,options[3]);
//setOff
pita = setOff(pita,options[3]);
is(pita,options[3]);

console.log('\nLets review!\n')
is(pita,options[0]);
is(pita,options[1]);
is(pita,options[2]);
is(pita,options[3]);
