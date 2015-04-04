angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  
  $scope.data = {};
  $scope.getLinks = function (item) {
    Links.getLinks($scope.link)
      //.then ...
      $scope.data.link = {link: item}
  };
  $scope.getLinks();
});
