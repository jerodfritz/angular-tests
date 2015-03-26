angular.module("promises",["ui.router"])
.config(function($stateProvider) {
    $stateProvider
      .state("promises", {
        url: "/promises",
        templateUrl : "/app/components/promises/promises.html",
        controller: "PromiseController",
        controllerAs : "controller"
      });
  })
  .factory('promiseFactory', function($http){
    return {
      getData : function(){
        return $http.get('data/phones/phones.json').then(function(response){
          return response.data;
        });
      },
      getPhone : function(id){
        return $http.get('data/phones/' + id + '.json').then(function(response){
          return response.data;
        });
      }
    };
  })
  .controller("PromiseController", function(promiseFactory,$q) {
    var that = this;
    var p = promiseFactory.getData();
    p.then(function(data){
      var promises = [];
      for(var i in data){
        promises.push(promiseFactory.getPhone(data[i].id));
      }
      return promises;
    }).then(function(data){
      $q.all(data).then(function(phoneData){
         console.log(phoneData);
         that.phones = phoneData; 
       });
    });
  })
 .filter('checkmark', function() {
    return function(input) {
      return input ? '\u2713' : '\u2718';
    };
  });


