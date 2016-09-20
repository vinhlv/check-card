var should = require('chai').should(),
  vCheck = require('../index');
describe('#Check card info', function() {
  it('check Visa card: 4242424242424242', function() {
    vCheck.checkCard('4242424242424242').should.equal('Visa');
  });
  it('check Mastercard: 5555555555554444', function() {
    vCheck.checkCard('5555555555554444').should.equal('Mastercard');
  });
  it('check American Express card: 378282246310005', function() {
    vCheck.checkCard('378282246310005').should.equal('American Express');
  });
  it('check Discover card: 6011111111111117', function() {
    vCheck.checkCard('6011111111111117').should.equal('Discover');
  });
  it('check Diners Club card: 30569309025904', function() {
    vCheck.checkCard('30569309025904').should.equal('Diners Club');
  });
  it('check JCB card: 3530111333300000', function() {
    vCheck.checkCard('3530111333300000').should.equal('JCB');
  });

});
