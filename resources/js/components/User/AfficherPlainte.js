import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class AfficherPlainte extends Component {

  constructor(){
    super();
    this.state={
        plaintes:[],
        priorites:[]
    }
}
componentDidMount(){
    axios.get('http://localhost:8000/listPlainte')
    .then(response=>{
        this.setState({plaintes:response.data})
    });
    axios.get('http://localhost:8000/listPriorite')
    .then(response=>{
        this.setState({priorites:response.data})
    });
}
  render(){
      return (
          <div>
              <table class="table table-dark">  
                  <tbody>
              {
                  this.state.plaintes.map(plainte=>{
                      return (
                          <div>
                            <tr>
                                <td>{plainte.id}</td>
                            </tr>
                          </div>
                      )
                  })
              }
              {
                  this.state.priorites.map(priorite=>{
                      return (
                          <div>
                            <tr>
                                <td>{priorite.type_priorite}</td>
                            </tr>
                          </div>
                      )
                  })
              }
                       
                  </tbody>
              </table>
          </div>
          );
  }
}
if (document.getElementById('afficherplainte')) {
    ReactDOM.render(<AfficherPlainte />, document.getElementById('afficherplainte'));
}
