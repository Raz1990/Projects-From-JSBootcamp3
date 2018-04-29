function BTree() {

    var tree = {
        current: null,
        parent: null,
        left: null,
        right: null,
        add: add,
        search: search,
        value: value,
    };

    function add(value) {
        //if there is no parent, meaning its the first node
        tree.current = value;
        if (!tree.parent){
            tree.parent = tree;
            return;
        }
        //if there is a parent, check where to put it
        //go right
        if (tree.parent.current >= value){
            tree.right = tree;
        }
        if (tree.parent.current < value){
            tree.left = tree;
        }
    }

    function search(value) {
        return tree.nodes.contains(value);
    }

    function value() {

    }

    return tree;
}

exports.BTree = BTree;