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
    console.log("Save User");
    var promise = UserItemService.getItemByNumber(signupCtrl.user.menuNumber);
    promise.then(function (result) {
      console.log("test promise: ", result);
      if (result.error) {
        console.log("error: ",result.error);
      }
      else {
        UserItemService.saveUser(signupCtrl.user);
        signupCtrl.showInfoSaved = true;
      }
    })
  };
  console.log("Singup controller: ", signupCtrl);
}

})();
