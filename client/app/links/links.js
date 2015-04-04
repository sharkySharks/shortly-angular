angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $routeScope.authenticate=true;
  $scope.data = {};
  $scope.getLinks = function () {
    Links.getLinks()
      .then(function(links){
        $scope.data.links = links;
      })
      .catch(function(err){
        throw err;
      })
  };
  $scope.getLinks();

  $scope.name = "LinksController";
});