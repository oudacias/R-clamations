import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../style/login.css';
import '../style/card.css';
import '../style/notification.css'
import Notification from '../Notification/Notification'



export default class Contact extends Component{
    constructor(props) {
        super(props);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeSujet = this.onChangeSujet.bind(this);
        this.onChangeMessage = this.onChangeMessage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            id_destinateur: '1',
            sujet: '',
            message: '',
            users:[]
        }
    }
    componentDidMount(){
        axios.get('http://localhost:8000/listUser')
        .then(response=>{
            this.setState({users:response.data})
        });
        

    }
    onChangeEmail(e) {
        this.setState({
            id_destinateur: e.target.value
        });
    }
    onChangeSujet(e) {
        this.setState({
            sujet: e.target.value
        });
    }
    onChangeMessage(e) {
        this.setState({
            message: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const messages = {
            id_destinateur: this.state.id_destinateur,
            sujet: this.state.sujet,
            message: this.state.message
        }
        axios.post('http://localhost:8000/EnvoyerMessage',messages).then(function (response) {
            $("#notification-success").show()
    
    });

        }

    render() {
        return (
            <div>
            <Notification/>
            <h1 style={{color: '#FA9E6B',marginLeft:"17%",marginBottom:"5%"}}>Envoyer Message</h1>

                <div className="bg-contact2">
                    <div className="container-contact2">
                        <div className="wrap-contact2">
                            <form className="contact2-form validate-form" onSubmit={this.onSubmit}>
                                <span className="contact2-form-title">
                                    Contact
                                </span>
                                <div className="wrap-input2 validate-input" >
                                    <label className="label-form2">Email</label>	
                                    <div className="input-group mb-3" style={{ width: '74%'}}>
                                    <select className="custom-select" value={this.state.utilisateur_id} onChange={this.onChangeUtilisateur}>
                                    <option value='' defaultValue disabled>Choisir email de l'utilisateur</option>
                                    {
                                        this.state.users.map(user=>{
                                            return (
                                                <option value={user.id} key={user.id} defaultValue={user.id}>{user.email}</option>
                                            )
                                        })
                                    }
                            </select>
                            </div>
                                </div>
                                <div className="wrap-input2 validate-input" >
                                    <label className="label-form2">Sujet</label>	
                                    <input className="input2" type="text" value={this.state.sujet} onChange={this.onChangeSujet} required/>
                                        <span className="focus-input2"></span>
                                </div>
    
                                <div className="wrap-input2 validate-input" >
                                    <label className="label-form2">Message</label>	
                                    <textarea className="input2" type="text" value={this.state.message} onChange={this.onChangeMessage} required/>
                                        <span className="focus-input2"></span>
                                </div>
    
                               
                               
                                <div className="form-group">
                                    <input type="image" className="send-msg" src={require("../images/ios_icons/send.png")}  alt="submit"/>
                                </div>  
                            </form>
                        </div>
                    </div>
                </div>
                </div>
        )
    }
}
if (document.getElementById('contact')) {
    ReactDOM.render(<Contact />, document.getElementById('contact'));
}
