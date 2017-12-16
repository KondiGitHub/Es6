
var expect = require('chai').expect;

describe('Arrorws Functions',function () {

    it('provide a compact syntax to define a function',function () {

         //let add = function (x,y ) {
           //  return x+y;
         //};

         let add = (x, y) => x+y;

         expect(add(2,3)).to.equal(5);

    });

    it('can be used with array methods',function () {

        var numbers = [1,2,3,4];

        var sum = 0;

        numbers.forEach(x=>sum+=x);

        expect(sum).to.equal(10);

        var doubled = numbers;
        doubled = doubled.map(n=>2*n);
        console.log("doubled is ::",doubled);

        expect(doubled).to.deep.equal([2,4,6,8])

    });

    it("lexically binds to 'this' ",function () {

        this.name = "Chary";

        expect(this.name).to.equal("Chary")

    });

});