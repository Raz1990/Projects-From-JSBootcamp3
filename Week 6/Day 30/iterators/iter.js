//if we want it one by one, like scrubs
/*getIterator = (arr) => {
    let num = 0;
    return {
        next: () => {
            return {
                value : arr[num++],
                done: num > arr.length
            };
        }
    };
};*/

function* getIterator (data, index=0) {
    while(index < data.length) {
        yield data[index++];
    }
}

/*
let it = getIterator(['hey','ho','lets go']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().done);
*/

let it = getIterator(['hey','ho','lets go']);

for (let msg of it){
    console.log(msg);
}
