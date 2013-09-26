'use strict';

angular.module('mpApp')
  .controller('OrganizationCtrl', ['identiconUrl', '$scope', '$routeParams', '$http', function (identiconUrl, $scope, $routeParams, $http) {

    $http.get('https://api.github.com/orgs/'+$routeParams.organization+'/members').success(function (data) {
      $scope.identicons = [];
      for (var i = 0; i < data.length; i++) {
        $scope.identicons.push(identiconUrl.fromUserId(data[i].id));
      }

      $scope.rows = [];
      for (var sliceIndex = 0; sliceIndex < $scope.identicons.length; sliceIndex+=5) {
        $scope.rows.push($scope.identicons.slice(sliceIndex, sliceIndex+5));
      }
    });



  }]);
