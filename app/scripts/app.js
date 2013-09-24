'use strict';

angular.module('mpApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: ''
      });
  });
