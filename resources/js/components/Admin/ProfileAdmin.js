import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ChartAdmin from './ChartAdmin'
import LeftMenu from '../Menu/LeftMenu'
import Info from '../Info/Infos'
import PerformanceAdmin from '../Performance/PerformanceAdmin'
import Message from '../Message/Messages'
import Contact from '../Contact/Contact'
import DynamicTable from './DynamicTable';




export default class ProfileAdmin extends Component{

    render() {
        return (
            <div>
            <LeftMenu/>
            <div id="s1" style={{marginTop:"200px"}}>
                <Info/>
            </div>
            <div id="s2" style={{marginTop:"200px"}}>
                <PerformanceAdmin/>
            </div>
            <div id="s3" style={{marginTop:"200px"}}>
                <ChartAdmin/>
            </div>
            <div id="s4" style={{marginTop:"200px"}}>
                <DynamicTable/>
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
if (document.getElementById('profileadmin')) {
    ReactDOM.render(<ProfileAdmin />, document.getElementById('profileadmin'));
}
