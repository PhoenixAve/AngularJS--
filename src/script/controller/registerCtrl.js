;
(function (angular) {
  "use strict";

  angular.module('app')
    .controller('registerCtrl', [
      '$scope',
      '$http',
      '$interval',
      '$state',
      function ($scope, $http, $interval, $state) {
        $scope.submit = function () {
            $state.go('login');
          /*$http.get('/data/register.json').then(function (resp) {
          });*/
        };
        var count = 60;
        $scope.send = function () {
          $http.get('/data/code.json').then(function (resp) {
            console.log(resp)
            if (1 === resp.data.state) {
              $scope.time = '60s'
              var interval = $interval(function () {
                if (count <= 0) {
                  $interval.cancel(interval)
                  $scope.time = '';
                  retur;
                } else {
                  count--;
                  $scope.time = count + 's';
                }
              }, 1000)
            }
          });
        }
      }
    ]);
})(window.angular)
