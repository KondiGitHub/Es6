
var assert = require('assert');

describe('Sample for  let keyword',function () {
    it('let provides block scoping',function () {
        var someTest = function (flag) {
            if(flag) {
                var x = " THIS IS VAR";
                var  x = "This is Dummy"
            }
            return x;
        };

        var results = someTest(true);
        // this test should pass though var x is declared inside block.
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
            if(flag) {
                //let x = "ThIS IS LET";
               let x = "This is Dummy";
               return x;
            }

        };
        var results = someTest_3(true);
        // this test should return 'I am default' as let works within block .
        assert.equal(results,"This is Dummy");
    })

    it('let provides block scoping for for loop',function () {
        var someTest = function () {
           for(var i = 0 ; i<10; i++) {
             i++;
           }
            return i;
        };
        var results = someTest();
        assert.equal(results,10);

        // will get ReferenceError if you remove comments for the below code

         /* var someTest_2 = function () {
            for(let i = 0; i<10; i++) {
                i++;
            }
            return i;
        };
        var results = someTest_2();
        assert.equal(results,10); */

    })
});