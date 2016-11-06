(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    this.items = ShoppingListCheckOffService.getToBuyItems();

    this.boughtItem = function(index) {
      ShoppingListCheckOffService.boughtItem(index);
    }
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    this.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
  }

  function ShoppingListCheckOffService() {
    this.toBuyList = [
      { "quantity" : 5,  "name" : "cookies"  },
      { "quantity" : 7,  "name" : "sodas"    },
      { "quantity" : 12, "name" : "eggs"     },
      { "quantity" : 5,  "name" : "potatoes" },
      { "quantity" : 1,  "name" : "chicken"  }
    ];

    this.alreadyBoughtList = [];

    this.boughtItem = function (index) {
      var item = this.toBuyList.splice(index,1);
      this.alreadyBoughtList.push(item[0]);
    }

    this.getToBuyItems = function () {
      return this.toBuyList;
    }

    this.getAlreadyBoughtItems = function () {
      return this.alreadyBoughtList;
    }
  }
})();;
