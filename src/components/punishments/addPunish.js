import react, { Component } from 'react';
import axios from 'axios';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class addPunish extends Component {
    constructor(props){
        super(props);
        this.state = {
            startDate: '',
            endDate: '',
            idPrisoner: '',
            idReason: '',
            lifery: false
        }
        this.add = this.add.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    add = e =>  {
        e.preventDefault();

        axios.post('Punishment', this.state)
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

    handleInputChange = e => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }


    render() {
        return (
            <div className="auth-wrapper">
                  <div className="auth-inner">
            <form>
                <h3>Add Punishment</h3>
                <div className="form-group">
                    <label>Prisoner ID</label>
                    <input type="text" name="idPrisoner" className="form-control" placeholder="Prisoner ID"
                    onChange={this.onChange} />
                </div>

                <div className="form-group">
                    <label>Reason ID</label>
                    <input type="text" name="idReason" className="form-control" placeholder="Reason ID"
                    onChange={this.onChange} />
                </div>

                <div className="form-group">
                    <label>Lifery</label>
                    <input type="checkbox" name="lifery" className="form-control" 
                    checked={this.state.pass}
                    onChange={this.handleInputChange}/>
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
                    <button className="btn btn-primary btn-block" onClick={this.add}>Add Pass</button>
                </div>
            </form>
            </div>
            </div>
        )
    }
}

export default addPunish;