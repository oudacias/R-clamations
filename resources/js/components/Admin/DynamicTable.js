import React,{ Component } from 'react';
import $ from 'jquery';
import ReactDOM from 'react-dom';
import { format } from 'date-fns';
import '../style/tableStyle.css';
import '../style/popup.css';
import '../style/notification.css'
import Notification from '../Notification/Notification'

export default class DynamicTable extends Component {
    constructor(){
        super();
        this.state={
            plaintes:[],
            priorites:[],
            pieces:[]
        }
    }
    onDelete(id){
      axios.delete('http://localhost:8000/SupprimerPlainte/'+id)
      .then(function (response) {
        window.location.reload(false);
        $("#notification-success").show()
      });
      //this.props.history.push(`/store/${this.storeInput.value}`);
  }
    componentDidMount(){
      $("#search").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("table tr").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
        $(function () {
            $('table')
              .on('click', 'th', function () {
                var index = $(this).index(),
                    rows = [],
                    thClass = $(this).hasClass('asc') ? 'desc' : 'asc';
          
                $('#ceo th').removeClass('asc desc');
                $(this).addClass(thClass);
          
                $('#ceo tbody tr').each(function (index, row) {
                  rows.push($(row).detach());
                });
          
                rows.sort(function (a, b) {
                  var aValue = $(a).find('td').eq(index).text(),
                      bValue = $(b).find('td').eq(index).text();
          
                  return aValue > bValue
                       ? 1
                       : aValue < bValue
                       ? -1
                       : 0;
                });
          
                if ($(this).hasClass('desc')) {
                  rows.reverse();
                }
          
                $.each(rows, function (index, row) {
                  $('#ceo tbody').append(row);
                });
              });
          });
        axios.get('http://localhost:8000/listPlainteAdmin')
        .then(response=>{
            this.setState({plaintes:response.data
          })
        });
    }
  render(){
    return (
      <div>
          <h1 style={{color: '#FA9E6B'}}>Tableau de réclamations</h1>
      <div>
         <img src={require("../images/search-table.png")} className="img-search"/>
      <input id="search" type="text" className="form-research"  placeholder="Rechercher : .........................................."></input>
        <table className="table-dynamic" id='ceo'>
            <thead>
                <tr>
                    <th>Date<img src={require("../images/order.png")} className="img-table"/></th>
                    <th>Nom<img src={require("../images/order.png")} className="img-table"/></th>
                    <th>Type<img src={require("../images/order.png")} className="img-table"/></th>
                    <th>Etat<img src={require("../images/order.png")} className="img-table"/></th> 
                    <th>Sujet<img src={require("../images/order.png")} className="img-table"/></th> 
                    <th>Délai<img src={require("../images/order.png")} className="img-table"/></th> 
                    <th>Priorité<img src={require("../images/order.png")} className="img-table"/></th> 
                    <th>Voire</th> 
                    <th className="supprimer">Supprimer</th>
                </tr>
            </thead>
        <tbody  id="table">
        {

                  this.state.plaintes.map(plainte=>{
                    return (
                              <tr>
                                <td className="date-td td-dynamic">{format(new Date(plainte.created_at), 'dd/MM/yyyy')}</td>
                                <td className="td-dynamic">{plainte.titre_plainte}</td>
                                <td className="td-dynamic">{plainte.type_plainte}</td>
                                <td className="td-dynamic">{plainte.etat_plainte}</td>
                                <td className="td-dynamic"><a href={"#popup" + plainte.plainte_id} className="btn popup-link">Sujet</a>
                                <div id={"popup" + plainte.plainte_id} className="popup">
                                    <a href="#" className="close">&times;</a>
                                     <p>{plainte.sujet_plainte}</p>
                                  </div>
                                  <a href="#" className="close-popup"></a>
                                </td>
                                <td className="td-dynamic">{format(new Date(plainte.delai_plainte), 'dd/MM/yyyy')}</td>
                                <td className="td-dynamic">{plainte.type_priorite}</td>
                                <td className="td-dynamic"><span><a href={plainte.lien_piece} download>{plainte.lien_piece}</a></span></td>
                                <td className="td-dynamic supprimer" style={{backgroundColor:"#C4B7A9"}} ><a onClick={this.onDelete.bind(this,plainte.plainte_id)}><img src={require("../images/minus.png")} width="30px"/></a></td>
                              </tr>
                                
                      )
                  })
              }
        </tbody>
    </table>
    </div>
    </div>
    );
  }
}
if (document.getElementById('dynamictable')) {
    ReactDOM.render(<DynamicTable />, document.getElementById('dynamictable'));
}


