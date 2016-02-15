app.factory("api", function (fbConfigValues) {

	function getGroupFeed () {
		return new Promise (function (resolve, reject) {
			FB.api("/" + fbConfigValues.groupId + "/feed",
			    function (response) {
			    	console.log("feed", response);
			        return resolve(response);
			    }
			);
		});
	}

	function getMainCommentThread () {
		return new Promise (function (resolve, reject) {
			FB.api("/" + fbConfigValues.mainCommentId + "/comments",
			    function (response) {
			    	console.log("comment", response);
			        return resolve(response);
			    }
			);
		});
	}

	function postPost (post) {

	}

	function getGroup () {
		return new Promise (function (resolve, reject) {
			FB.api("/" + fbConfigValues.groupId,
			    function (response) {
			    	console.log("group", response);
			        return resolve(response);
			    }
			);
		});
	}

	return {
		getGroupFeed: getGroupFeed,
		postPost: postPost,
		getGroup: getGroup,
		getMainCommentThread: getMainCommentThread
	};
});