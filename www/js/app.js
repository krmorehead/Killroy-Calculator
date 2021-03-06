// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller("AppController", function($scope){
  $scope.mixedWater;
  $scope.mixedConcentrate;
  $scope.sprayedWater;
  $scope.sprayedConcentrate = ""

  $scope.options = [
    {
      name:"gram",
      value:1
    },
    {
      name:"ounce",
      value:28.3495
    },
    {
      name:"pound",
      value:453.592
    }
  ]

  $scope.calculateConcentrateSprayed = function(){
    var coefficient = formulaCoefficent()
    $scope.sprayedConcentrate = coefficient * ( $scope.sprayedWater / $scope.mixedWater  * $scope.mixedConcentrate ) || "Invalid Inputs"
  }

  var formulaCoefficent = function(){
    return $scope.inputCoefficient.value / $scope.outputCoefficient.value
  }
})
