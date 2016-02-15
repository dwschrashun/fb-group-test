function groupFeedController ($scope, api) {
	$scope.group = {};
	$scope.feed = [];
	$scope.thread = [];
	$scope.getGroup = function () {
		api.getGroup().then(function (result) {
			$scope.group = result;
		});
	};
	$scope.getFeed = function () {
		api.getGroupFeed().then(function (result) {
			$scope.feed = result.data;
		});
	};
	$scope.getMainCommentThread = function () {
		api.getMainCommentThread().then(function (result) {
			$scope.thread = result.data;
			$scope.$digest();
		});
	};
	$scope.getGroup();
	$scope.getFeed();
	$scope.getMainCommentThread();

}
groupFeedController.$inject = ['$scope', 'api'];
app.controller('groupFeedController', groupFeedController);