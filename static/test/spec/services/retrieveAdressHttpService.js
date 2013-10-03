'use strict';

describe('Service: retrieveAdressHttpService', function () {

  // load the service's module
  beforeEach(module('irisWebApp'));

  // instantiate service
  var retrieveAdressHttpService, httpBackend;
  beforeEach(inject(function (_retrieveAdressHttpService_, $httpBackend) {
    retrieveAdressHttpService = _retrieveAdressHttpService_;
      httpBackend =  $httpBackend;
      httpBackend.when("GET", "/api/property?zc=8016BA&number=5").respond([{"address":"Oldeneelallee 15, 8016BA, Zwolle"}]);
      httpBackend.when("GET", "/api/property?zc=malformed&number=5").respond(500, '');
      httpBackend.when("GET", "/api/property?zc=8016BA&number=24B").respond({});
  }));
    afterEach(function() {
        if(httpBackend.pendingRequests){
            httpBackend.flush();
        }
    });

  it('should exist', function () {
    expect(!!retrieveAdressHttpService).toBe(true);
  });

    it('should handle existing addresses', function(){
        httpBackend.expectGET('/api/property?zc=8016BA&number=5');
        retrieveAdressHttpService.retrieveAdress("8016BA", "5");

    });

    it('should get 500 on malformed calls', function(){
        httpBackend.expectGET('/api/property?zc=malformed&number=5');
        retrieveAdressHttpService.retrieveAdress("malformed", "5");
    });

    it('should respond properly to non-existing addresses', function(){
        httpBackend.expectGET('/api/property?zc=8016BA&number=24B');
        retrieveAdressHttpService.retrieveAdress("8016BA", "24", "B");

    });
});
