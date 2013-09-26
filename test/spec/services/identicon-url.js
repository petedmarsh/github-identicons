'use strict';

describe('Service: identiconUrl', function () {

  // load the service's module
  beforeEach(module('mpApp'));

  // instantiate service
  var identiconUrl;
  beforeEach(inject(function (_identiconUrl_) {
    identiconUrl = _identiconUrl_;
  }));

  describe('#fromUserId', function() {

    it('should be a function', function() {
      expect(angular.isFunction(identiconUrl.fromUserId)).toBe(true);
    });

    describe('when userId is', function() {

      describe('an integer', function() {

        it('returns the URL of the user\'s identicon', function () {
          expect(identiconUrl.fromUserId(1192314)).toEqual('https://identicons.github.com/037297eed755d49175b01f5de965e78a.png');
        });

      });

      describe('a string', function() {

        it('returns the URL of the user\'s identicon', function () {
          expect(identiconUrl.fromUserId("1192314")).toEqual('https://identicons.github.com/037297eed755d49175b01f5de965e78a.png');
        });

      });

    });

  });

  it('should do something', function () {
    expect(!!identiconUrl).toBe(true);
  });

});
