'use strict';

describe('Service: Programma', function () {

  // load the service's module
  beforeEach(module('hoGidsApp'));

  // instantiate service
  var Programma;
  beforeEach(inject(function (_Programma_) {
    Programma = _Programma_;
  }));

  it('should do something', function () {
    expect(!!Programma).toBe(true);
  });

});
