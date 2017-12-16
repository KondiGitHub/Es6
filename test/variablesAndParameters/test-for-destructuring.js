
var expect = require('chai').expect;

describe('Sample for  destructuring',function () {
    it('can destructuring arrays',function () {

        let x = 2;
        let y = 3;
        [x,y] = [y,x];
        expect(x).to.equal(3);
        expect(y).to.equal(2);

        let [,p,q] = [0,3,2];
        expect(p).to.equal(3);
        expect(q).to.equal(2);

        let [,a,b,c] = [0,3,2];
        expect(a).to.equal(3);
        expect(b).to.equal(2);
        expect(c).to.equal(undefined);
    });

    it('can destructuring objects',function () {

        let doWork = function () {
            return{
                firstName: "Venkateswara",
                lastName: "Mailaram",
                middleName: "Chary"
            };
        };

        let { firstName: myFirstName,
              lastName: myLastName
             } = doWork();
        expect(myFirstName).to.equal("Venkateswara");
        expect(myLastName).to.equal("Mailaram");

        let {middleName} = doWork();
        expect(middleName).to.equal("Chary");

        let doAnotherWork = function () {
            return {
                firstName: "Venkateswara",
                lastName: "Mailaram",
                middleName1: "Chary",
                address: {
                    apartment: "2A",
                    city: "Miamisburg",
                    zipCode: "45342"
                }
            };
        };

        let {middleName1,address:{zipCode}} = doAnotherWork();
        expect(middleName1).to.equal("Chary");
        expect(zipCode).to.equal("45342");

    });

});