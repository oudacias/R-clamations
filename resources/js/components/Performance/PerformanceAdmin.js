import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../style/login.css';
import '../style/card.css';
import '../style/bootstrap.css';
import Notification from '../Notification/Notification'




export default class PerformanceAdmin extends Component{
    constructor(props) {

    super(props);
    this.state = {
        plaintes:[],
        corrections:[],

    }
}
componentDidMount(){
    axios.get('http://localhost:8000/PlainteEnvoyeAdmin')
    .then(response=>{
        this.setState({plaintes:response.data})
    });
    axios.get('http://localhost:8000/PlainteResoluAdmin')
    .then(response=>{
        this.setState({corrections:response.data})
    });
    

}
    
    
    render() {
        return (
            <div>
            <div className="container" style={{marginLeft:"15%"}}>
                <div className="row" >
                    <div className="col-md-5" style={{marginBottom:"5%"}}>
                            <div className="card-content info-performance">
                           Nombre de réclamations reçues
                           <br/>
                           <br/>
                           <br/>
                           
                               {
                                    this.state.plaintes.map(plainte=>{
                                        return (
                                            <div className="performance-color">
                                                {plainte.plainEA}
                                            
                                            </div>    
                                        )
                                    })
                                }
                            </div>

                    </div>
                    <div className="col-md-5">
                            <div className="card-content info-performance">
                            Nombre de réclamations résolues
                            <br/>
                            <br/>
                            <br/>
                            {
                                    this.state.corrections.map(correction=>{
                                        return (
                                            <div className="performance-color">
                                                {correction.plainRA}
                                            
                                            </div>    
                                        )
                                    })
                                }                            </div>

                    </div>
                </div>
            </div>
            </div>
        )
    }
}
if (document.getElementById('performanceadmin')) {
    ReactDOM.render(<PerformanceAdmin />, document.getElementById('performanceadmin'));
}