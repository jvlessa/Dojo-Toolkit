require([
    'dojo/dom',
    'dojo/dom-construct'
], 
function (dom, domConstruct) {
    var greetingNode = dom.byId('greeting'); //gets element by id
    domConstruct.place('<em> Dojo!</em>', greetingNode); //places something after id
});