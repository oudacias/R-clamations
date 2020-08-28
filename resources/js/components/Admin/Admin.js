import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LeftMenu from '../Menu/LeftMenu';





export default class Admin extends Component{
    componentDidMount(){
    }

    render() {
        return (
            <div style={{marginTop: 50}}>
                <div id="bubbles">
                <LeftMenu/>
                </div>
            </div>
        )
    }
}
if (document.getElementById('admin')) {
    ReactDOM.render(<Admin />, document.getElementById('admin'));
}
