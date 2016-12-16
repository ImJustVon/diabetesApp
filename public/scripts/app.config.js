angular.module('diabetesApp').config(function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $routeProvider.when('/register', {
    templateUrl: 'views/pages/register.html',
    controller: 'RegisterController as register',
  }).when('/home', {
    templateUrl: 'views/pages/home.html',
    controller: 'HomeController as home',
  }).otherwise({
    templateUrl: 'views/pages/login.html',
    controller: 'LoginController as login',
  });
});
