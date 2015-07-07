'use strict';
(function() {
  angular
    .module('app')
    .controller('HelloCtrl', function() {
      var vm = this;
      vm.beerList = ['Shipfaced','Brewdog','Lagunitas'];
    });
}());
