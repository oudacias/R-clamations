import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../style/login.css';
import '../style/card.css';
import '../style/bootstrap.css';



export default class Plainte extends Component{
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
        if(this.state.utilisateur_id == '' || this.state.priorite_id == ''){
            console.log('hello');
        }
        const plainte = {
            utilisateur_id: this.state.utilisateur_id,
            titre_plainte: this.state.titre_plainte,
            type_plainte: this.state.type_plainte,
            priorite_id: this.state.priorite_id,
            sujet_plainte: this.state.sujet_plainte,
            delai_plainte: this.state.delai_plainte,
        }
        axios.post('http://localhost:8000/formSubmit',plainte).then(function (response) {
        });
        if(this.state.selectedFile){
            axios.post('http://localhost:8000/AjouterPiece',data).then(function (response) {
            });
        }

    }

    render() {
        return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="login-container-wrapper1 clearfix">
                        <div className="welcome">Nouvelle Réclamation</div>
                        <form className="login-form" onSubmit={this.onSubmit}>
                        <label id="priorite_id" name="priorite_id" className="label-form">Utilisateur Concerné</label>
                            <div className="input-group mb-3" style={{ width: '64%'}}>
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
                            <label id="titre_plainte" name="titre_plainte" className="label-form">Titre Plainte</label><input className="form-control input-lg" type="text" required value={this.state.titre_plainte} onChange={this.onChangeTitrePlainte}/>
                            <label id="titre_plainte" name="titre_plainte" className="label-form">Type Plainte</label><input className="form-control input-lg" type="text" required value={this.state.type_plainte} onChange={this.onChangeTypePlainte}/>
                            

                            <label id="priorite_id" name="priorite_id" className="label-form">Priorité Plainte</label>
                            <div className="input-group mb-3" style={{ width: '64%'}}>
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
                            <label id="sujet_plainte" name="sujet_plainte" className="label-form">Sujet Plainte</label><textarea style={{  minHeight:'100px' }} className="form-control input-lg" type="text" required value={this.state.sujetPlainte} onChange={this.onChangeSujetPlainte}/>
                            <label id="delai_plainte" name="delai_plainte" className="label-form">Délai Plainte</label><input className="form-control input-lg" type="date" required value={this.state.delaiPlainte} onChange={this.onChangeDelaiPlainte}/>
                            <label id="delai_plainte" name="delai_plainte" className="label-form">Joindre pièce</label><div style={{  marginLeft:'30%' }}  className="image-upload">
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
if (document.getElementById('plainte')) {
    ReactDOM.render(<Plainte />, document.getElementById('plainte'));
}
