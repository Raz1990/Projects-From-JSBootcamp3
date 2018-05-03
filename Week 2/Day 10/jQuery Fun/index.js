var res;
var button;
var divCircles;
var iLeft, iMiddle, ialternate, iReapeat;
var hleft, hmiddle, halternate, hReapeat;
var maxCircles;
$(document).ready(function () {
    res = $('#stam');
    button = $('#color');
    //divCircles = $('#wrapper');
    maxCircles = $('#wrapperMiddle .circle').length;
    //i = maxCircles-1;
    //h = setInterval(startFun,1000);

    iLeft = ialternate = iReapeat =0;
    iMiddle = maxCircles -1;
    hleft = setInterval(moveRightCircle,1000);
    hmiddle = setInterval(startFun,1000);
    halternate = setInterval(moveAlternate,1000);
    hReapeat = setInterval(moveRepeat,1000);
});

function color() {
    if (res.hasClass('red')){
        blueify();
    }
    else {
        redify();
    }
}

function redify() {
    res.removeClass('blue');
    res.addClass('red');
    res.text('this is red');
    button.attr({value:'blueify'});
}

function blueify() {
    res.removeClass('red');
    res.addClass('blue');
    res.text('this is blue');
    button.attr({value:'redify'});
}

function startFun() {
    iMiddle--;
    $('#wrapperMiddle .circle:nth-child('+iMiddle+'n)').addClass('yellow');
    if (iMiddle===0){
        clearInterval(hmiddle);
    }
}

function moveRightCircle() {
    var circle = $($('#wrapperLeft .circle')[iLeft]);
    circle.addClass('red');
    iLeft++;
    if (iLeft===maxCircles){
        clearInterval(hleft);
    }
}

function moveAlternate() {
    var circle = $($('#wrapperAlter .circle')[ialternate]);
    circle.addClass('blue');
    var lastCircle = $($('#wrapperAlter .circle')[ialternate-1]);
    lastCircle.removeClass('blue');
    ialternate++;
    if (ialternate===maxCircles){
        lastCircle = $($('#wrapperAlter .circle')[ialternate-1]);
        setTimeout(function () {
            lastCircle.removeClass('blue');
        },1000);
        clearInterval(halternate);
    }
}

function moveRepeat() {
    var circle = $($('#wrapperRepeat .circle')[iReapeat]);
    circle.addClass('green');
    var lastCircle = $($('#wrapperRepeat .circle')[iReapeat-1]);
    lastCircle.removeClass('green');
    iReapeat++;
    if (iReapeat===maxCircles){
        lastCircle = $($('#wrapperRepeat .circle')[iReapeat-1]);
        setTimeout(function () {
            lastCircle.removeClass('green');
        },1000);
        iReapeat = 0;
    }
}