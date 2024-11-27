const assert = require('assert');

const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
    it('should return the rounded sum of two numbers', () => {
        assert.strictEqual(calculateNumber(1, 3), 4);
        assert.strictEqual(calculateNumber(1, 3.7), 5);
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });

    it('should return the rounded sum when the second number is rounded', () => {
        assert.strictEqual(calculateNumber(1, 3), 4);
        assert.strictEqual(calculateNumber(1.6, 3), 5);
        assert.strictEqual(calculateNumber(1.2, 3.8), 5);
        assert.strictEqual(calculateNumber(-1, -3), -4);
        assert.strictEqual(calculateNumber(-1.4, -3.6), -5);
    });
});
