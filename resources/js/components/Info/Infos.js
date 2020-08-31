import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../style/login.css';
import '../style/card.css';
import '../style/bootstrap.css';
import Notification from '../Notification/Notification'




export default class Infos extends Component{
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            users:[],
            selectedFile : ''
        }
    }
    handleInputChange(event) {
        this.setState({
            selectedFile: event.target.files[0],
          })
    }

    componentDidMount(){
        
        axios.get('http://localhost:8000/UserInfo')
        .then(response=>{
            this.setState({users:response.data})
        });
        
    }
    onSubmit(e){
        e.preventDefault();
        const data = new FormData() 
        data.append('file', this.state.selectedFile);
        if(this.state.selectedFile){
            axios.post('http://localhost:8000/ChangerProfil',data).then(function (response) {
                window.location.reload(false);

            });
        }  
    }
    
    render() {
        return (
            <div>
            <div className="container">
                <div className="row" style={{marginLeft:"5%"}}>
                    <div className="col-md-12">
                            <div className="card-content">
                                <div className="row">
                                    <div className="col-md-4">
                                    <form className="contact2-form validate-form" onSubmit={this.onSubmit}>

                                    {
                                        this.state.users.map(user=>{
                                            return (
                                                <div key={user.id}>
                                                <div style={{  marginLeft:'30%' }} className="image-upload">
                                                    <label htmlFor="file-input">
                                                        <img style={{width:"150px"}} className="user-info-img" src={`..${user.image_profil}`}/>
                                                    </label>
                                                    <input  id="file-input" type="file" name="lien_image" onChange={this.handleInputChange} alt="submit"/>

                                                    </div>
                                                    <div className="form-group">
                                                        <input style={{width: '70px',marginLeft:'125px'}} type="image"  src={require("../images/change_user.png")}  alt="submit"/>
                                                    </div>
                                                    </div>
                                            )
                                        })
                                    }
                                                </form>
                                    
                                </div>
                                
                                    <div className="col-md-6 user-info-card">
                                        <div className="row">
                        
                                            <div className="col-md-12">
                                            {
                                                this.state.users.map(user=>{
                                                    return (
                                                        <table>
                                                      <tbody>
                                                    <tr><td className="td-info">Nom</td><td className="td-info">: {user.nom}</td></tr>
                                                    <tr><td className="td-info">Prénom</td><td className="td-info">: {user.prenom}</td></tr>
                                                    <tr><td className="td-info">Type</td><td className="td-info">: {user.role}</td></tr>
                                                    <tr><td className="td-info">Email</td><td className="td-info">: {user.email}</td></tr>
                                                           </tbody>
                                                        </table>
                                                        )
                                                })
                                            }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                    </div>
                </div>
            </div>
            </div>
        )
    }
}
if (document.getElementById('infos')) {
    ReactDOM.render(<Infos />, document.getElementById('infos'));
}
