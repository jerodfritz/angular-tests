angular.module("application", ["ngRoute","nameDisplay","custom"])
  .config(function($routeProvider) {
    $routeProvider.otherwise({
        redirectTo: "/name"
      });
  });
