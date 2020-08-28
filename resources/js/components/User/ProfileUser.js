import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ChartUser from './ChartUser'
import LeftMenu from '../Menu/LeftMenu'
import Info from '../Info/Infos'
import PerformanceUser from '../Performance/PerformanceUser'
import Message from '../Message/Messages'
import Contact from '../Contact/Contact'
import DynamicTableUser from './DynamicTableUser';




export default class ProfileUser extends Component{

    render() {
        return (
            <div>
            <LeftMenu/>
            <div id="s1" style={{marginTop:"100px"}}>
                <Info/>
            </div>
            <div id="s2" style={{marginTop:"200px"}}>
                <PerformanceUser/>
            </div>
            <div id="s3" style={{marginTop:"200px"}}>
                <ChartUser/>
            </div>
            <div id="s4" style={{marginTop:"200px"}}>
                <DynamicTableUser/>
            </div>
            <div id="s5" style={{marginTop:"200px"}}>
                <Message/>
            </div>
            <div id="s6" style={{marginTop:"200px"}}>
                <Contact/>
            </div>
            </div>
        )
    }
}
if (document.getElementById('profileuser')) {
    ReactDOM.render(<ProfileUser />, document.getElementById('profileuser'));
}
