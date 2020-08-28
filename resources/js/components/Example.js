import React, { Component } from 'react';
import ReactDOM from 'react-dom';




export default class Example extends Component{
    constructor(props) {
        super(props);
        this.onChangelivreName = this.onChangelivreName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            name: ''
        }
    }
    onChangelivreName(e) {
        this.setState({
            name: e.target.value
        });
    }
    /*onChangedescription(e) {
        this.setState({
            //description: e.target.value
            description: event.target.files[0],

        });
    }*/
    /*onChangedescription(e) {
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length)
              return;
        this.createImage(files[0]);
      }
      createImage(file) {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.setState({
            description: e.target.result
          })
        };
        reader.readAsDataURL(file);
      }*/
    onSubmit(e) {
        e.preventDefault();
        const livre = {
            name: this.state.name
        }
        console.log(livre)
        axios.post('http://localhost:8000/formSubmit',livre).then(function (response) {
            window.location = response.data.redirect;
        });
        }

    render() {
        return (
            <div style={{marginTop: 50}}>
                    <h3>Add Book</h3>
                    <form onSubmit={this.onSubmit} encType="multipart/form-data">
                        <div className="form-group">
                            <label>Add Book Name:  </label>
                            <input type="text" className="form-control" id='name' value={this.state.name} onChange={this.onChangelivreName}/>
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Add Book"/>
                        </div>
                    </form>

            </div>
        )
    }

}
if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
