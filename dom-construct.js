require([
    'dojo/dom',
    'dojo/dom-construct'
], 
function (dom, domConstruct, arrayUtil) {
    var greetingNode = dom.byId('greeting'); //gets element by id
    domConstruct.place('<em> Dojo!</em>', greetingNode); //places something after id

    domConstruct.create("div", { innerHTML:"<p>This is a paragraph inside a div</p>" }, dojo.body()); //creating div
    domConstruct.create("a", { href:"foo.html", title:"Goto FOO!" }, dojo.body()); //creating anchor

    domConstruct.destroy("destroy-this"); //destroying node
    //domConstruct.empty("someId"); //destroy node's child
});