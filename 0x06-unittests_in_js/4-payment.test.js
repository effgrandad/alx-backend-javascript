const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
    let consoleSpy;

    beforeEach(() => {
        consoleSpy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        sinon.restore();
    });

    it('should call Utils.calculateNumber with the correct arguments', () => {
        const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
        sendPaymentRequestToApi(100, 20);
        assert(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20));
    });

    it('should log the correct message', () => {
        const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
        sendPaymentRequestToApi(100, 20);
        assert(consoleSpy.calledOnceWithExactly('The total is: 10'));
    });
});
