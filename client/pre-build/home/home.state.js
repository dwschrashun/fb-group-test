app.config(function($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: '/pre-build/home/home.html',
        controller: 'HomeController',
        resolve: {
	        checkInit: ['$rootScope', '$timeout', function ($rootScope, $timeout) {
	        	return new Promise(function(resolve) {
	        		return resolve(waitForIt());
	        	});

	        	function waitForIt () {
	        		return new Promise(function (resolve){
		        		return resolve($timeout(function () {
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