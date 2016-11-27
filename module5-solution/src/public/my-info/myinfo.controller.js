(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['UserItemService', 'ApiPath'];
function MyInfoController(UserItemService, ApiPath) {
  var myInfoCtrl = this;

  myInfoCtrl.basePath = ApiPath;
  myInfoCtrl.user = UserItemService.getUser();
  myInfoCtrl.itemDetail = {};

  if (myInfoCtrl.user.menuNumber) {
    var promise = UserItemService.getItemByNumber(myInfoCtrl.user.menuNumber);
    promise.then(function (result) {
      console.log("MyInfoController promise: ", result);
      myInfoCtrl.itemDetail = result;
    });
  };

  console.log("My Info controller: ", myInfoCtrl);
}

})();
