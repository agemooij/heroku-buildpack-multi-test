'use strict';

angular.module('irisWebApp')
  .directive('fieldsAreEqualDirective', function () {
    return function(scope, elem, attrs) {
        scope.$watch(attrs.fieldsAreEqualDirective, function (newValue) {
            compare(newValue, byString(scope, attrs.ngModel));
        });

        scope.$watch(attrs.ngModel, function (newValue) {
            compare(byString(scope, attrs.fieldsAreEqualDirective), newValue);
        });

        function compare(fieldValue, checkValue) {
            setByString(scope, attrs.targetModel, fieldValue === checkValue);
        }

        function byString(o, s) {
            s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
            s = s.replace(/^\./, '');           // strip a leading dot
            var a = s.split('.');
            while (a.length) {
                var n = a.shift();
                if (n in o) {
                    o = o[n];
                } else {
                    return;
                }
            }
            return o;
        }

        function setByString(o, s, v) {
            s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
            s = s.replace(/^\./, '');           // strip a leading dot
            var a = s.split('.');
            var n;
            while (a.length) {
                n = a.shift();
                if (!(n in o)) {
                    o[n] = new Object();
                }
                if (!a.length) {
                    o[n] = v;
                }
                o = o[n]
            }
        }
    }
  });
