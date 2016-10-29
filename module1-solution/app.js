(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.message = "";
  $scope.lunchListString = "";

  //The getLunchList function uses a filter which will exclude from the
  //lunch list any empty string. So, if user passes something like
  //'a,,,b,,,c' in the text box, this will be only 3 lunches: a,b,c
  function getLunchList() {
    var tempList = $scope.lunchListString.split(",").filter(function (e) {
      if (e === "") {
        return false;
      }
      else {
        return true;
      }
    });
    return tempList;
  }

  $scope.doCheckLunch = function () {
    var lunchList = getLunchList();
    if (lunchList.length <= 3) {
      $scope.message = "Enjoy!"
    }
    else {
      $scope.message = "Too much!"
    }
  }
}

})();
