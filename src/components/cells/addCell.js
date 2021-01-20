import react, { Component } from 'react';
import axios from 'axios';

class addCell extends Component {
    constructor(props){
        super(props);
        this.state = {
            beds: '',
            idCellType: ''
        }
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    login = e =>  {
        e.preventDefault();

        axios.post('PCells', this.state)
        .then(
            res =>{
                console.log(res);
            }
        ).catch (
            err =>{
                console.log(err)
            }
        )
        console.log(this.state);
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }


    render() {
        return (
            <form>
                <div className="auth-wrapper">
                <div className="auth-inner">
                <h3>Add Cell</h3>
                <div className="form-group">
                    <label>Number of beds</label>
                    <input type="text" name="beds" className="form-control" placeholder="Number of beds"
                    onChange={this.onChange} />
                </div>

                <div className="form-group">
                    <label>Cell type ID</label>
                    <input type="text" name="idCellType" className="form-control" placeholder="Cell type ID"
                    onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <button className="btn btn-primary btn-block" onClick={this.login}>Create Cell</button>
                </div>
                </div>
                </div>
            </form>
        )
    }
}

export default addCell