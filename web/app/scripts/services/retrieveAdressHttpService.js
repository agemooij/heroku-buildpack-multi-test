'use strict';

angular.module('irisWebApp')
  .service('retrieveAdressHttpService', function retrieveAdressHttpService($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
        this.retrieveAdress = function(zipCode, number, numberAddition){
            if(numberAddition){
                return $http({method: 'GET', url: '/api/property?zc=' + zipCode + '&number='+number+numberAddition});
            }else{
                return $http({method: 'GET', url: '/api/property?zc=' + zipCode + '&number='+number});
            }
        }
  });
