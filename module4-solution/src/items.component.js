(function () {
'use strict';

angular.module('Data')
.component('items', {
  templateUrl: 'src/templates/items.template.html',
  bindings: {
    items: '<'
  }
});

})();
