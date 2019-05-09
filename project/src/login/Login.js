import React, { Component }  from 'react';
//import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoginView from './LoginView';
import './TextInputStyle.css';

class Login extends React.Component {
    constructor() {
        super()
        this.state={
        username:"",
        password:"", 
        valid: false,
        loggedIn: false} 
    }
    handleChange=(id,value)=>{
        switch (id){
            case"username":
                this.setState({
                    username: value
                })
                break;
            case"password":
                this.setState({
                    firstName: value
                })
                break;
            }
        }

    checkUser= ()=>{
        if (this.state.username != "user"){
            this.setState({valid: false})
        }   
        else {
            if(this.checkPassword()){
                this.setState({valid: true})
            }
        }
    }

    checkPassword = ()=> {
        if(this.state.password != "password123"){
            return false;
        }
        else {
            //this.setState({redirect: true})
            return true; 
        }
    }

    confirm=()=>{
        this.checkUser()
        if(this.state.valid){
            alert("Du har loggats in!")
            this.setState({loggedIn: true})
            //renderRedirect()
        }
        else{
            alert("Inloggning misslyckades")
        }
    }
   /* renderRedirect=()=>{
        if(this.state.redirect){
        return <Redirect to='/target'/>
        }
        
        {this.renderRedirect()}
                <button onClick={this.setRedirect}>Logga in</button>
        */
    
    render() { 
        return (
            <div>
                <div>
                    <LoginView label={"UserName"} id={"username"} handleChange={this.handleChange}/>
                    <LoginView label={"Password"} id={"password"} handleChange={this.handleChange}/>
                </div>
                <div className="SimpleButton">
                    <button onClick={this.confirm}>Skapa konto</button>
                </div> 
            </div>
        )
    }
}
export default Login