function Node(data, prev) {
    this.data = data,
    this.previous = prev
}

let current = null;

function push(value) {
    current = new Node(value,current);
}

function pop(){
    var value = current ? current.data : 'empty';
    current = current ? current.previous : null;
    return value;
}

push(1);
push(2);
push(3);

console.log(pop());
console.log(pop());
console.log(pop());
console.log(pop());
