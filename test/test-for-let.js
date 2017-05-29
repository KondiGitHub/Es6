
var assert = require('assert');

describe('Sample for  let keyword',function () {
    it('let provides block scoping',function () {
        var someTest = function (flag) {
            if(flag) {
                var  x = "This is Dummy"
            }
            return x;
        };

        var results = someTest(true);
        // this test should pass.
        assert.equal(results,"This is Dummy");

        // should test should fail, as x is not defined if flag is false.
        var results = someTest(false);
        assert.equal(results,undefined);

        // var has global scope
        var someTest_2 = function (flag) {
            var x = "I am default";
            if(flag) {
               var x = "This is Dummy"
            }
            return x;
        };
        var results = someTest_2(true);
        // This test should return 'This is Dummy' as var has global scope .
        assert.equal(results,"This is Dummy");

        // // this test should return 'I am default.
        var results = someTest_2(false);
        assert.equal(results,"I am default");


        // Now try with let.
        var someTest_3 = function (flag) {
            let x = "I am default";
            if(flag) {
               let x = "This is Dummy";
            }
            return x;
        };
        var results = someTest_3(true);
        // this test should return 'I am default' as let works within block .
        assert.equal(results,"I am default");
    })
});