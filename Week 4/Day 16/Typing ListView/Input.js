var Input = /** @class */ (function () {
    function Input(element) {
        this.element = element;
    }
    Input.prototype.getValue = function () {
        return this.element.value;
    };
    Input.prototype.clear = function () {
        this.element.value = '';
    };
    return Input;
}());
//# sourceMappingURL=Input.js.map