(function () {
'use strict';

angular.module('Data')
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
  .service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http', 'ApiBasePath'];
function MenuDataService($http, ApiBasePath) {
  var service = this;

  service.catList = [];
  service.items = [];

  service.getAllCategories = function () {
    return $http({
        method: "GET",
        url: (ApiBasePath + "/categories.json")
    }).then(function (result) {
      service.catList = result.data;
      return service.catList;
    });
  }

  service.getItemsForCategory = function (categoryShortName) {
    return $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json"),
        params: {category : categoryShortName}
    }).then(function (result) {
      service.items = result.data.menu_items;
      return service.items;
    });
  }
}

})();
