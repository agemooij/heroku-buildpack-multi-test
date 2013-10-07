'use strict';

describe('Service: peopleRegistrationService', function () {

  // load the service's module
  beforeEach(module('irisWebApp'));

  // instantiate service
  var peopleRegistrationService, httpBackend;
  beforeEach(inject(function (_peopleRegistrationService_, $httpBackend) {
    peopleRegistrationService = _peopleRegistrationService_;
    httpBackend = $httpBackend; //ergens tegenaan testen
    httpBackend.when("POST", "/posthier").respond([{"bla":"this does not work"}]);
  }));

    it('should exist', function () {
        expect(!!peopleRegistrationService).toBe(true);
    });

    it('should be able to send data', function () {
        peopleRegistrationService.sendRegistrationData("data");
        httpBackend.expectPOST('/posthier');
    });

});
