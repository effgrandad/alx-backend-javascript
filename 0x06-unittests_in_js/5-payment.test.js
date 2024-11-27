const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
    let consoleSpy;

    beforeEach(() => {
        consoleSpy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        consoleSpy.restore();
    });

    it('should log the correct message for totalAmount 100 and totalShipping 20', () => {
        sendPaymentRequestToApi(100, 20);
        assert(consoleSpy.calledOnceWithExactly('The total is: 120'));
    });

    it('should log the correct message for totalAmount 10 and totalShipping 10', () => {
        sendPaymentRequestToApi(10, 10);
        assert(consoleSpy.calledOnceWithExactly('The total is: 20'));
    });
});
