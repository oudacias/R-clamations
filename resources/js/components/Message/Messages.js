import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { format } from 'date-fns';
import '../style/popup.css';







export default class Messages extends Component{
    constructor(props) {
        super(props);
        this.state = {
            messages:[]
        }
    }
    onRead(id){
        axios.get('http://localhost:8000/LireMessage/'+id)
        .then(function (response) {
          window.location.reload(false);
        });
    }
    componentDidMount(){
        axios.get('http://localhost:8000/AfficherMessage')
        .then(response=>{
            this.setState({messages:response.data})
        });
    }
    render() {
        return (
            <div>
                <h1 style={{color: '#FA9E6B',marginLeft:"17%"}}>Inbox</h1>
            <table class="table-inbox">
   
                <tbody>
                {
                    this.state.messages.map(message=>{
                        return (
                            <tr>
                        
                                <td class="inbox-td"><img src={require("../images/user.png")} class="user-inbox-td"/></td>
                                <td class="inbox-td" style={{color:"#FC6F21"}}>{message.nom} &nbsp; {message.prenom}</td>
                                <td class="inbox-td">{message.sujet}</td>
                                <td class="inbox-td">{format(new Date(message.created_at), 'dd/MM/yyyy')}</td>
                                <td class="inbox-td"><a href={"#popup" + message.message_id} className="btn popup-link"><img src={require("../images/read.png")} class="read-inbox-td"/></a>
                                <div id={"popup" + message.message_id} className="popup popup-message">
                                    <a href="#" className="close">&times;</a>
                                     <p>{message.message}</p>
                                     <a onClick={this.onRead.bind(this,message.message_id)}><p className="lu">Marquer lu</p></a>
                                  </div>
                                  <a href="#" className="close-popup"></a>
                                </td>
                            </tr> 
                        )
                    })
                }
                </tbody>
            </table>
            </div>
        )
    }
}
if (document.getElementById('messages')) {
    ReactDOM.render(<Messages />, document.getElementById('messages'));
}
