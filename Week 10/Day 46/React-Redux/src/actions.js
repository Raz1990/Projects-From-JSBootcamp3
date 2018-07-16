function add(name) {
    console.log("IN ADD ", name);
    return {type: "ADD", name: name};
}

module.exports = {
    add
};
