'use strict';

describe('app: routeproviders', function () {
    // load the controller's module
    beforeEach(module('irisWebApp'));
    it('should map routes to controllers and pages', function() {
        inject(function($route) {

            expect($route.routes['/registreer'].controller).toBe('RegisterCtrl');
            expect($route.routes['/registreer'].templateUrl).
                toEqual('views/register.html');

            expect($route.routes['/registratie_geslaagd'].controller).toBe('RegisterCtrl');
            expect($route.routes['/registratie_geslaagd'].templateUrl).
                toEqual('views/registrationDone.html');

            // otherwise is the empty string
            expect($route.routes[null].redirectTo).toEqual('/registreer');
        });
    });
});
