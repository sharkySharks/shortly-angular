angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.addLink = function () {
    Links.addLink($scope.link)
    .then(function(){
      $scope.link.url = '';
      $location.path('/links');
    })
    .catch(function(err){
      throw err;
    })
  };

});
