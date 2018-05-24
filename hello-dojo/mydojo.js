require([
			'dojo/dom',
    		'dojo/dom-construct',
    		'dojo/fx',
    		'dojo/domReady'
        ],
        //We call the modules here 
  		function (dom, domConstruct, fx) {
            var greetingNode = dom.byId('greeting'); //Getting node by id
            //domConstruct.place('<em> Dojo!</em>', greetingNode); //Placing element after node

            greetingNode.innerHTML += ' from Dojo!';

            //Visual effects
            fx.slideTo({
            	node: greetingNode,
            	top: 100,
            	left: 200
            }).play();
        });