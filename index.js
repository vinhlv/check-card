module.exports = {
  checkCard: function checkCard(inputCardNumber) {
    var _input = inputCardNumber.replace(/ /g, '');
    var cardName = 'Invalid card';
    var checkVisa = /^4[0-9]{12}(?:[0-9]{3})?$/;
    var checkMasterCard = /^5[1-5][0-9]{14}$/;
    var checkDiscover = /^6(?:011|5[0-9]{2})[0-9]{3,}$/;
    var checkAmericanExpress = /^(?:3[47][0-9]{13})$/;
    var checkDinerClub = /^(?:3(?:0[0-5]|[68][0-9])[0-9]{11})$/;
    var checkJcb = /^(?:(?:2131|1800|35\d{3})\d{11})$/;
    if (checkVisa.test(_input)) {
      cardName = 'Visa';
    } else if (checkMasterCard.test(_input)) {
      cardName = 'Mastercard';
    } else if (checkDiscover.test(_input)) {
      cardName = 'Discover';
    } else if (checkAmericanExpress.test(_input)) {
      cardName = 'American Express';
    } else if (checkDinerClub.test(_input)) {
      cardName = 'Diners Club';
    } else if (checkJcb.test(_input)) {
      cardName = 'JCB';
    }
    return cardName;
  }
};
