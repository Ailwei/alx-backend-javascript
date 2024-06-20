const assert = require('assert');
const calculateNumber = require('../calculateNumber');

describe('calculateNumber', function() {
  it('should return the sum of rounded numbers', function() {
    assert.strictEqual(calculateNumber(1.4, 4.5), 6);
    assert.strictEqual(calculateNumber(1.6, 2.3), 4);
    assert.strictEqual(calculateNumber(-1.4, -2.5), -4);
    assert.strictEqual(calculateNumber(0, 0), 0);
  });
});
