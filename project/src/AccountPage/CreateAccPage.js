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
            email:"",
            password:"",
            confirmPassword:"", 
            valid: false}

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
        this.checkPassword()
    }

    checkPassword= ()=>{
        if (this.state.password!==this.state.confirmPassword){
        console.log ("lösenorden matchar inte")
        this.setState({valid: false});
        }
        else{
        this.setState({valid: true});
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


    render(){
        return(
            <div className="PageWrapper">
                <h3>Insert your account information!</h3>
                <div>
                    <TextField label={"Username"} id={"username"} handleChange={this.handleChange}/>
                    <TextField label={"First Name"} id={"firstName"} handleChange={this.handleChange}/>
                    <TextField label={"Surname"} id={"surName"} handleChange={this.handleChange}/>
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