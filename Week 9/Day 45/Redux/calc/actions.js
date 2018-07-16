function inc(num1, num2) {
    return {
        type: "INC",
        num1,
        num2
    }
}

function reset() {
    return {
        type: "RESET"
    }
}

module.exports = {
    inc,
    reset
};