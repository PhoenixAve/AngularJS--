;
(function (angular) {
  "use strict";

  angular.module('app')
    .controller('meCtrl', [
      '$scope',
      '$http',
      'cache',
      '$state',
      function ($scope, $http, cache, $state) {
        if(cache.get('name')){
          $scope.image = cache.get('image')
          $scope.name = cache.get('name')
          console.log($scope.name)
        }
        $scope.logout = function () {
          cache.remove('id');
          cache.remove('name');
          cache.remove('image');
          $state.go('main');
        }
      }
    ])
})(window.angular)
