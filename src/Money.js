/* global assertNamespace, money */

require('./NamespaceUtils');

assertNamespace('money');

money.Euros = function Euros(value) {
   return new money.Currency('EUR', value);
};

money.Francs = function Francs(value) {
   return new money.Currency('SFR', value);
};

money.Currency = function Currency(symbol, value) {
   this.getCurrencySymbol = function getCurrencySymbol() {
      return symbol;
   }; 

   this.getValue = function getValue() {
      return value;
   };

   this.plus = function plus(summand2) {
      var summand1 = this;
      return {
         getValue: function getValue(){
            return summand1.getValue() + summand2.getValue();
         }
      };
   };
};
