import React, { Component } from "react";
import axios from 'axios';
import { Redirect } from "react-router-dom";

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            userName: '',
            password: '',
            loggedIn: false
        }
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    login = e =>  {
        e.preventDefault();

        axios.post('Authentication/login', this.state)
        .then(
            res =>{
                localStorage.setItem('token', res.data.token);
                this.setState({
                    loggedIn: true
                });
                this.props.setUser(res.data.user);
            }
        ).catch (
            err =>{
                console.log(err)
            }
        )
        console.log(this.state);
        <Redirect to={'/'} />
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }



    render() {
        if(this.state.loggedIn) {
            return (<Redirect to={'/'} />);
        }


        return (
            <div className="auth-wrapper">
                  <div className="auth-inner">
                    <form>
                        
                        <h3>Login</h3>
                        <div className="form-group">
                            <label>User Name</label>
                            <input type="text" name="userName" className="form-control" placeholder="User Name"
                            onChange={this.onChange} />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" name="password" className="form-control" placeholder="Password"
                            onChange={this.onChange}/>
                        </div>

                        <div className="form-group">
                            <button className="btn btn-primary btn-block" onClick={this.login}>Login</button>
                        </div>
                    </form>
                    </div>
                    </div>
        )
    }
}

export default Login;