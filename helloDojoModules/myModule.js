define([    
    'dojo/dom' //The dojo/dom module is required by this module
], 
function(dom){
    var oldText = {};

    //Returning functions
    return {
        //Saving original text in a object and setting the new one
        setText: function (id, text) {
            var node = dom.byId(id);
            oldText[id] = node.innerHTML;
            node.innerHTML = text;
        },

        //Reading the old value from the object and restoring it
        restoreText: function (id) {
            var node = dom.byId(id);
            node.innerHTML = oldText[id];
            delete oldText[id];
        }
    };
});