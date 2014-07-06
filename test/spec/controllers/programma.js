'use strict';

describe('Controller: ProgrammaCtrl', function () {

  // load the controller's module
  beforeEach(module('hoGidsApp'));

  var ProgrammaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProgrammaCtrl = $controller('ProgrammaCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
