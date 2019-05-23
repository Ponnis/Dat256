import React from 'react'
import CreditCard from './CreditCard'
import './MasterForm.css'
import {addOrder} from "../farmerInformation/Farmers"

export default class MasterForm extends React.Component {
  constructor(props) {
    super(props)
    // Set the initial input values
    this.state = {
      currentStep: 1, // Default is Step 1
      email: '',
      name: '',
      address: '', 
    }
    // Bind the submission to handleChange() 
    this.handleChange = this.handleChange.bind(this)
    this._next = this._next.bind(this)
    this._prev = this._prev.bind(this)
  }

  // Use the submitted data to set the state
  handleChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })    
  }
  
  _next() {
    if (this.checkInformation()){
      return null;
    }
    else{
    let currentStep = this.state.currentStep
    // If the current step is 1 or 2, then add one on "next" button click
    if(currentStep>=1 && currentStep<=4){
      currentStep= currentStep+1;
    }
    //currentStep = currentStep >= 2? 3: currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }
  }
    
  _prev() {
    let currentStep = this.state.currentStep
    // If the current step is 2 or 3, then subtract one on "previous" button click
    currentStep = currentStep <= 1? 1: currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }

  get previousButton(){
    let currentStep = this.state.currentStep;
    // If the current step is not 1, then render the "previous" button
    if(currentStep !==1){
      return (
        <button 
          className="Button" 
          type="SimpleButton" onClick={this._prev}>
          Förgående steg
        </button>
      )
    }
    // ...else return nothing
    return null;
  }
  //Shows the checkout button if you're heading to step 4
  get checkoutButton(){
    let currentStep = this.state.currentStep;

    if(currentStep === 4){
      return(
        <button className="Button"
        type="button" onClick={this.handleSubmit}>Slutför köp</button>
      )
    }return null; //... else render nothing
  }
  
  get nextButton(){
    let currentStep = this.state.currentStep;
    // If the current step is not 3, then render the "next" button
    if(currentStep <4){
      return (
        <button 
          className="Button" 
          type="button" onClick={this._next}>
          Nästa steg
        </button>        
      )
    }
    // ...else render nothing
    return null;
  }

  //Checks the information entered in the text fields
  checkInformation(){
      const { email, name, address, currentStep } = this.state
      //Checks everything regarding email
      if(currentStep === 1){
        //No email entered 
        if (email.length <= 0){
          alert("Du har inte fyllt i en epostadress.")
          return true;
        }
        //Email not containing @ or .
        else if (!email.includes("@") || !email.includes(".")){
          alert("Din epostadress är inte korrekt ifylld.")
          return true;
        }
      }
      //Checks everything in step 2 (name)
      else if(currentStep === 2){
        //Name not entered
        if (name.length <= 0){
          alert("Du har inte fyllt i ditt namn.")
          return true;
        }
      }
      //Checks everything in step 3 (address)
      else if(currentStep === 3){
        //Address not entered
        if (address.length <=0){
          alert("Du har inte fyllt i ditt namn.")
          return true;
        }
      }
      //The information is entered correctly
      else{
        return false;
      }
  }

  // Trigger an alert on form submission
  handleSubmit = (event) => {
    event.preventDefault()
    const { email, name, address} = this.state
    //Error handlers for the fill in form, sends an alert based on what you filled in incorrectly.
    if(this.state.currentStep <= 3){
      return null;
    }else{
      //Else sends you a confirmation of the purchase and to where it will be ordered
      alert(`Din order levereras till närmsta utlämningsställe nära: ${address}, via våra klimatsmarta lastbilar och planerade rutter,\n 
      Till namnet:  ${name} \n
      Med kontaktemail:  ${email}\n
      Tack för ditt köp!`)
      this.clickedOk();
      this.addOrder(this.props.products.products);
    }
  }

  clickedOk(){
    this.props.search("search")
  }

  addOrder(products){
    products.forEach(product =>{
        addOrder(product)
      }
    )
  }
  
  render() { 
       
    //All products in the shopping cart
    let products = this.props.products.products;
    console.log(JSON.stringify(products))
    //Information about all products in the shopping cart
    let divs = products.map((product)=><div className={"CartInformation"}>{product.quantity} st {product.name} ({product.price} kr/st)</div>);
    //Information about the total cost
    let total = <div className={"TotalInformation"}>Totalpris: {this.props.products.total.totalPrice} kr</div>;

    return (
      <div className="PageWrapper">
        <React.Fragment>
        <div className="CheckoutLabel">Betalning</div>
        <div className="StepLabel">Steg {this.state.currentStep} </div> 
        
        <form onSubmit={this.handleSubmit}>
        
        <Step1 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          email={this.state.email}
          onKeyPress={event => {
            if (event.key === 'Enter') {
              this._next();
            }
          }}
        />
        <Step2 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          name={this.state.name}
          onKeyPress={event => {
            if (event.key === 'Enter') {
              this._next();
            }
          }}
        />
        <Step3 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          address={this.state.address}
          onKeyPress={event => {
            if (event.key === 'Enter') {
              this._next();
            }
          }}
        />
        <Step4 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          address={this.state.address}
        />
        {this.previousButton}
        {this.nextButton}
        {this.checkoutButton}
      </form>
      </React.Fragment>
        <div className="InYourCart">I din varukorg:</div>
            {divs}
            {total}

        </div>
    )
    }
}

//The first step for filling in your email
class Step1 extends React.Component {
  render() {
    if (this.props.currentStep !== 1) { // Prop: The current step
      return null
    }
    // The markup for the Step 1 UI
    return(
      <div>
        <div>
          <label className="InformativeLabel" htmlFor="email">Fyll i din epostaddress</label>
        </div>
        <div>
          <input
          className={"TextFieldss"}
          id="email"
          name="email"
          type="text"
          placeholder="Din epostadress"
          value={this.props.email} // Prop: The email input data
          onChange={this.props.handleChange} // Prop: Puts data into state
          onKeyPress={this.props.onKeyPress} 
          />
        </div>
      </div> 
    )
  }
}
//The 2nd step for filling in your name
class Step2 extends React.Component {
  render() {
    if (this.props.currentStep !== 2) { // Prop: The current step
      return null
    }
    return(
      <div>
        <div>
          <label className="InformativeLabel" htmlFor="name">Fyll i ditt namn (För- och efternamn)</label>
        </div>
        <div>
          <input
            className="TextFieldss"
            id="name"
            name="name"
            type="text"
            placeholder="Förnamn Efternamn"
            value={this.props.name} 
            onChange={this.props.handleChange} // Prop: Puts data into state
            onKeyPress={this.props.onKeyPress}
            />
          </div>
      </div>
    )
  }
}
//The 3rd step for filling in your address
class Step3 extends React.Component {
  render() {
    if (this.props.currentStep !== 3) { // Prop: The current step
      return null
    }
    
    return(
      <div >
        <div>
          <label className="InformativeLabel" htmlFor="address">Fyll i din adress</label>
        </div>
        <div>
        <input
            className="TextFieldss"
            id="address"
            name="address"
            type="text"
            placeholder="Gatuadress"
            value={this.props.address} 
            onChange={this.props.handleChange} // Prop: Puts data into state
            onKeyPress={this.props.onKeyPress}
          />
        </div>
      </div>
    )
  }
}
//The credit card fill-in step, imported from the creditCard class
class Step4 extends React.Component {
  render() {
    if (this.props.currentStep !== 4) { // Prop: The current step
      return null
    }
    
    return(
      <div className="form-group">
       <CreditCard></CreditCard>
       
      </div>
    )
  }

}

