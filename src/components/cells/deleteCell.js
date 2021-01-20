import React, { Component } from "react";
import axios from 'axios';

class DeleteCell extends Component {

    state = {
        id: '',
        }

    handleSubmit = e => {
        e.preventDefault();

        axios.delete('PCell/${id}')
        .then(res=> {
            console.log(res);
            console.log(res.data);
        })
        .catch(
            err => {
                console.log(err);
            }
        )
    }
    handleChange = e => {
        this.setState({id: e.target.value});
    }

    render() {
        return(

            <div className="auth-wrapper">
            <div className="auth-inner">
            <form onSubmit={this.handleSubmit}>
                <h3>Delete Cell</h3>
                <div className="form-group">
                <label>Cell ID:</label>
                <input type='text' name="id" onChange={this.handleChange} />
                </div>
                <button className="btn btn-danger btn-block" type="submit">Delete</button>
            </form>
            </div>
            </div>
        )
    }
}

export default DeleteCell;