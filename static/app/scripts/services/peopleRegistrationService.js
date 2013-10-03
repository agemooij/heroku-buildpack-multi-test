'use strict';

angular.module('irisWebApp')
  .service('peopleRegistrationService', function peopleRegistrationService($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
        this.sendRegistrationData= function(data){
            return $http({method: 'POST', url: '/posthier', data:data});
        };
  });
