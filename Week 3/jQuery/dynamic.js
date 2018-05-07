(function($){
    init();

    function init(){
        //createSuperDynamic();

        createSemiDynamic();

    }

    function createSemiDynamic() {
        var ul, template;
        try {
            ul = $(".contacts");
            if (!ul.length) {
                throw new Error("ul was not found");
            }
        }
        catch(err){
            console.log("ERROR", err);
        }

        template = ul.children('li');
        template.remove();

        var contacts = getAllContacts();

        for(var contact of contacts) {
            var newLi = template.clone();
            var span = newLi.find("span.name");
            var button = newLi.find("button").on('click', deleteLI);
            span.text(contact.name);
            ul.append(newLi);
        }
    }

    function createSuperDynamic() {
        var ul;
        try {
            ul = $(".contacts");
            if (!ul.length) {
                throw new Error("ul was not found");
            }
        }
        catch(err){
            console.log("ERROR", err);
        }

        var contacts = getAllContacts();

        for(var contact of contacts){
            var li = $("<li>");
            var button = $("<button>").text('delete ' + contact.name);

            /*
            button.on('click', function () {
                var singleLi = $(this).parent();
                singleLi.remove();
            });
            */

            button.on('click', deleteLI);

            li.text(contact.name).append(button);
            ul.append(li);
        }
    }

    function deleteLI() {
        var singleLi = $(this).parent();
        singleLi.remove();
    }

    function getAllContacts(){
        return [
            {id:1, name: "Ori"},
            {id:2, name: "Roni"},
            {id:3, name: "Udi"},
        ]
    }

})(jQuery);
