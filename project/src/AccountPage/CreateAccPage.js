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
            password:""}
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

        }
    }

    confirm=()=>{
        alert(JSON.stringify(this.state))
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
                    <TextField label={"Password"} id={"password"} handleChange={this.handleChange}/>
                    <TextField label={"Confirm Password"} id={"confirmPassword"} handleChange={this.handleChange}/>
                </div>
                <div className="ConfirmationButton">
                    <button onClick={this.confirm}>Create account</button>
                </div>
            </div>
        )
    }
}

export default CreateAccPage