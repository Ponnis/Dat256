import CreditCardInput from 'react-credit-card-input';
import React from 'react'

class CreditCard extends React.Component{

    render(){
        var cvc;
        var cardNumber;
        var expiry;
        return(
            //The error handler for the credit card input
            <div>
                <CreditCardInput
                 customTextLabels={{
                    invalidCardNumber: 'Fel kortnummer!',
                    expiryError: {
                      invalidExpiryDate: 'Fel datum!',
                      monthOutOfRange: 'Fel månad!',
                      yearOutOfRange: 'Fel år!',
                      dateOutOfRange: 'Fel datum!'
                    },
                    invalidCvc: 'Fel CVC!',
                    invalidZipCode: 'Fel zipkod!',
                    cardNumberPlaceholder: 'Kortnummer',
                    expiryPlaceholder: 'MM/ÅÅ',
                    cvcPlaceholder: 'CVC',
                    zipPlaceholder: 'C.P.'
                  }}
                onError={({ inputName, err }) => console.log(`credit card input error: ${err}`)}
                 cardNumberInputProps={{ value: cardNumber, onChange: this.handleCardNumberChange }}
                 cardExpiryInputProps={{ value: expiry, onChange: this.handleCardExpiryChange }}
                 cardCVCInputProps={{ value: cvc, onChange: this.handleCardCVCChange }}
                 fieldClassName="input"
                 />
            </div>
        );
    }
} export default CreditCard;