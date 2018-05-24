require([
			'dojo/dom',
    		'dojo/dom-construct'
        ],
        //We call the modules here 
  		function (dom, domConstruct) {
            var greetingNode = dom.byId('greeting'); //Getting node by id
            domConstruct.place('<em> Dojo!</em>', greetingNode); //Placing element after node
        });