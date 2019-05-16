import CreditCardInput from 'react-credit-card-input';
import React from 'react'

class CreditCard extends React.Component{
    
    constructor(){
        super()
         
    }

    render(){
        var cvc;
        var cardNumber;
        var expiry;
        return(
            
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
                cardCVCInputProps={{
                  onBlur: e => console.log('cvc blur', e),
                  onChange: e => console.log('cvc change', e),
                  onError: err => console.log(`cvc error: ${err}`)
                }}
                cardExpiryInputProps={{
                  onBlur: e => console.log('expiry blur', e),
                  onChange: e => console.log('expiry change', e),
                  onError: err => console.log(`expiry error: ${err}`)
                }}
                cardNumberInputProps={{
                  onBlur: e => console.log('number blur', e),
                  onChange: e => console.log('number change', e),
                  onError: err => console.log(`number error: ${err}`)
                }}
                 cardNumberInputProps={{ value: cardNumber, onChange: this.handleCardNumberChange }}
                 cardExpiryInputProps={{ value: expiry, onChange: this.handleCardExpiryChange }}
                 cardCVCInputProps={{ value: cvc, onChange: this.handleCardCVCChange }}
                 fieldClassName="input"
                 />
            </div>
        );
    }
} export default CreditCard;