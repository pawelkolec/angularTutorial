'use strict';

/* jasmine specs for filters go here */

describe('filter', function() {

    beforeEach(module('phonecatFilters'));
    
    describe('checkmark', function () {
        var checkmarkFltr;

        beforeEach(inject(function(checkmarkFilter) {

            checkmarkFltr = checkmarkFilter;
        }));

        it('should convert boolean values to unicode checkmark or cross', function () {
            expect(checkmarkFltr(true)).toBe('\u2713');
            expect(checkmarkFltr(false)).toBe('\u2718');
        })
    });
});
