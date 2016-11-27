(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['UserItemService'];
function SignupController(UserItemService) {
  var signupCtrl = this;
  signupCtrl.user = {
    'firstName' : '',
    'lastName' : '',
    'email' : '',
    'phoneNumber' : '',
    'menuNumber' : ''
  };
  signupCtrl.itemDetail = UserItemService.getItemDetails();
  signupCtrl.showInfoSaved = false;

  signupCtrl.signupUser = function () {
    var promise = UserItemService.getItemByNumber(signupCtrl.user.menuNumber);
    promise.then(function (result) {
      if (!result.error) {
        UserItemService.saveUser(signupCtrl.user);
        signupCtrl.showInfoSaved = true;
      }
    })
  };
}

})();
