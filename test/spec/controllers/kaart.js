'use strict';

describe('Controller: KaartCtrl', function () {

  // load the controller's module
  beforeEach(module('hoGidsApp'));

  var KaartCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    KaartCtrl = $controller('KaartCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
