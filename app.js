(function(){
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope){
    $scope.names;
    $scope.message;
   
    $scope.CheckIfTooMuch = function() {      
       if($scope.names != undefined && $scope.names != ""){
       const words = $scope.names.split(',');
       if(words.length > 0 && words.length <= 3){
           $scope.message ="Enjoy!"           
       }  else if(words.length > 0 && words.length > 3){
           $scope.message ="Too much!"
       }  else{
           $scope.message ="Please enter data first"
       }
      }else{
         $scope.message ="Please enter data first"
      }   
    
     };
   
   } 

})();