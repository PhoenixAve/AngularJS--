/*;
(function (angular) {
  "use strict";

  angular.module('app')
    .config(['$provider', function ($provider) {
      $provider.decorator('$http', ['$delegate', '$q', function ($delegate, $q) {
        var get = $delegate.get;
        $delegate.post = function (url, data, config) {
          get(url).then(function (resp) {
            cb(resp)
          }, function (err) {
            cn(err)
          })
        }
        retrun $delegate;
      }]);
    }]);
})(window.angular);
*/
