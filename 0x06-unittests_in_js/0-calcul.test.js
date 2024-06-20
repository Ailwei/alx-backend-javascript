const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe("calculateNumber function", function() {
    it('Returns 4 for two integers (1, 3).', function() {
        assert.strictEqual(calculateNumber(1, 3), 4);
    });

    it('Returns 5 for one float and one integer (1, 3.7).', function() {
        assert.strictEqual(calculateNumber(1, 3.7), 5);
    });

    it('Returns 4 for one float and one integer (1, 3.3).', function() {
        assert.strictEqual(calculateNumber(1, 3.3), 4);
    });

    it('Returns 5 for one float and one integer reversed (3.7, 1).', function () {
        assert.strictEqual(calculateNumber(3.7, 1), 5);
    });

    it('Returns 5 for two floats (1.2, 3.7).', function() {
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    });

    it('Returns 6 for two borderline floats (1.5, 3.7).', function() {
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });
});
