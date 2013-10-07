'use strict';

describe('Service: emailExistsHttpService', function () {

    // load the service's module
    beforeEach(module('irisWebApp'));

    // instantiate service
    var emailExistsHttpService, httpBackend;
    beforeEach(inject(function (_emailExistsHttpService_, $httpBackend) {
        emailExistsHttpService = _emailExistsHttpService_;
        httpBackend =  $httpBackend;
        httpBackend.when("GET", /api\/people.*/).respond([{"email":"exists"}]);
    }));

    it('Should execute a call to the person resource', function () {
        httpBackend.expectGET('/api/people?email=bla@bla.com');
        emailExistsHttpService.verifyEmailExists("bla@bla.com");
        httpBackend.flush();

    });

    afterEach(function() {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

});
