'use strict';

angular.module('irisWebApp')
  .service('passwordStrengthEvaluator', function passwordStrengthEvaluator() {
        // AngularJS will instantiate a singleton by calling "new" on this function
        this.evaluatePasswordStrength= function(password){
            //we currently follow the entropy calculations as told by http://csrc.nist.gov/publications/nistpubs/800-63/SP800-63V1_0_2.pdf
            //however, as this is a different user story we now use this as a mockup
            var _force=0;
            if(password.length<5){
                _force=1;
            }else if(password.length<10){
                _force =3;
            }else{
                _force=4;
            }
            return _force;

        }
    });