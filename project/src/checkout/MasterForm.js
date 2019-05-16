import React from 'react'
import CreditCard from './CreditCard'
import './MasterForm.css'
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
          className="SButton" 
          type="SimpleButton" onClick={this._prev}>
        Förgående
        </button>
      )
    }
    // ...else return nothing
    return null;
  }
  get checkoutButton(){
    let currentStep = this.state.currentStep;

    if(currentStep ==4){
      return(
        <button className="SButton"
        type="button" onClick={this.handleSubmit}>Slutför köp</button>
      )
    }return null;
  }
  
  get nextButton(){
    let currentStep = this.state.currentStep;
    // If the current step is not 3, then render the "next" button
    if(currentStep <4){
      return (
        <button 
          className="SButton" 
          type="button" onClick={this._next}>
        Nästa
        </button>        
      )
    }
    // ...else render nothing
    return null;
  }
  // Trigger an alert on form submission
  handleSubmit = (event) => {
    event.preventDefault()
    const { email, name, address} = this.state
    alert(`Din order levereras till ${address}\n 
            i namnet:  ${name} \n
            med kontaktemail:  ${email}\n
            Tack för ditt köp!
      `)
  }
  render() {    
    return (
      <React.Fragment>
      <h1 className="HText">Checkout</h1>
      <p className="HText">Step {this.state.currentStep} </p> 
        
      <form onSubmit={this.handleSubmit}>
      
        
        <Step1 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          email={this.state.email}
        />
        <Step2 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          name={this.state.name}
        />
        <Step3 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          address={this.state.address}
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
    )
    }

}


class Step1 extends React.Component {
  render() {
    if (this.props.currentStep !== 1) { // Prop: The current step
      return null
    }
    // The markup for the Step 1 UI
    return(
      <div className="form-group">
        <label className="HText" htmlFor="email">Email address</label>
        <input
          className="TextField"
          id="email"
          name="email"
          type="text"
          placeholder="Skriv din email..."
          value={this.props.email} // Prop: The email input data
          onChange={this.props.handleChange} // Prop: Puts data into state
        />
      </div>
    )
  }
}

class Step2 extends React.Component {
  render() {
    if (this.props.currentStep !== 2) { // Prop: The current step
      return null
    }
    return(
      <div className="form-group">
        <label className="HText" htmlFor="name">Name</label>
        <input
          className="TextField"
          id="name"
          name="name"
          type="text"
          placeholder="Skriv ditt namn..."
          value={this.props.name} 
          onChange={this.props.handleChange} // Prop: Puts data into state
        />
      </div>
    )
  }
}

class Step3 extends React.Component {
  render() {
    if (this.props.currentStep !== 3) { // Prop: The current step
      return null
    }
    
    return(
      <div className="form-group">
        <label className="HText" htmlFor="address">Address</label>
        <input
          className="TextField"
          id="address"
          name="address"
          type="text"
          placeholder="Enter address"
          value={this.props.address} 
          onChange={this.props.handleChange} // Prop: Puts data into state
        />
      </div>
    )
  }
}

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

