import React, { Component } from "react";
import axios from 'axios';

class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            userName: '',
            email: '',
            password: '',
            name: '',
            forname: '',
            inviteCode: '',
        }
        this.signupUser = this.signupUser.bind(this);
        this.signupAdmin = this.signupAdmin.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    signupUser = e =>  {
        e.preventDefault();

        axios.post('Authentication/register', this.state)
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

    signupAdmin = e =>  {
        e.preventDefault();

        axios.post('Authentication/register-admin', this.state)
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

    render() {
        return (
            <div className="auth-wrapper">
                  <div className="auth-inner">
            <form>
                <h3>Sign Up</h3>
                <div className="form-group">
                    <label>User Name</label>
                    <input type="text" name="userName" className="form-control" placeholder="User Name"
                    onChange={this.onChange} />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email" className="form-control" placeholder="Email" 
                    onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" className="form-control" placeholder="Password" 
                    onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="name" className="form-control" placeholder="Name" 
                    onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Forname</label>
                    <input type="text" name="forname" className="form-control" placeholder="Forname" 
                    onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Invite Code</label>
                    <input type="text" name="inviteCode" className="form-control" placeholder="Invite Code" 
                    onChange={this.onChange}/>
                </div>
                <div className="form-group">
                <button className="btn btn-primary btn-block" onClick={this.signupUser}>Sign as User</button>
                <button className="btn btn-success btn-block" onClick={this.signupAdmin}>Sign as Admin</button>
                </div>
            </form>
            </div>
            </div>
        )
    }
}
export default Register;