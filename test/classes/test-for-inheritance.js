
var expect = require('chai').expect;

describe('inheritance',function () {

    it('get and set',function () {

        class Person {

            constructor(name) {
                this.name = name;
            }

           set name(name) {
                this._name = name;
           }

            get name() {
                return this._name;
            };
        };

        class Employee extends Person {



        }

        let e1 = new Employee("venkat");

        expect(e1.name).to.equal("venkat");
        e1.name ="Mailaram";

        let e2 = new Employee("Chary");

        expect(e1.name).to.equal("Mailaram");
        expect(e2.name).to.equal("Chary");


    });

    it('get and set for inheritance',function () {

        class Person {

            constructor(name) {
                this.name = name;
            }

            set name(name) {
                this._name = name;
            }

            get name() {
                return this._name;
            };

            doWork() {
                return `${this._name} is working`;
            }
        };

        class Employee extends Person {

            constructor(name,title) {
                super(name);
                this._title = title;
            }

            get title() {
                return this._title;
            }

            set title(title) {
                this._title = title;
            }

            doWork() {
                return `${this._name} is working`;
            }

        };

        let e1 = new Employee("venkat","Hero");

        expect(e1.name).to.equal("venkat");
        expect(e1.title).to.equal("Hero");
        e1.name ="Mailaram";

        let e2 = new Employee("Chary");

        expect(e1.name).to.equal("Mailaram");
        expect(e2.name).to.equal("Chary");


    });





});