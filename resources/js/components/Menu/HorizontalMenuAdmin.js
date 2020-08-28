import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../style/horizontalmenu.css'

import ProfileAdmin from '../Admin/ProfileAdmin'
import AjouterPlainte from '../Plainte/AjouterPlainte'

import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

export default class HorizontalMenuAdmin extends Component{
    
    disconnectHandle(){
        axios.post('http://localhost:8000/disconnect').then(function (response) {
            window.location.reload(true);
            console.log('hello')
        })
    }
    
    
    render() {
        return (
        <div>
            <Router>
                <div className="container">
                    <nav>
                        <ul>
                            <li>
                            <Link className="amenu" to="/">Accueil</Link>
                            </li>
                            <li>
                            <Link className="amenu" to="/profileAdmin">Profile</Link>
                            </li>
                            <button onClick={this.disconnectHandle.bind(this)} class="disconnect">Se déconnercter</button>
                        </ul>
                    </nav>
                    
                    <Switch>
                        <Route exact path="/" component={AjouterPlainte} />
                        <Route exact path="/profileAdmin" component={ProfileAdmin} />
                    </Switch>
                </div>
            </Router> 
        
        </div>

        )
    }
}
if (document.getElementById('horizontalmenuadmin')) {
    ReactDOM.render(<HorizontalMenuAdmin />, document.getElementById('horizontalmenuadmin'));
}
