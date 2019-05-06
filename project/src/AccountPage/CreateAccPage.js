import React from "react";
import TextField from "./TextField.js"
import AccountPage from "./AccountPage.css"


class CreateAccPage extends React.Component{
    constructor(){
        super()
        this.state={
            username:"",
            firstName:"",
            surName:"",
            companyName:"",
            companyNum:"",
            email:"",
            password:"",
            confirmPassword:"", 
            valid: false,
            accountOption: "consumer"}

    }

    handleChange=(id,value)=>{
        switch (id){
            case"username":
                this.setState({
                    username: value
                })
                break;
            case"firstName":
                this.setState({
                    firstName: value
                })
                break;
            case"surName":
                this.setState({
                    surName: value
                })
                break;
            case"email":
                this.setState({
                    email: value
                })
                break;
            case"password":
                this.setState({
                    password: value
                })
                break;
             case"confirmPassword":
                this.setState({
                    confirmPassword: value
                })
                break;    

        }
        this.checkInfo()
    }

    checkPassword= ()=>{
        if (this.state.password!==this.state.confirmPassword){
        console.log ("lösenorden matchar inte")
        return false;
        }
        else return true;
    }

    checkInfo= ()=>{
        if (this.state.username==="" || this.state.firstName==="" ||this.state.surName==="" ||
        this.state.email==="" || this.state.password==="" || this.state.confirmPassword===""){
            if (this.state.accountOption==="producer" && this.state.companyName==="")
            this.setState({valid: false})
        }
        
        else{
            if(this.checkPassword()){
                this.setState({valid: true})
            }

        } 
    }

    confirm=()=>{
        if(this.state.valid){
            alert("Create account successfull "+JSON.stringify(this.state))
        }
        else{
            alert("Incorrect Information")
        }
        
    
    }

    handleAccountChange =(changeEvent)=> {
        this.setState({
          accountOption: changeEvent.target.value
        });
      }


    render(){
        let options
        if (this.state.accountOption==="producer"){
            options=[<TextField label={"Företagsnamn"} id={"companyName"}/>, 
            <TextField label={"Organisationsnummer"} id={"companyNum"}/>]

        }
        return(
            <div className="PageWrapper">
                <div>Select Type</div>
                <div>
                    <label>Consumer<input name="radioButton" type="radio" value="consumer" onChange={this.handleAccountChange} /></label>
                    <label>Producer<input name="radioButton" type="radio" value="producer" onChange={this.handleAccountChange} /></label>
                </div>
                <h3>Insert your account information!</h3>
                <div>
                    <TextField label={"Username"} id={"username"} handleChange={this.handleChange}/>
                    <TextField label={"First Name"} id={"firstName"} handleChange={this.handleChange}/>
                    <TextField label={"Surname"} id={"surName"} handleChange={this.handleChange}/>
                    {options}
                    <TextField label={"Email"} id={"email"} handleChange={this.handleChange}/>
                    <TextField label={"Password"} id={"password"} handleChange={this.handleChange} />
                    <TextField label={"Confirm Password"} id={"confirmPassword"} handleChange={this.handleChange}/>
                </div>
                <div className="SimpleButton">
                    <button onClick={this.confirm}>Create account</button>
                </div>
            </div>
        )
    }
}

export default CreateAccPage