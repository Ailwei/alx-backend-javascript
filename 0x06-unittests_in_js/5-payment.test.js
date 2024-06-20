const sinon = require('sinon');
const { expect } = require('chai');

const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi function', function () {
  let spyConsole;

  beforeEach(function () {
    spyConsole = sinon.spy(console, 'log');
  });

  afterEach(function () {
    sinon.restore();
  });

  it('should log "The total is: 120" for sendPaymentRequestToApi(100, 20)', function () {
    sendPaymentRequestToApi(100, 20);

    expect(spyConsole.calledOnceWithExactly('The total is: 120')).to.be.true;
  });

  it('should log "The total is: 20" for sendPaymentRequestToApi(10, 10)', function () {
    sendPaymentRequestToApi(10, 10);

    expect(spyConsole.calledOnceWithExactly('The total is: 20')).to.be.true;
  });
});
