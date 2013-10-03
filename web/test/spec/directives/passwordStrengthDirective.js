'use strict';

describe('Directive: passwordStrengthDirective', function () {

  // load the directive's module
  beforeEach(module('irisWebApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

    it('should make hidden element visible', inject(function ($compile) {
        element = angular.element('<div password-strength-directive></div>');
        element = $compile(element)(scope);
        scope.person={password:"bla"};
        scope.$apply(); //gooi de events er nu doorheen!
        expect(element.text()).toBe(String.fromCharCode(160)+"Zwak");
    }));
});
