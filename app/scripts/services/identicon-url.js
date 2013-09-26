'use strict';

angular.module('mpApp')
  .service('identiconUrl', function () {
    this.fromUserId = function(userId) {
      var userIdMD5 = SparkMD5.hash(userId.toString());
      return 'https://identicons.github.com/' + userIdMD5 + '.png';
    };
  });
