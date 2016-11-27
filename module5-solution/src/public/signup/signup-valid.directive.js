(function () {
"use strict";

angular.module('public')
.directive('signupValid', SignupValidDirective);

SignupValidDirective.$inject = [ '$q', 'UserItemService'];
function SignupValidDirective($q, UserItemService) {
  return {
    require: 'ngModel',
    link: function(scope, element, attr, mCtrl) {
        mCtrl.$asyncValidators.unique = function (value) {
          //Validates asynchronously as user types the item number
          var deferred = $q.defer();

          var promise = UserItemService.getItemByNumber(value);
          promise.then(function (result) {
            if (result.error) {
              deferred.reject();
            }
            else {
              deferred.resolve();
            }
          });

          return deferred.promise;
      };
    }
  };
};

})();
