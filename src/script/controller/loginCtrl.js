;
(function (angular) {
  "use strict";

  angular.module('app')
    .controller('loginCtrl', [
      '$scope',
      '$http',
      '$state',
      'cache',
      function ($scope, $http, $state, cache) {
        var resp = {
          "id": "asdf123sdf",
          "name": "慕课君",
          "image": "image/head.png"
        };
        $scope.submit = function (argument) {
          cache.put('id', resp.id)
          cache.put('name', resp.name)
          cache.put('image', resp.image)
          $state.go('main');
        }
      }
    ])
})(window.angular)
