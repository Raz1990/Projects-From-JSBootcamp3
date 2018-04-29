//imports
var {LinkList} = require('./LinkList');

function test() {
    try {
        var list = LinkList();

        const lenWanted = 5;

        for (var i = 0; i < lenWanted; i++) {
            list.addLast(i);
        }

        var actual = [];
        var expected = [0,1,2,3,4];

        var itr = list.iterator();
        while (itr.next()) {
            actual.push(itr.value());
        }

        assertArrayEqual(actual,expected);

        console.log('PASS');
    }
    catch (err) {
        console.log('FAIL: ' , err);
    }
}

function assertArrayEqual(actual,expected){
    if (actual.length !== expected.length){
        throw new Error('Bad. Unequal array length!');
    }

    for (var i=0; i<actual.length; i++){

    }
}

test()
