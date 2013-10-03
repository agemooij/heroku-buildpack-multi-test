'use strict';

angular.module('irisWebApp', [])
  .config(function ($routeProvider) {
    $routeProvider
        .when('/registreer', {
            templateUrl: 'views/register.html',
            controller: 'RegisterCtrl'
        })
      .when('/registratie_geslaagd', {
            templateUrl: 'views/registrationDone.html',
            controller: 'RegisterCtrl'
        })
      .otherwise({
        redirectTo: '/registreer'
      });
  })
    .run(function($rootScope, $location) {
        $rootScope.$on( "$routeChangeStart", function(event, next, current) {
            if ( $rootScope.loggedUser == null ) {
                // no logged user, we should be going to #register
                if ( next.templateUrl == "views/register.html" ) {
                    // already going to #register, no redirect needed
                } else {
                    // not going to #register, we should redirect now
                    $location.path( "/registreer" );
                }
            }
        })
    });
