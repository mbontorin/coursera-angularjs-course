(function () {
'use strict';

angular.module('Data')
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
  .service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http', 'ApiBasePath'];
function MenuDataService($http, ApiBasePath) {
  var service = this;
  console.log(service);

  service.catList = [];
  service.items = [];

  service.getAllCategories = function () {
    console.log("getAllCategories");

    return $http({
        method: "GET",
        url: (ApiBasePath + "/categories.json")
    }).then(function (result) {
      service.catList = result.data;
      return service.catList;
    });
  }

  service.getItemsForCategory = function (categoryShortName) {
    console.log("getItemsForCategory: ", categoryShortName);
    return $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json"),
        params: {category : categoryShortName}
    }).then(function (result) {
      console.log("Menu items: ", result.data.menu_items);
      service.items = result.data.menu_items;
      return service.items;
    });
  }
}

})();
