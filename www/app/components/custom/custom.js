angular.module("custom",["ngRoute"])
  .config(function($routeProvider) {
    $routeProvider
      .when("/custom", {
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