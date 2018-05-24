require([
        	'demo/myModule'
        ], 
        function (myModule) {
        	myModule.setText('greeting', 'Hello Dojo!');

            setTimeout(function () {
                myModule.restoreText('greeting');
            }, 3000);
        });