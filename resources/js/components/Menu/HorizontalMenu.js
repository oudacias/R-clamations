import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../style/horizontalmenu.css'

import DynamicShort from '../User/DynamicShort'
import ProfileUser from '../User/ProfileUser'

import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

export default class HorizontalMenu extends Component{
    
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
                            <Link className="amenu" to="/profile">Profile</Link>
                            </li>
                            <button onClick={this.disconnectHandle.bind(this)} class="disconnect">Se déconnercter</button>
                        </ul>
                    </nav>
                    
                    <Switch>
                        <Route exact path="/" component={DynamicShort} />
                        <Route exact path="/profile" component={ProfileUser} />
                    </Switch>
                </div>
            </Router> 
        
        </div>

        )
    }
}
if (document.getElementById('horizontalmenu')) {
    ReactDOM.render(<HorizontalMenu />, document.getElementById('horizontalmenu'));
}
