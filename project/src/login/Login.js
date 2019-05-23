import React from 'react';
import LoginView from './LoginView';
import './TextInputStyle.css';
import { checkLogin, getUserID } from "../AccountPage/TestAccounts";

class Login extends React.Component {
    constructor() {
        super()
        //Default values
        this.state={
        username:"",
        password:"", 
        textValue: 'Logga in',
        loggedIn: false} 
    }
    //Sets the user name and password to the field values
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
            default:
                break;
            }
        }

    //Sets the user to logged in or gives you an alert if your credentials are not correct
    tryToLogin=()=> {
        if(checkLogin(this.state.username,this.state.password)){
            this.setState({
                loggedIn: true
            })
            this.props.search("producer",getUserID(this.state.username))
        }
        else {
            //alert("Användarnamn eller lösenord är fel")
        }
    }
    //Logs the user out of the system
    loggOut=()=> {
        this.setState({
            loggedIn: false
        })
    }
    //Renders the logout button if the user is logged in
    get logoutButton(){
        if(this.state.loggedIn){
            return(
                <button className="button" onClick={this.loggOut}>Logga ut</button>
            )
        }
        return null;
    }
    //Renders the login button if the user is logged out
    get loginButton(){
        if(!this.state.loggedIn){
            return(
                <button className="SignInButton" onClick={this.tryToLogin}>Logga in</button>
            )
        }
        return null;
    }
    //Renders the username field if the user is logged out
    get usernameField() {
        if(!this.state.loggedIn){
        return(
            <LoginView label={"Användarnamn"} id={"username"} handleChange={this.handleChange}/>
            )
        }
        return null;
    }
    //Renders the password field if the user is logged out
    get passwordField() {
        if(!this.state.loggedIn){
            return(
                <LoginView label={"Lösenord"} id={"password"} handleChange={this.handleChange}/>
            )
        }
        return null;
    }
    
    render() { 
        return (
            <div className={"LeftBox"}>
                <h3>Fyll i dina användaruppgifter!</h3>
                {this.usernameField}
                {this.passwordField}
                {this.logoutButton}
                {this.loginButton}
            </div>
        );
    }
}
export default Login