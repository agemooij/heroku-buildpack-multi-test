'use strict';

describe('Service: passwordStrengthEvaluator', function () {

  // load the service's module
  beforeEach(module('irisWebApp'));

  // instantiate service
  var passwordStrengthEvaluator;
  beforeEach(inject(function (_passwordStrengthEvaluator_) {
    passwordStrengthEvaluator = _passwordStrengthEvaluator_;
  }));

    //!inverted boolean, !! non inverted boolean so true boolean representation
    it('should exist', function () {
        expect(!!passwordStrengthEvaluator).toBe(true);
    });

    it('should evaluate password length %5', function () {
        expect(passwordStrengthEvaluator.evaluatePasswordStrength("bla4")).toBe(1);
        expect(passwordStrengthEvaluator.evaluatePasswordStrength("bla45")).toBe(3);
        expect(passwordStrengthEvaluator.evaluatePasswordStrength("bla4567890")).toBe(4);
    });
});
