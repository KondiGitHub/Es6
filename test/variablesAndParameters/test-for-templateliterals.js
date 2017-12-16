
var expect = require('chai').expect;

describe('Template literals',function () {
    it('can easily combine literals and data',function () {

        var doWork = function (name) {
           return `hello, ${name}`;
        }
        var results = doWork("chary"); // works on only unefined but not on empty string like doWork("")
        expect(results).to.equal("hello, chary");
    });

    it("can use tags",function () {
        let upper = function (strings,...values) {
            let result = "";
            for(var i =0; i< strings.length;i++) {
                result+=strings[i];
                if(i<values.length){
                    result+=values[i];
                }
            }
            return result.toUpperCase();
            
        };

        var x =1;
        var y =3;
        var results = upper `${x} + ${y} is ${x+y}`;


        expect(results).to.equal("1 + 3 IS 4");
        
    });



});