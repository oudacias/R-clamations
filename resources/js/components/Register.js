import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Notification from './Notification/Notification'





export default class Register extends Component{
    constructor(props) {
        super(props);
        this.onChangeNom = this.onChangeNom.bind(this);
        this.onChangePrenom = this.onChangePrenom.bind(this);
        this.onChangeRole = this.onChangeRole.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeRole = this.onChangeRole.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            nom: '',
            prenom: '',
            role: '',
            email: '',
            role: 'user',
            password: ''
        }
    }
    componentDidMount(){
       

    }

    onChangeNom(e) {
        this.setState({
            nom: e.target.value
        });
    }
    onChangePrenom(e) {
        this.setState({
            prenom: e.target.value
        });
    }
    onChangeRole(e) {
        this.setState({
            role: e.target.value
        });
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
        const register = {
            nom: this.state.nom,
            prenom: this.state.prenom,
            role: this.state.role,
            email: this.state.email,
            role: this.state.role,
            password: this.state.password
        }
        axios.post('http://localhost:8000/register',register).then(function (response) {

        },
        (error) => {
            $("#notification-failure").show()
        })
    }

    render() {
        return (
            <div>
               
            <div className="container">
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
                                Créer Compte
                            </span>

				            <div className="wrap-input2 validate-input" >
                                <label className="label-form2">Email</label>	
                                <input className="input2" type="email" value={this.state.email} onChange={this.onChangeEmail} required/>
                                    <span className="focus-input2"></span>
                            </div>
				            <div className="wrap-input2 validate-input" >
                                <label className="label-form2">Nom</label>	
                                <input className="input2" type="text" value={this.state.nom} onChange={this.onChangeNom} required/>
                                    <span className="focus-input2"></span>
                            </div>
				            <div className="wrap-input2 validate-input" >
                                <label className="label-form2">Prénom</label>	
                                <input className="input2" type="text" value={this.state.prenom} onChange={this.onChangePrenom} required/>
                                    <span className="focus-input2"></span>
                            </div>
				            <div className="wrap-input2 validate-input" >
                                <label className="label-form2">Role</label>	
                                <div className="input2" className="input-group mb-3" style={{ width: '74%'}}>
                            <select className="custom-select" value={this.state.role} onChange={this.onChangeRole}>
                                <option value='user' >Utilisateur</option>                                        
                                <option value='admin'>Administrateur</option>                                        
                            </select>
                            </div>
                            </div>

                            <div className="wrap-input2 validate-input" >
                            <label className="label-form2">Mot de Passe</label><input className="input2" type="password" value={this.state.password} onChange={this.onChangePassword} required/>
                                <span className="focus-input2" ></span>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn-plainte">Créer</button>
                            </div>  
				        </form>
			        </div>
		        </div>
	        </div>
            </div>
            </div>
        )
    }

}
if (document.getElementById('register')) {
    ReactDOM.render(<Register />, document.getElementById('register'));
}
