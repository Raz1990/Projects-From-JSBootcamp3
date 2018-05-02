function BTree(){
    var tree = {
        root: null,
        add,
        search,
        count: 0,
    };

    return tree;

    function add(value) {
        //if its the beginning of the tree, create a node and add it to the root
        if (!tree.root) {
            var newNode = createNode(null,value);
            tree.root = newNode;
        }
        //there is a root already
        else {
            internalAdd(tree.root, value);
        }
    }


    function internalAdd(parent, val) {
        //if the value is smaller, it should be put on the left side
        if (val <= parent.val){
            if (parent.left) {
                internalAdd(parent.left, val);
            }
            else {
                parent.left = createNode(parent, val);
            }
        }
        //if the value is bigger, it should be put on the right side
        else if (val > parent.val){
            if (parent.right) {
                internalAdd(parent.right, val);
            }
            else {
                parent.right = createNode(parent, val);
            }
        }
    }

    function createNode(parent,val) {
        var node = {
            val: val,
            parent: parent,
            left: null,
            right: null,
        };

        tree.count++;

        return node;

        function value() {
            return node.val;
        }

        function next() {
            if (val < parent.val){
                next(tree.root.left, val);
            }
            //travel right
            else if (val > parent.val){
                next(tree.root.right, val);
            }
            //we found it!
            else if (val === parent.val){
                return parent;
            }
        }
    }

    //returns a node containing that val
    function search(val) {
        //if the tree is empty
        if (!tree.root){
            console.log('tree is empty!');
            return;
        }
        else {
            //if it's the very first node
            if (tree.root.val === val){
                return tree.root;
            }
            //otherwise, follow the tree according to the value
            else {
                return internalSearch(tree.root, val);
            }
        }
    }

    function internalSearch(parent, val) {
        //travel left
        if (val < parent.val){
            internalSearch(tree.root.left, val);
        }
        //travel right
        else if (val > parent.val){
            internalSearch(tree.root.right, val);
        }
        //we found it!
        else if (val === parent.val){
            return parent;
        }
        console.log('no such value found in tree');
        return null;
    }

    /*
    function add(val){
        if(!tree.root){
            tree.root = createNode(null, val);
            return;
        }

        internalAdd(tree.root, val);
    }

    function internalAdd(parent, val){
        if(val > parent.val){
            if(parent.right){
                internalAdd(parent.right, val);
            }
            else {
                parent.right = createNode(parent, val);
            }
        }
        else {
            if(parent.left){
                internalAdd(parent.left, val);
            }
            else {
                parent.left = createNode(parent, val);
            }
        }
    }

    function search(val){
        return internalSearch(tree.root, val);
    }

    function internalSearch(node, val) {
        if(node.val == val){
            return createIterator(node);
        }

        if(val > node.val){
            return internalSearch(node.right, val);
        }
        else {
            return internalSearch(node.left, val);
        }
    }

    function createNode(parent, val){
        var node = {
            parent,
            val,
            left: null,
            right: null,
        };

        ++tree.count;

        return node;
    }

    function createIterator(node) {
        var itr = {
            node,
            value,
            next,
        }

        return itr;

        function value(){
            return itr.node.val;
        }

        function next(){
            var node = itr.node;
            if(!node){
                return false;
            }

            var next = node.right ? getSmaller(node.right) : null;
            if(!next){
                next = getFirstBiggerParent(node.parent, node.val);
            }

            itr.node = next;
            return !!itr.node;
        }
    }

    function getSmaller(node){
        if(!node.left){
            return node;
        }

        return getSmaller(node.left);
    }

    function getFirstBiggerParent(node, val){
        if(node.val > val){
            return node;
        }

        if(!node.parent){
            return null;
        }

        return getFirstBiggerParent(node.parent, val);
    }

    */
}

exports.BTree = BTree;
