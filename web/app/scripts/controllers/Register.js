'use strict';

angular.module('irisWebApp')
    .controller('RegisterCtrl', function ($scope, peopleRegistrationService, $location, $rootScope) {

        $scope.register = function (invalid) {
            $scope.showErrors = invalid && $scope.passwordsMatch;
            //evaluate all at the same time
            console.log($scope.person);
            if($scope.showErrors) {
                return;
            }
            peopleRegistrationService.sendRegistrationData($scope.person).success(function (data, status, headers, config) {
                alert("we send the data in succesfully!");
            }).
                error(function (data, status, headers, config) {
                    alert("we did send data, but the api connection is not configured yet");
                    $rootScope.loggedUser = "Me"
                    $location.url('/registratie_geslaagd');
                });
        };
    });
