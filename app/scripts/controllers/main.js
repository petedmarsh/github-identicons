'use strict';

angular.module('mpApp')
  .controller('MainCtrl', function ($scope) {

    var randomIdenticonURL = function() {
      var randomUserId = Math.floor((Math.random() * 3 * 1000 * 1000) + 1).toString();
      var userIdMD5 = SparkMD5.hash(randomUserId);
      return 'https://identicons.github.com/' + userIdMD5 + '.png';
    };

    $scope.identicons = [];

    for (var i = 0;  i < 25; i++) {
      $scope.identicons.push(randomIdenticonURL());
    }

    $scope.rows = [];
    for (var sliceIndex = 0; sliceIndex < 25; sliceIndex+=5) {
      $scope.rows.push($scope.identicons.slice(sliceIndex, sliceIndex+5));
    }

  });
