
var expect = require('chai').expect;

describe('classes',function () {
    it('classes before ES6 JS',function () {

        var Employee = function () {
            // constructor
        };

        Employee.prototype = {
            doWork: function () {
                return "complete";
            }
        };

        var e = new Employee();

        expect(e.doWork()).to.equal("complete");

    });

    it('classes in ES6 JS',function () {

        class Employee {
            doWork() {
                return "complete"
            };
        };

        var e = new Employee();

        expect(e.doWork()).to.equal("complete");

    });


    it('can create classes',function () {

        class Employee {
            doWork() {
                return "complete"
            };

            getName() {
                return "Chary";
            };
        };

        let e = new Employee();

        expect(e.doWork()).to.equal("complete");
        expect(e.getName()).to.equal("Chary");
        expect(Employee.prototype.doWork.call()).to.equal("complete");

    });

    it('constructor',function () {

        class Employee {


            constructor(name) {
                this._name = name;
            }

            doWork() {
                return "complete"
            };

            getName() {
                return this._name;
            };
        };

        let e1 = new Employee("venkat");
        let e2 = new Employee("Chary");

        expect(e1.getName()).to.equal("venkat");
        expect(e2.getName()).to.equal("Chary");


    });


    it('get and set',function () {

        class Employee {

            constructor(name) {
                this._name = name;
            }

           set name(name) {
                this._name = name;
           }

            get name() {
                return this._name;
            };
        };

        let e1 = new Employee("venkat");

        expect(e1.name).to.equal("venkat");
        e1.name ="Mailaram";

        let e2 = new Employee("Chary");

        expect(e1.name).to.equal("Mailaram");
        expect(e2.name).to.equal("Chary");


    });





});