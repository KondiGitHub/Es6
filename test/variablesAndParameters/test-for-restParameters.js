
var expect = require('chai').expect;

describe('Rest parameters',function () {
    it('is like varargs',function () {

        var doWork = function (name, ...numbers) {
            let results = 0;
            numbers.forEach(n=> results+=n)
            return results;
        }
        var results = doWork("chary",1,2 ,3,4); // works on only unefined but not on empty string like doWork("")
        expect(results).to.equal(10);
    });



});