const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
    it('should call Utils.calculateNumber with the correct arguments', () => {
        const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
        sendPaymentRequestToApi(100, 20);
        assert(calculateNumberSpy.calledOnceWithExactly('SUM', 100, 20));
        calculateNumberSpy.restore();
    });
});
