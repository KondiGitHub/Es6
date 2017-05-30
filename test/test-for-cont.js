
var assert = require('assert');

describe('Sample for  const keyword',function () {
    it('will make a variable read-only',function () {

            const MAX_SIZE = 30;

            // if you remove comment for the below line , you will get Assignment to constant error.
           //MAX_SIZE = 40;

           assert.equal(MAX_SIZE,30);
    });

    it('can not create same variable name in same block',function () {

        const y = 50;

       var testFun = function () {
           var y = 40;
           // if you remove the either of line below, will get 'already y declared " error.
           //const y = 50;
           // let y = 80;
           var y = 20;
           return y;

       };
        var count = testFun();
        assert.equal(count,20);
    });
});