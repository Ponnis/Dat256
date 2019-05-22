import React from 'react';
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
            default:
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
        if(this.state.loggedIn){
            return(
                <button className="button" onClick={this.loggOut}>Logga ut</button>
            )
        }
        return null;
    }

    get loginButton(){
        if(!this.state.loggedIn){
            return(
                <button className="SignInButton" onClick={this.logg}>Logga in</button>
            )
        }
        return null;
    }
    get usernameField() {
        if(!this.state.loggedIn){
        return(
            <LoginView label={"Användarnamn"} id={"username"} handleChange={this.handleChange}/>
            )
        }
        return null;
    }
    get passwordField() {
        if(!this.state.loggedIn){
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