(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.template.html'
  })

  // Premade list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/templates/categoriesmenu.template.html',
    controller: 'CategoriesController as categoriesCtrl',
    resolve: {
      catList: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('items', {
    url: '/items/{shortName}',
    template: '<items items=\"itemsCtrl.items\"></items>',
    controller: "ItemsController as itemsCtrl",
    resolve: {
      items: ['MenuDataService', '$stateParams',
        function (MenuDataService, $stateParams) {
          return MenuDataService.getItemsForCategory($stateParams.shortName);
        }
      ]
    }
  });
}

})();
