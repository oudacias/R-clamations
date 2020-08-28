import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';
import axios from 'axios';
import ReactDOM from 'react-dom';


export default class ChartAdmin extends Component
{
   constructor(props) {
      super(props);
      this.state = {
        Data: {}
      }
    }
       
      componentDidMount() {
        axios.get(`http://localhost:8000/PlainteEnvoyeesAdmin`,)
          .then(res => {
            const plainte = res.data;
            let dates = [];
            let plaints = [];
            plainte.forEach(element => {
              dates.push(element.date);
              plaints.push(element.plains);
            });
            this.setState({ 
              Data: {
                labels: dates,
                datasets:[
                   {
                      label: 'Nombre de réclamation envoyé',
                      data: plaints ,
                      backgroundColor: '#C4B7A9',
                   }
                ]
             }
             });
          })
      }
 render()
   {
      return(
        <div style={{width:"80%",marginLeft:"15%"}}>
          <Bar
            data = {this.state.Data}
            height={350}
            width={0}
            options = {{ maintainAspectRatio: false,
                title:{
                display: true,
                text: "Performances",
                fontSize: 25,
                fontColor: "#C4B7A9"
               
                }}} />
        </div>
      )
   }
}
if (document.getElementById('chartadmin')) {
    ReactDOM.render(<ChartAdmin />, document.getElementById('chartadmin'));
}
