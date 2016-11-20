(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['MenuDataService', 'catList'];
function CategoriesController(MenuDataService, catList) {
  var categoriesCtrl = this;
  console.log(categoriesCtrl);
  categoriesCtrl.catList = catList;
}

})();
