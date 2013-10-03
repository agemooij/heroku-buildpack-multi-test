'use strict';

angular.module('irisWebApp')
  .service('emailExistsHttpService', function emailExistsHttpService($http) {
    this.verifyEmailExists = function (data) {
        return $http({method: 'GET', url: '/api/people?email=' + data});
    }
  });
