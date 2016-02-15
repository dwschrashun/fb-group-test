app.config(function($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: '/pre-build/home/home.html',
        controller: 'HomeController',
        resolve: {
	        checkInit: ['$rootScope', '$timeout', function ($rootScope, $timeout) {
	        	console.log("resolving");
	        	return new Promise(function(resolve) {
	        		return resolve(waitForIt());
	        	});

	        	function waitForIt () {
	        		return new Promise(function (resolve){
		        		return resolve($timeout(function () {
		        			console.log("timeout");
			        		return new Promise(function(resolve){
				        		if ($rootScope.fbInit) return resolve(true);
				        		else return resolve(waitForIt());
			        		});
		        		}, 200));
	        		});
	        	}
	        }]
	    }
    });
});