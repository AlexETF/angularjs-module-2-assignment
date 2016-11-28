(function(){
'use strict'

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['$scope', 'ShoppingListCheckOffService'];
  function ToBuyController($scope, ShoppingListCheckOffService){
    var toBuyCtrl = this;
    toBuyCtrl.items = ShoppingListCheckOffService.getShoppingItems();
    toBuyCtrl.buyItem = function(index, item){
      ShoppingListCheckOffService.buyItem(index, item);
    };
  };

  AlreadyBoughtController.$inject = ['$scope', 'ShoppingListCheckOffService', '$log'];
  function AlreadyBoughtController($scope, ShoppingListCheckOffService, $log){
    var alreadyBoughtCtrl = this;
    alreadyBoughtCtrl.items = ShoppingListCheckOffService.getBoughtItems();
    $log.info(alreadyBoughtCtrl.items.length);
  };

  function ShoppingListCheckOffService(){
    var service = this;
    service.shoppingItems = [
      {
        name : "Cookies",
        quantity : 10
      },
      {
        name : "Pepto Bismols",
        quantity : 3
      },
      {
        name : "Chips",
        quantity : 4
      },
      {
        name : "Chocolates",
        quantity : 2
      },
      {
        name : "Lolipops",
        quantity : 5
      }
    ];
    service.boughtItems = [];

    service.buyItem = function(index, item){
      service.shoppingItems.splice(index, 1);
      service.boughtItems.push(item);
    };

    service.getShoppingItems = function(){
      return service.shoppingItems;
    };

    service.getBoughtItems = function(){
      return service.boughtItems;
    };

  };

})();
