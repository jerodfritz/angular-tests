angular.module("nameDisplay", ["ui.router"])
  .config(function($stateProvider) {
    $stateProvider
      .state("name", {
        url: "/name",
        templateUrl : "/app/components/nameDisplay/nameDisplay.html",
        controller: "MainController",
        controllerAs: "mc"
      })
      .state("name.details", {
        url: "/details",
        templateUrl: "/app/components/nameDisplay/nameDisplayDetails.html",
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

