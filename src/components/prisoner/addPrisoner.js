import React, { Component } from "react";
import axios from 'axios';

class AddPrisoner extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            forname: '',
            pesel: '',
            address: '',
            pass: true,
            behaviour: '',
            isolated: true,
            idCell: ''
        }
        this.prisonerAdd = this.prisonerAdd.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    prisonerAdd = e =>  {
        e.preventDefault();

        axios.post('Prisoner', this.state)
        .then(
            res =>{
                console.log(res)
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
                <h3>Add Prisoner</h3>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="name" className="form-control" placeholder="Name"
                    onChange={this.onChange} />
                </div>

                <div className="form-group">
                    <label>Forname</label>
                    <input type="text" name="forname" className="form-control" placeholder="Forname" 
                    onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Pesel</label>
                    <input type="text" name="pesel" className="form-control" placeholder="Pesel" 
                    onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Address</label>
                    <input type="text" name="address" className="form-control" placeholder="Address" 
                    onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Pass</label>
                    <input type="checkbox" name="pass" className="form-control" 
                    checked={this.state.pass}
                    onChange={this.handleInputChange}/>
                </div>

                <div className="form-group">
                    <label>Behaviour</label>
                    <input type="text" name="behaviour" className="form-control" placeholder="Behaviour" 
                    onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Isolated</label>
                    <input type="checkbox" name="isolated" className="form-control" 
                    checked={this.state.isolated}
                    onChange={this.handleInputChange}/>
                </div>

                <div className="form-group">
                    <label>Cell ID</label>
                    <input type="text" name="idCell" className="form-control" placeholder="Cell ID" 
                    onChange={this.onChange}/>
                </div>

                <div className="form-group">
                <button className="btn btn-primary btn-block" onClick={this.prisonerAdd}>Add Prisoner</button>
                </div>
            </form>
            </div>
            </div>
        )
    }
}
export default AddPrisoner;