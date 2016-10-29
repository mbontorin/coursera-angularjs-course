(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.message = "";
  $scope.lunchListString = "";

  //IMPORTANT: The getLunchList function uses a filter which will exclude from
  //the lunch list any empty string. So, if user passes something like 'a,,b,,c'
  //in the text box, this will be only 3 lunches: a,b,c. Also, a sequence of
  //commas ',,,,,,' will be considered nothing, just an empty list.
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
    if (lunchList.length == 0) {
      $scope.message = "Please enter data first";
      $scope.formStyle = {"border-color":"red"};
      $scope.textStyle = {"color":"red"};
    } else if (lunchList.length <= 3) {
      $scope.message = "Enjoy!"
      $scope.formStyle = {"border-color":"green"};
      $scope.textStyle = {"color":"green"};
    }
    else {
      $scope.message = "Too much!"
      $scope.formStyle = {"border-color":"green"};
      $scope.textStyle = {"color":"green"};
    }
  }
}
})();
