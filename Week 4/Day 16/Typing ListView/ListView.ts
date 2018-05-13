class ListView {
    constructor(private element) {
    }

    add(str){
        let htmlStr = "<li>" + str + "</li>";
        this.element.innerHTML = htmlStr;
    }
}