
var expect = require('chai').expect;

describe('generators',function () {


    it("can build an iterable' ",function() {


        let numbers = function *(start, end) {
            for( let i = start ;i<=end;i++){
                 yield i;
            }

        };

        let sum = 0;
        let iterator = numbers(1,3);
        let next = iterator.next();
        while(!next.done) {
            sum += next.value;
            next = iterator.next();
        }

        expect(sum).to.equal(6);

    });

    it("can be built by implementing Symbol.iterator ",function() {
        class Compnay {
            constructor() {
                this.employess = [];
            }

            addEmployess(...names) {
                this.employess = this.employess.concat(names);
            }
            *[Symbol.iterator]() {
                for(let emp of this.employess){
                    yield emp;
                }

            }
        };


        let count =0;
        let company = new Compnay();
        company.addEmployess("venkat","chary","mailaram","ammulu");

        for(let emp of company){
            count += 1;
        }

        expect(count).to.equal(4);

    });

    it("generator filter ",function() {
        class Compnay {
            constructor() {
                this.employess = [];
            }

            addEmployess(...names) {
                this.employess = this.employess.concat(names);
            }
            *[Symbol.iterator]() {
                for(let emp of this.employess){
                    yield emp;
                }

            }
        };

        let filter = function *(items,predicate) {
            for(let item of items){

                if(predicate(item)){
                    console.log(item);
                    yield item;
                }
            }

        };

        let take = function* (items, numbers) {
            if( numbers < 1){
                return;
            }
            let count = 0;
            for(let item of items) {
                console.log(item);
                yield item;
                count += 1;
                if (count >= numbers) {
                    return;
                }
            }

        }

        let count =0;
        let company = new Compnay();
        company.addEmployess("aenkat","chary","mailaram","ammulu");

        for(let emp of take(filter(company,(emp) => emp[0] == "a"),2)){
            count += 1;
        }

        expect(count).to.equal(2);

    });

    it("can take parameter from  next(param) ",function() {

        let range = function*(start, end) {
            let current = start;
            while (current <= end) {
                // if(current%2 == 1) {
                //     yield current; // delta = 2 which is coming from next(2)
                // }
                let delta = yield current;
                current += delta || 1;
            }

        };

        let results = [];
        let iterator = range(1,10);
        let next = iterator.next();
        while(!next.done){
            results.push(next.value);
            next = iterator.next(2);
        }
        expect(results).to.deep.equal([1,3,5,7,9]);

    });

    it("Comprehesions) ",function() {

        var numbers = [for (n of [1,2,3]) n * n];

        expect(numbers).to.deep.equal([1,4,9]);

    });



});