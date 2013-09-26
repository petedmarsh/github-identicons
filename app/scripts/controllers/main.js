'use strict';

angular.module('mpApp')
  .controller('MainCtrl', ['identiconUrl', '$scope', function (IdenticonUrl, $scope) {

    var randomIdenticonURL = function() {
      var randomUserId = Math.floor((Math.random() * 3 * 1000 * 1000) + 1).toString();
      return IdenticonUrl.fromUserId(randomUserId);
    };

    $scope.identicons = [];

    for (var i = 0;  i < 25; i++) {
      $scope.identicons.push(randomIdenticonURL());
    }

    $scope.rows = [];
    for (var sliceIndex = 0; sliceIndex < 25; sliceIndex+=5) {
      $scope.rows.push($scope.identicons.slice(sliceIndex, sliceIndex+5));
    }

  }]);
