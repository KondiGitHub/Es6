
var expect = require('chai').expect;

describe('Number',function () {
    it('should easily mistake numbers with leading zeros',function () {
        var octal = 071;

        expect(octal).to.equal(57);

    });

    it('should support octal literals',function () {
        var octal = 0o71;

        expect(octal).to.equal(57);

    });

    it('should support binary literals',function () {
        var octal = 0b1101;

        expect(octal).to.equal(13);

        var octNum = Number("0o71");

        expect(octNum).to.equal(57);

        var binNum = Number("0b101");

        expect(binNum).to.equal(5);
    });











});
