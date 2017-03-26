;
(function (angular) {
  "use strict";

  angular.module('app')
    .controller('positionCtrl', [
      '$scope',
      '$http',
      '$state',
      'cache',
      function ($scope, $http, $state, cache) {
        $scope.isLogin = !!cache.get('name');
        $http.get('/data/position.json?id=' + $state.params.id).then(function (resp) {
          $scope.position = resp.data;
        }).then(function () {
          $http.get('/data/company.json?id=' + $scope.position.companyId).then(function (resp) {
            $scope.company = resp.data;
          });
        });
      }
    ]);
})(window.angular)
