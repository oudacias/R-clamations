import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';



export default class Notification extends Component{
    componentDidMount(){
        $(document).ready(function () {
        $("#notification-success").hide()
        $("#notification-failure").hide()
        });
    }
    
    render() {
        return (
            <div>
            <div class="wrapper" id="notification-success">
                <div class="notifications animated fadeOut" id="notification">

                    <div class="notifications__item">
                    <div class="notifications__item__avatar">
                        <img src={require("../images/check1.png")} />
                    </div>
                    <div class="notifications__item__content">
                        <span class="notifications__item__title">Notification</span>
                        <span class="notifications__item__message">Opération effectuée avec succès</span>
                    </div>
                    </div>
                </div>
            </div>
            <div class="wrapper" id="notification-failure">
                <div class="notifications animated fadeOut" id="notification">

                    <div class="notifications__item">
                    <div class="notifications__item__avatar">
                        <img src={require("../images/cancel.png")} />
                    </div>
                    <div class="notifications__item__content">
                        <span class="notifications__item__title">Notification</span>
                        <span class="notifications__item__message">Les données entrées sont incorrectes</span>
                    </div>
                    </div>
                </div>
            </div>
            </div>
           
        )
    }
}
if (document.getElementById('notification')) {
    ReactDOM.render(<Notification />, document.getElementById('notification'));
}
