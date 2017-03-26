;(function (angular) {
  "use strict";

  angular.module('app')
    .directive('appPositionList', ['$http','cache', function ($http,cache) {
      return {
        restrict: 'A',
        replace: true,
        templateUrl: 'view/template/positionList.html',
        scope: {
          data: '=',
          filterObj: '=',
          isFavorite: '='
        },
        link: function (scope) {
          scope.select = function (item) {
            item.select = !item.select;
          }
        }
      }
    }])
})(window.angular)
