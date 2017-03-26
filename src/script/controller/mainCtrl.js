;
(function (angular) {
  "use strict";

  angular.module('app')
    .controller('mainCtrl', [
      '$scope',
      '$http',
      function ($scope, $http) {
        $http.get('/data/positionList.json').then(function (resp) {
          $scope.list = resp.data
        }, null);
      }
    ])
})(window.angular)
