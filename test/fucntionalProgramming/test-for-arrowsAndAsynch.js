
var expect = require('chai').expect;

describe('Arrorws And Asynch Functions',function () {


    it("lexically binds to 'this-1' ",function(done) {

        let self = this;
        self.name = "Chary";
        setTimeout(function () {
            expect(self.name).to.equal("Chary");
            done();
        },15);



    });

    it("lexically binds to 'this-2' ",function(done) {

        this.name = "Chary";
        setTimeout(() => {
            expect(this.name).to.equal("Chary");
            done();
        },15);



    });

});