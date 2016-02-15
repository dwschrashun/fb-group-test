app.directive("loginButton", function(){
	return {
		restrict: "E",
		templateUrl: "pre-build/login-button/login-button.html",
		link: function (scope, element, attribute) {
            if (FB) {
            	console.log("parse", element[0]);
            	FB.XFBML.parse(element[0].parent);
        	}
        	var checkLoginState = scope.checkLoginState;
		}
	};
});