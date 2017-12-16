
var expect = require('chai').expect;

describe('Iterables',function () {


    it("can work with iterators at a low level' ",function() {

        let sum = 0;
        let numbers = [1,2,3,4];
        // for loop
        for(let i =0 ;i< numbers.length;i++) {
            sum += numbers[i];
        }
        expect(sum).to.equal(10);
        sum =0 ;
        // for in
        for(let i in numbers){
            sum += numbers[i];
        }
        expect(sum).to.equal(10);




        // iterators
        sum = 0 ;
         let iterator = numbers[Symbol.iterator]();
         let next = iterator.next();
         while(!next.done) {
             sum += next.value;
             next = iterator.next();
         }
        expect(sum).to.equal(10);

        sum =0 ;
        // for of
        for(let i of numbers){
            sum += i;
        }
        expect(sum).to.equal(10);

    });

    it("can be built by implementing Symbol.iterator ",function() {
        class Compnay {
            constructor() {
                this.employess = [];
            }

            addEmployess(...names) {
                this.employess = this.employess.concat(names);
            }
            [Symbol.iterator]() {
                 return new ArrayIterator(this.employess);
            }
        };

        class ArrayIterator {
            constructor(array) {
                this.array = array;
                this.index =0 ;
            }
            next() {
                var result = { value: undefined, done: false}
                if(this.index < this.array.length) {
                    result.value = this.array[this.index];
                    result.done = false;
                    this.index+=1;
                }
                return result;
            }
        };

        let count =0;
        let company = new Compnay();
        company.addEmployess("venkat","chary","mailaram","ammulu");

        for(let emp of company){
            if(emp == undefined) {
                break;
            }
            count += 1;
        }

        expect(count).to.equal(4);

    });

});