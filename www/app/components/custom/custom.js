angular.module("custom",["ui.router"])
  .config(function($stateProvider) {
    $stateProvider
      .state("custom", {
        url: "/custom",
        templateUrl : "/app/components/custom/custom.html",
        controller: "CustomController",
        controllerAs: "custom"
      });
  })
  .controller("CustomController", function($scope) {
    var vm = this;
    this.getData = function(){ 
      return vm;
    };
    this.name = {
      first : "JerodCustom",
      last : "FritzCustom"
    };
  });
  