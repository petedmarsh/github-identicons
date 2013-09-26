'use strict';

angular.module('mpApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/organization/:organization', {
        templateUrl: 'views/main.html',
        controller: 'OrganizationCtrl'
      })
      .otherwise({
        redirectTo: ''
      });
  });
