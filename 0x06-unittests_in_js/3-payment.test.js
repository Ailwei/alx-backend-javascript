const sinon = require('sinon');
const { expect } = require('chai');

const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('Spy', function () {
  it('Ensures math is same.', () => {
    const spyUtils = sinon.spy(Utils, 'calculateNumber');
    const spyConsole = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(spyUtils.calledOnceWithExactly('SUM', 50, 20)).to.be.true;
    expect(spyConsole.calledOnceWithExactly('The total is: 70')).to.be.true;

    spyUtils.restore();
    spyConsole.restore();
  });
});
