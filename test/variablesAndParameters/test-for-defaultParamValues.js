
var expect = require('chai').expect;

describe('defalt parameters',function () {
    it('provide defaults',function () {

        var doWork = function (name="Chary") {
            return name;

        }
        var results = doWork(); // works on only unefined but not on empty string like doWork("")
        expect(results).to.equal("Chary");


        var results1 = doWork("Venkat");
        expect(results1).to.equal("Venkat");
    });

    it('will provide a value for undefined',function () {

        var doWork = function (a=1,b=2,c=3) {
            return [a,b,c];

        }
        let [a,b,c] = doWork(5,undefined);
        expect(a).to.equal(5);
        expect(b).to.equal(2);
        expect(c).to.equal(3);
    });

});