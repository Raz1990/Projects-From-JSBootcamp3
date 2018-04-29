function nameMe(val) {
    return val || "Raz";
}

console.log("no val provided: " + nameMe());
console.log("val provided: " + nameMe("MyNewName"));