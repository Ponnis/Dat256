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
                    password: value
                })
                break;
            }
        this.confirm()
        }

    checkUser= ()=>{
        if (this.state.username !== "user"){
            this.setState({valid: false})
        }   
        else {
            if(this.checkPassword()){
                this.setState({valid: true})
            }
        }
    }

    checkPassword = ()=> {
        if(this.state.password !== "password123"){
            return false;
        }
        else {
            //this.setState({redirect: true})
            return true; 
        }
    }
    confirm=()=>{
        this.checkUser()
    }

    logg=()=> {
        if(this.state.valid){
            alert("Du har loggats in!")
            this.setState({
                loggedIn: true
            })
        }
        else
            alert("Användarnamn eller lösenord är fel")

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
                    <LoginView label={"Användarnamn"} id={"username"} handleChange={this.handleChange}/>
                    <LoginView label={"Lösenord"} id={"password"} handleChange={this.handleChange}/>
                </div>
                <div className="SimpleButton">
                    <button onClick={this.logg}>Logga in</button>
                    <button>Registrera dig!</button>
                </div> 
            </div>
        )
    }
}
export default Login