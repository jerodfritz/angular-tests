angular.module("nameDisplay", ["ngRoute"])
  .config(function($routeProvider) {
    $routeProvider
      .when("/name", {
        templateUrl : "/app/components/nameDisplay/nameDisplay.html",
        controller: "MainController",
        controllerAs: "mc"
      });
  })
  .controller("MainController", function($scope) {
    var vm = this;
    this.getData = function(){ 
      return vm;
    };
    this.name = {
      first : "Jerod",
      last : "Fritz"
    };
  });

