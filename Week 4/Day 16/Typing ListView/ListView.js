var ListView = /** @class */ (function () {
    function ListView(element) {
        this.element = element;
    }
    ListView.prototype.add = function (str) {
        var htmlStr = "<li>" + str + "</li>";
        this.element.innerHTML = htmlStr;
    };
    return ListView;
}());
//# sourceMappingURL=ListView.js.map