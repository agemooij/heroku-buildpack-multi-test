'use strict';

angular.module('irisWebApp')
  .directive('passwordStrengthDirective', function (passwordStrengthEvaluator) {
        return {
            restrict: 'EACM', //DENK OM DE RESTRICTIE!! E IS ALLEEN ELEMENT SUKKEL! (E kan niet altijd in IE he?)
            link: function postLink(scope, element, attrs) { //note: link is linken aan, compile = compilerne en injecteren
                scope.$watch(attrs.passwordStrengthDirective, function () {//note: je wil hem in de gaten houden!)
                    if (!!scope.person && !!scope.person.password) {
                        var texts = new Array();
                        texts[0]="<div id='password-indicator' class='password-strength-weak'>&nbsp;</div><div>Zwak</div>";
                        texts[1]="<div id='password-indicator' class='password-strength-weak'>&nbsp;</div><div>Zwak</div>";
                        texts[2]="<div id='password-indicator' class='password-strength-medium'>&nbsp;</div><div>Matig</div>";
                        texts[3]="<div id='password-indicator' class='password-strength-medium'>&nbsp;</div><div>Matig</div>";
                        texts[4]="<div id='password-indicator' class='password-strength-strong'>&nbsp;</div><div>Sterk</div>";
                        texts[5]="<div id='password-indicator' class='password-strength-strong'>&nbsp;</div><div>Zeer sterk</div>";
                        element.html(texts[passwordStrengthEvaluator.evaluatePasswordStrength(scope.person.password)]);

                    }
                })

            }
        };
  });
