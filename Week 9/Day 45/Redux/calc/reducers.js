const handlers = {
    "INC" : inc,
    "RESET": reset
};

function rootReducer(state, action) {
    const handler = handlers[action.type];
    if (handler) {
        return handler(state,action);
    }

    return state;
}

function inc(state, action) {

    const result = action.num1 + action.num2;

    return {
        ... state,
        result
    }
}

function reset(state) {
    return {
        ... state,
        result: 0
    }
}

module.exports = {
    rootReducer
};