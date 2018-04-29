function SortedList() {
    var arr = [];
    return arr;
}

function getCount(list) {
    return list.length;
}

function assert(message,actual,expected) {
    console.log(actual + ' = ' +expected + ' ?');
    if (actual!==expected){
        throw new Error(message);
    }
}

function search(list, value) {
    var leftCounter = 0, rightCounter = getCount(list);
    var middleIndex;
    var middleValue;
    do {
        middleIndex = getMiddle(leftCounter,rightCounter);
        if (middleIndex === getCount(list)-1 || middleIndex === 0) {
            break;
        }
        middleValue = list[middleIndex];
        //if the value we want to find is SMALLER THAN the middle
        //we will want to use the LEFT side, so we will change the right border
        if (value < middleValue){
            rightCounter = middleIndex;
        }
        //if the value we want to find is BIGGER THAN the middle
        //we will want to use the RIGHT side, so we will change the left border
        else if (value > middleValue) {
            leftCounter = middleIndex;
        }
        //else, we actually found it!
        else if (value === middleValue){
            //console.log(value + ' = ' +middleValue);
            return middleIndex;
        }
    } while (rightCounter > leftCounter);
    return -1;
}

function getMiddle(start, end) {
    var middleIndex = Math.floor ((start + end) / 2 );
    return middleIndex;
}

//will add a value to an array whilst keeping it sorted
function add(list, value) {
    list.push(value);
    list.sort(function (a,b) {return a-b});
}

function printList(list) {
    list.forEach(function (num) {
       console.log(num);
    });
}

function main() {
    try {
        //we will want to get a sorted list, so:
        var list = SortedList();
        var lenWanted = 100;

        //we will want to add items to the array
        //random numbers will be added, but add makes sure it will always be sorted.
        for (var i = 0; i < lenWanted; i++) {
            var value = Math.floor(Math.random() * 10000);
            //var value = i;
            //if the random value is a fresh new value not in the array
            if (list.indexOf(value) === -1) {
                add(list, value);
            }
            //otherwise, lower i by 1 and "repeat" the iteration.
            else{
                i--;
            }
        }

        //printList(list);

        //we will want to assert that there are X values in the array
        assert('not actual count', getCount(list), lenWanted);

        var valueToFind = 13;
        //we will want to search (BINARY-CLY!) for a value in the array
        var actualIndex = search(list, valueToFind);
        var expectedIndex = list.indexOf(valueToFind);

        assert('not actual index', actualIndex, expectedIndex);

        console.log('PASS!!!');
    }
    catch(err){
        console.log('FAIL : ' + err.message);
    }
}

main();



