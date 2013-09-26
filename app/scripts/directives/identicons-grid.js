'use strict';

angular.module('mpApp')
  .directive('identiconsGrid', function () {
    return {
      template: '<div ng-repeat="row in rows" class="row">' +
                  '<div class="span1"></div>' +
                  '<ul class="thumbnails">' +
                    '<li ng-repeat="identicon in row" class="span2">' +
                     '<div class="thumbnail">' +
                        '<img ng-src={{identicon}}/>' +
                      '</div>' +
                    '</li>' +
                  '</ul>' +
                  '<div class="span1"></div>' +
                '</div>',
      restrict: 'E'
    };
  });
