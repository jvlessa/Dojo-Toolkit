define([
    // The dojo/dom module is required by this module, so it goes in this list of dependencies.
    'dojo/dom'
], function(dom){
    // Once all modules in the dependency list have loaded, this
    // function is called to define the demo/myModule module.

    var oldText = {};

    // This returned object becomes the defined value of this module
    return {
        	setText: function (id, text) {
            var node = dom.byId(id);
            oldText[id] = node.innerHTML;
            node.innerHTML = text;
        },

        restoreText: function (id) {
            var node = dom.byId(id);
            node.innerHTML = oldText[id];
            delete oldText[id];
        }
    };
});