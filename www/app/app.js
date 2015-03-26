angular.module("application", ["ui.router", "nameDisplay", "custom", "watchThis", "promises"])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/custom");
});
