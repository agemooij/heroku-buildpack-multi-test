'use strict';

describe('Directive: fieldsAreEqualDirective', function () {

    // load the directive's module
    beforeEach(module('irisWebApp'));

    var element,
    scope;

    beforeEach(inject(function ($rootScope) {
        scope = $rootScope.$new();
    }));

    it('should update the target model when both models are equal', inject(function ($compile) {
        element = angular.element('<div fields-are-equal-directive="testmodel" ng-model="reference" target-model="result.areEqual" />');
        element = $compile(element)(scope);
        scope.testmodel = "a";
        scope.reference = "a";
        scope.$digest();
        expect(scope.result.areEqual).toBe(true);
    }));

    it('should update the target model when both models are unequal', inject(function ($compile) {
        element = angular.element('<div fields-are-equal-directive="testmodel" ng-model="reference" target-model="result.areEqual" />');
        element = $compile(element)(scope);
        scope.testmodel = "b";
        scope.reference = "a";
        scope.$digest();
        expect(scope.result.areEqual).toBe(false);
    }));
});
