(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.message = "";
  $scope.lunchList = "";

  $scope.doCheckLunch = function () {
    var tempList = $scope.lunchList.split(",");
    if (tempList.length <= 3) {
      $scope.message = "Enjoy!"
    }
    else {
      $scope.message = "Too much!"
    }
  }
}

})();
