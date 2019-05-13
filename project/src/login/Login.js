import React, { Component }  from 'react';
import LoginView from './LoginView';
import './TextInputStyle.css';

class Login extends React.Component {
    constructor() {
        super()
        this.state={
        username:"",
        password:"", 
        textValue: 'Logga in',
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
            else
            this.setState({valid: false})
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
        else {
            alert("Användarnamn eller lösenord är fel")
        }
    }

    loggOut=()=> {
        this.setState({
            valid: false, 
            loggedIn: false
        })
    }

    get logoutButton(){
        if(this.state.loggedIn==true){
            return(
                <button className="button" onClick={this.loggOut}>Logga ut</button>
            )
        }
        return null;
    }

    get loginButton(){
        if(this.state.loggedIn==false){
            return(
                <button className="button" onClick={this.logg}>Logga in</button>
            )
        }
        return null;
    }
    get registerButton(){
        if(this.state.loggedIn==false){
            return(
                <button className="button">Registrera dig!</button>
            )
        }
        return null;
    }
    get usernameField() {
        if(this.state.loggedIn==false){
        return(
            <LoginView label={"Användarnamn"} id={"username"} handleChange={this.handleChange}/>
            )
        }
        return null;
    }
    get passwordField() {
        if(this.state.loggedIn==false){
            return(
                <LoginView label={"Lösenord"} id={"password"} handleChange={this.handleChange}/>
            )
        }
        return null;
    }
   /* renderRedirect=()=>{
        if(this.state.redirect){
        return <Redirect to='/target'/>
        }
        
        {this.renderRedirect()}
                <button onClick={this.setRedirect}>Logga in</button>
        */
    
    render() { 
        let style="LoginStyle"
        return (
            <div>
                {this.usernameField}
                {this.passwordField}
                {this.logoutButton}
                {this.loginButton}
                {this.registerButton}
            </div>
        );
    }
}
export default Login