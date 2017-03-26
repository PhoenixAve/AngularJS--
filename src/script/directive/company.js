;
(function (angular) {
  "use strict";

  angular.module('app')
    .directive('appCompany', [function () {
      return {
        restrict: 'A',
        replace: true,
        scope: {
          com: '='
        },
        templateUrl: 'view/template/company.html'
      }
    }])
})(window.angular)
