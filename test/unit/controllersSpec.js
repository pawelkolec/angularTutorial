'use strict';

/* jasmine specs for controllers go here */

describe('PhoneListCtrl', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(module('phonecatApp'));
    
    beforeEach(inject(function (_$httpBackend_, $rootScope, $controller) {
        
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('phones/phones.json').respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
        
        scope = {};
        ctrl = $controller('PhoneListCtrl', { $scope: scope });
    }));

    
    it('should create "phones" model with 3 phones', function() {
        $httpBackend.flush();
        expect(scope.phones.length).toBe(2);
    });
    
    
    it('should set the default value of orderProp model', function() {
        expect(scope.orderProp).toBe('age');
    });

    it('"name" should be "World"', function() {
        expect(scope.name).toBe("World");
    });
    
    it('should create "phones" model with 2 phones fetched from xhr', function() {
      expect(scope.phones).toBeUndefined();
      $httpBackend.flush();

      expect(scope.phones).toEqual([{name: 'Nexus S'},
                                   {name: 'Motorola DROID'}]);
    });
});