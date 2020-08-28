import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style/login.css';
import './style/card.css';
import './style/bootstrap.css';
import './style/notification.css'
import Notification from './Notification/Notification'
import Register from './Register'
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

export default class Login extends Component{
    constructor(props) {
        super(props);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            email: '',
            password: ''
        }
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }
    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const login = {
            email: this.state.email,
            password: this.state.password
        }

        axios.post('http://localhost:8000/login',login).then(function (response) {
            window.location.reload(false);
            $("#notification-success").show()

        },
        (error) => {
          $("#notification-failure").show()
        }
        )

        
        }

    render() {
        return (
        <div>
        <Notification/>
        <div className="container" id="login">
            <div className="row">
                <div className="col-md-8">
                    <div className="circle">
                        <img className="inside-circle" src={require("./images/dash.png")}/>
                    </div>
                    <div className="welcome-site">Bienvenu dans votre <br/>centre de Plainte
                </div>
            </div>
            <div className="col-md-4">
                <div className="cards">
                    <img src={require("./images/clipboard.png")} className="img-cards another"/>
                </div>
            </div>
        </div>
            <div className="bg-contact2">
		        <div className="container-contact2">
                    <div className="wrap-contact2">
				        <form className="contact2-form validate-form" onSubmit={this.onSubmit}>
                            <span className="contact2-form-title">
                                Votre Compte
                            </span>

				            <div className="wrap-input2 validate-input" >
                                <label className="label-form2">Email</label>	
                                <input className="input2" type="email" value={this.state.email} onChange={this.onChangeEmail} required/>
                                    <span className="focus-input2"></span>
                            </div>

                            <div className="wrap-input2 validate-input" >
                            <label className="label-form2">Mot de Passe</label><input className="input2" type="password" value={this.state.password} onChange={this.onChangePassword} required/>
                                <span className="focus-input2" ></span>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn-plainte">Login</button>
                            </div>  
				        </form>

                        <a className="register-redirect" href="/registration">Vous n'avez pas de compte? Créer par ici !</a>

                        
			        </div>
		        </div>
	        </div>
            </div>
        </div>

        )
    }
}
if (document.getElementById('login')) {
    ReactDOM.render(<Login />, document.getElementById('login'));
}
