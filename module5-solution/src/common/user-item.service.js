(function () {
"use strict";

angular.module('common')
.service('UserItemService', UserItemService);


UserItemService.$inject = ['$http', 'ApiPath'];
function UserItemService($http, ApiPath) {
  var service = this;

  service.user = {
    'firstName' : '',
    'lastName' : '',
    'email' : '',
    'phoneNumber' : '',
    'menuNumber' : ''
  };

  service.itemDetail = {
    'data' : null,
    'error': null
  };

  service.getUser = function () {
    return service.user;
  };

  service.getItemDetails = function () {
    return service.itemDetail;
  };

  service.getItemByNumber = function (menu_item) {
    return $http.get(ApiPath + '/menu_items/' + menu_item + '.json')
      .then(
        function (response) {
         service.itemDetail.data = response.data;
         service.itemDetail.error = null;
         return response.data;
       },
       function (error) {
         service.itemDetail.error = error;
         service.itemDetail.data = null;
         return error.data;
        }
      );
  };

  service.saveUser = function (user) {
    service.user.firstName = user.firstName;
    service.user.lastName = user.lastName;
    service.user.email = user.email;
    service.user.phoneNumber = user.phoneNumber;
    service.user.menuNumber = user.menuNumber;

    console.log("Saved user: ", service.user);
  };

}

})();
