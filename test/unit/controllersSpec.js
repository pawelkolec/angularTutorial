'use strict';

/* jasmine specs for controllers go here */
/*
describe('PhoneListCtrl', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(module('phonecatControllers'));
    
    beforeEach(inject(function (_$httpBackend_, $rootScope, $controller) {
        
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('phones/phones.json').respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
        
        scope = {};
        scope = $rootScope.$new();
        
        ctrl = $controller('PhoneListCtrl', { $scope: scope });
    }));

    
    it('should create "phones" model with 2 phones', function() {
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

        expect(scope.phones).toEqual([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
    });
});
*/


//step 8, 10
describe('PhoneCat App', function() {

    beforeEach(module('phonecatApp'));

      describe('PhoneDetailCtrl', function(){
        var scope, $httpBackend, ctrl;
        var xyzPhoneData = function() {
              return { name: 'phone xyz', images: ['image/url1.png', 'image/url2.png'] };
        };

        beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller) {
          $httpBackend = _$httpBackend_;
          //$httpBackend.expectGET('phones/xyz.json').respond({name:'phone xyz'});
            $httpBackend.expectGET('phones/xyz.json').respond(xyzPhoneData());

              $routeParams.phoneId = 'xyz';
              scope = $rootScope.$new();
              ctrl = $controller('PhoneDetailCtrl', {$scope: scope});
        }));

/*
        it('should fetch phone detail', function() {
          expect(scope.phone).toBeUndefined();
          $httpBackend.flush();

          expect(scope.phone).toEqual({name:'phone xyz'});
        });
         
        it('should fetch phone detail ver2', function() {
            expect(scope.phone).toBeUndefined();
            $httpBackend.flush();

            expect(scope.phone).toEqual(xyzPhoneData());
        });
        */
      });
});

describe('PhoneCat controllers', function() {

    beforeEach(function(){
        this.addMatchers({
            toEqualData: function(expected) {
                return angular.equals(this.actual, expected);
            }
        });
    });

  beforeEach(module('phonecatApp'));
  beforeEach(module('phonecatServices'));


  describe('PhoneListCtrl', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('phones/phones.json').respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

        scope = $rootScope.$new();
        ctrl = $controller('PhoneListCtrl', {$scope: scope});
    }));


    it('should create "phones" model with 2 phones fetched from xhr', function() {
        expect(scope.phones).toEqualData([]);
        $httpBackend.flush();

        expect(scope.phones).toEqualData([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
    });


    it('should set the default value of orderProp model', function() {
        expect(scope.orderProp).toBe('age');
    });
  });


  describe('PhoneDetailCtrl', function(){
    var scope, $httpBackend, ctrl;
    var xyzPhoneData = function() {
        return {
            name: 'phone xyz',
            images: ['image/url1.png', 'image/url2.png']
        }
    };


    beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller) {
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('phones/xyz.json').respond(xyzPhoneData());

        $routeParams.phoneId = 'xyz';
        scope = $rootScope.$new();
        ctrl = $controller('PhoneDetailCtrl', {$scope: scope});
    }));


    it('should fetch phone detail', function() {
        expect(scope.phone).toEqualData({});
        $httpBackend.flush();

        expect(scope.phone).toEqualData(xyzPhoneData());
    });
  });
});