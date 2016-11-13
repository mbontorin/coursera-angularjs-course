(function () {
  'use restrict';

  angular.module('NarrowItDownApp',[])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
    .directive('foundItems', FoundItemsDirective);

  NarrowItDownController.$inject =['MenuSearchService']
  function NarrowItDownController(searchService) {
    var narrowDownCtrl = this;
    narrowDownCtrl.found = [];
    narrowDownCtrl.searchTerm = '';

    narrowDownCtrl.findItems = function() {
      var result = searchService.getMatchedMenuItems(narrowDownCtrl.searchTerm);
      result.then(function (items) {
        narrowDownCtrl.found = items;
      });
    }

    narrowDownCtrl.removeItem = function(index) {
      searchService.removeItem(index);
    }
  }

  MenuSearchService.$inject = ['$http', 'ApiBasePath'];
  function MenuSearchService($http, ApiBasePath) {
    var searchService = this;

    searchService.foundItems = [];

    searchService.getMatchedMenuItems = function(searchTerm) {
      return $http({
          method: "GET",
          url: (ApiBasePath + "/menu_items.json")
      }).then(function (result) {
        searchService.foundItems = [];
        // process result and only keep items that match
        var menu_items = result.data.menu_items;
        for (item_idx in menu_items) {
          var item = menu_items[item_idx];
          if (item.description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
            searchService.foundItems.push(item);
          }
        }

        // return processed items
        return searchService.foundItems;
      });
    }

    searchService.removeItem = function(index) {
      searchService.foundItems.splice(index, 1);
    }
  }

  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        items: '<',
        onRemove: '&'
      },
      controller: FoundItemsDirectiveController,
      controllerAs: 'foundItemsCtrl',
      bindToController: true
    };
    return ddo;
  }

  function FoundItemsDirectiveController() {
    var foundItemsCtrl = this;
  }

})();
