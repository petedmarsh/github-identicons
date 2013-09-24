'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('mpApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of identicons to the scope', function () {
    expect(scope.identicons.length).toBe(25);
  });

  it('should attach a list of rows of identicons to the scope', function() {
    expect(scope.rows.length).toBe(5);
  });

});
