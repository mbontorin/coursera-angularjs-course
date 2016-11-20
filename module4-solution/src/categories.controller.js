(function () {
'use strict';

angular.module('Data')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['MenuDataService', 'catList'];
function CategoriesController(MenuDataService, catList) {
  var categoriesCtrl = this;
  categoriesCtrl.catList = catList;
}

})();
