const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe("Tests advanced calculateNumber function with Chai:", function() {
    describe("Tests SUM function:", function() {
        it("Returns 6.", function() {
            expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
        });
    });

    describe("Tests SUBTRACT function:", function() {
        it("Returns -4.", function() {
            expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
        });
    });

    describe("Tests DIVIDE function:", function() {
        it("Returns 0.2.", function() {
            expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
        });
    });

    describe("Tests DIVIDE function with divisor 0:", function() {
        it("Returns 'Error'.", function() {
            expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
        });
    });
});
