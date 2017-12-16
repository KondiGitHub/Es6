
var expect = require('chai').expect;
var assert = require('assert');

describe('Spread  operator',function () {
    it('can spread an array across parameters',function () {

        var doWork = function (x,y,z) {
            return x+y+z;
        }
        var results = doWork(...[1,2,3]); // works on only unefined but not on empty string like doWork("")
        expect(results).to.equal(6);
    });

    it('can build arrays',function () {

       var a = [3, 4, 5];
       var b = [1, 2, ...a, 6, 7, 8];
       console.log("b is ",b);
        assert.deepEqual(b,[ 1, 2, 3, 4, 5, 6, 7, 8 ]);
       expect(b).to.deep.equal([ 1, 2, 3, 4, 5, 6, 7, 8 ]);
        //expect(b).to.equal([ 1, 2, 3, 4, 5, 6, 7, 8 ]);
    });



});