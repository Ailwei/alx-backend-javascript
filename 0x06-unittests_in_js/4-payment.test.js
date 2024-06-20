const sinon = require('sinon');
const { expect } = require('chai');

const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi function', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('should stub Utils.calculateNumber and log correct message', function () {
    // Stub Utils.calculateNumber to always return 10
    const stubUtils = sinon.stub(Utils, 'calculateNumber').returns(10);
    const spyConsole = sinon.spy(console, 'log');

    // Call sendPaymentRequestToApi with any arguments
    sendPaymentRequestToApi(100, 20);

    // Assertions
    expect(stubUtils.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(spyConsole.calledOnceWithExactly('The total is: 10')).to.be.true;

    // Restore stub and spy
    stubUtils.restore();
    spyConsole.restore();
  });
});
