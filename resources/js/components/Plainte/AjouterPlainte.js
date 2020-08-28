import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../style/login.css';
import '../style/card.css';
import '../style/bootstrap.css';
import '../style/notification.css'
import Notification from '../Notification/Notification'


export default class AjouterPlainte extends Component{
    constructor(props) {
        super(props);
        this.onChangeUtilisateur = this.onChangeUtilisateur.bind(this);
        this.onChangeTitrePlainte = this.onChangeTitrePlainte.bind(this);
        this.onChangeTypePlainte = this.onChangeTypePlainte.bind(this);
        this.onChangePrioritePlainte = this.onChangePrioritePlainte.bind(this);
        this.onChangeSujetPlainte = this.onChangeSujetPlainte.bind(this);
        this.onChangeDelaiPlainte = this.onChangeDelaiPlainte.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            utilisateur_id: '1',
            titre_plainte: '',
            type_plainte: '',
            priorite_id: '1',
            sujet_plainte: '',
            delai_plainte: '',
            users:[],
            priorites:[], 
            selectedFile:'',
        }
    }
    componentDidMount(){
        axios.get('http://localhost:8000/listUser')
        .then(response=>{
            this.setState({users:response.data})
        });
        axios.get('http://localhost:8000/listPriorite')
        .then(response=>{
            this.setState({priorites:response.data})
        });
    }
    handleInputChange(event) {
        this.setState({
            selectedFile: event.target.files[0],
          })
    }

    onChangeUtilisateur(e) {
        this.setState({
            utilisateur_id: e.target.value
        });
        
    }
    onChangeTitrePlainte(e) {
        this.setState({
            titre_plainte: e.target.value
        });
    }
    onChangeTypePlainte(e) {
        this.setState({
            type_plainte: e.target.value
        });
    }
    onChangePrioritePlainte(e) {
        this.setState({
            priorite_id: e.target.value
        });
        console.log(priorite_id)
    }
    onChangeSujetPlainte(e) {
        this.setState({
            sujet_plainte: e.target.value
        });
    }
    onChangeDelaiPlainte(e) {
        this.setState({
            delai_plainte: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const data = new FormData() 
        data.append('file', this.state.selectedFile)
        const plainte = {
            utilisateur_id: this.state.utilisateur_id,
            titre_plainte: this.state.titre_plainte,
            type_plainte: this.state.type_plainte,
            priorite_id: this.state.priorite_id,
            sujet_plainte: this.state.sujet_plainte,
            delai_plainte: this.state.delai_plainte,
        }
        axios.post('http://localhost:8000/formSubmit',plainte).then(function (response) {
            $("#notification-success").show()

        },
        (error) => {
          $("#notification-failure").show()
        })
        if(this.state.selectedFile){
            axios.post('http://localhost:8000/AjouterPiece',data).then(function (response) {
                $("#notification-success").show()

            });
        }

    }


    render() {
        return (
            <div>
            <Notification/>
            <div className="bg-contact2">
		        <div className="container-contact2">
                    <div className="wrap-contact2">
				        <form className="contact2-form validate-form" onSubmit={this.onSubmit}>
                            <span className="contact2-form-title">
                                Ajouter Réclamation
                            </span>

				            <div className="wrap-input2 validate-input" >
                                <label className="label-form2">Utilisateur Concerné</label>	
                                <div className="input2" className="input-group mb-3" style={{ width: '74%'}}>
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
                                <label className="label-form2">Titre Plainte</label>	
                                <input className="input2" type="text" value={this.state.titre_plainte} onChange={this.onChangeTitrePlainte} required/>
                                    <span className="focus-input2"></span>
                            </div>
				            <div className="wrap-input2 validate-input" >
                                <label className="label-form2">Type Plainte</label>	
                                <input className="input2" type="text" value={this.state.type_plainte} onChange={this.onChangeTypePlainte} required/>
                                    <span className="focus-input2"></span>
                            </div>
				            <div className="wrap-input2 validate-input" >
                                <label className="label-form2">Priorité Plainte</label>	
                                <div className="input-group mb-3" style={{ width: '74%'}}>
                            <select className="custom-select" value={this.state.priorite_id} onChange={this.onChangePrioritePlainte}>
                            <option value='' defaultValue disabled>Choisir Priorité</option>

                                {  
                                    this.state.priorites.map(priorite=>{
                                        return (
                                            <option value={priorite.id} key={priorite.id} defaultValue={priorite.id}>{priorite.type_priorite}</option>
                                        )
                                    })
                                    }
                            </select>
                            </div>
                            </div>
                            <div className="wrap-input2 validate-input" >
                                <label className="label-form2">Sujet Plainte</label>	
                                <textarea className="input2" type="text" value={this.state.sujet_plainte} onChange={this.onChangeSujetPlainte} required/>
                                    <span className="focus-input2"></span>
                            </div>
				            <div className="wrap-input2 validate-input" >
                                <label className="label-form2">Délai Plainte</label>	
                                <input className="input2" type="date" value={this.state.delai_plainte} onChange={this.onChangeDelaiPlainte} required/>
                                    <span className="focus-input2"></span>
                            </div>
                            <label id="delai_plainte" name="delai_plainte" className="label-form">Joindre pièce</label>
                            <div style={{  marginLeft:'30%' }}  className="image-upload">
                                <label htmlFor="file-input">
                                    <img  src={require("../images/file.png")}/>
                                </label>
                                <input  id="file-input" type="file" name="lien_image" onChange={this.handleInputChange}/>
                            </div>

                            
                            <div className="form-group">
                                <button type="submit" className="btn-plainte">Envoyer</button>
                            </div>  
				        </form>
			        </div>
		        </div>
	        </div>
            </div>
        )
    }
}
if (document.getElementById('ajouterplainte')) {
    ReactDOM.render(<AjouterPlainte />, document.getElementById('ajouterplainte'));
}
