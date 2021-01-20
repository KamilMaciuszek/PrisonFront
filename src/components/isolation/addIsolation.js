import react, { Component } from 'react';
import axios from 'axios';

import "react-datepicker/dist/react-datepicker.css";

class addIsolation extends Component {
    constructor(props){
        super(props);
        this.state = {
            startDate: '',
            endDate: '',
            idPrisoner: '',
        }
        this.add = this.add.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    add = e =>  {
        e.preventDefault();

        axios.post('Isolation', this.state)
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
            <div className="auth-wrapper">
                  <div className="auth-inner">
            <form>
                <h3>Add Isolation</h3>
                <div className="form-group">
                    <label>Prisoner ID</label>
                    <input type="text" name="idPrisoner" className="form-control" placeholder="Prisoner ID"
                    onChange={this.onChange} />
                </div>

                <div className="form-group">
                    <label>Start date</label>
                    <input type="date" name="startDate" className="form-control"
                    onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>End date</label>
                    <input type="date" name="endDate" className="form-control"
                    onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <button className="btn btn-primary btn-block" onClick={this.add}>Add Isolation</button>
                </div>
            </form>
            </div>
            </div>
        )
    }
}

export default addIsolation;