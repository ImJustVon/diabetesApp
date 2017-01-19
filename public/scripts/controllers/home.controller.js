angular.module('diabetesApp')
.controller('HomeController', HomeController);

function HomeController($http, $location) {
  console.log('HomeController loaded');
  var ctrl = this;
  var lastBloodSugar;

}
