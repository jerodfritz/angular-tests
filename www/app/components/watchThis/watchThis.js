angular.module("watchThis",["ui.router"])
  .config(function($stateProvider) {
    $stateProvider
      .state("watch", {
        url: "/watch",
        templateUrl : "/app/components/watchThis/watchThis.html",
        controller: "WatchController",
        controllerAs: "watch"
      });
  })
  .controller("WatchController", function($scope){
    $scope.name = {
     first: "Jerod",
     last: "Fritz", 
    };
    
    $scope.number = 250;
    $scope.boxes = [];
    function redrawBoxes(){
      $scope.boxes = [];
      for(var i =0;i<$scope.number;i++){
        $scope.boxes.push({
          id: i
        });
      }  
    };
    redrawBoxes();
   
    var colors = [];
    var getRandomColor = function(n) {
      if(colors[n]){
        return colors[n];
      } else {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        colors[n] = color;
        //console.log("Generating color " + JSON.stringify(n) + ":" + color);
        return getRandomColor(n);  
      }
    };
    
    $scope.getRandomColor = function(n) {
      return getRandomColor(n.id);
    };
    $scope.getRandomNumber = function(n){
      return Math.floor((Math.random()*n)+1);
    };

    $scope.fullName = function(){
      return $scope.name.first + " " + $scope.name.last;
    };
    
    $scope.$watch("number", function(n){
      redrawBoxes();
    });
  });
