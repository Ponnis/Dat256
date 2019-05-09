import React from 'react';
import WizardText from './WizardText';
import './WizardText.css';
import './SimpleWizard.css';
import CreditCardInput from 'react-credit-card-input';
import CreditCard from './CreditCard'

class SimpleWizard extends React.Component{
constructor(){
super()
this.state={
address:"",
pointOfDelivery:"",
creditCardNo:"",
expiracyDate:"",
cvc:"",
valid: false}
}
handleChange=(id,value)=>{
switch (id){
case"address":
this.setState({
address: value
})
break;
case"pointOfDelivery":
this.setState({
pointOfDelivery: value
})
break;
case"creditCardNo":
this.setState({
creditCardNo: value
})
break;
case"expiracyDate":
this.setState({
expiracyDate: value
})
break;
//case"cvc":
this.setState({
//cvc: value
})
break; 
}
this.checkValues()
}
checkValues= ()=>{
//Vill lägga till ytterligare villkor för kreditkortsnummer, men är inte säker på hur likheten funkar
if (this.state.address.length < 1 || this.state.pointOfDelivery.length < 1){
console.log ("Informationen stämmer inte")
this.setState({valid: false});
}
else{
this.setState({valid: true});
}
}
confirm=()=>{
if(this.state.valid){
alert("Din order har tagits emot! "+JSON.stringify(this.state))
}
else{
alert("Angiven information stämmer inte")
}
}
render(){
return(
<div className="PageWrapper">
<h3>Skriv in dina uppgifter</h3>
<div>
<WizardText label={"Adress"} id={"address"} handleChange={this.handleChange}/>
<WizardText label={"Upphämtningsställe"} id={"pointOfDelivery"} handleChange={this.handleChange}/>
<CreditCard/>

</div>
<div className="ConfirmationButton">
<button onClick={this.confirm}>Skicka beställning</button>
</div>
</div>
)
}
}
export default SimpleWizard