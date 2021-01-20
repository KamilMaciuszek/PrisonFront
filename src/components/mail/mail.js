import axios from 'axios';
import React, {Component} from 'react';

class Mail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ToEmail: ''
        }
        this.send = this.send.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    send = e => {
        e.preventDefault();


        axios.post('RegisterMail/send', this.state)
        .then(
            res => {
                console.log(res)
            }
        ).catch (
            err =>{
                console.log(err)
            }
        )
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }

    render() {
        return (
            <div className="auth-wrapper">
                  <div className="auth-inner">
            <form>
                <h3>Send Invitation</h3>
                <div className="form-group">
                    <label>E-mail</label>
                    <input type="text" name="ToEmail" className="form-control" placeholder="Email"
                    onChange={this.onChange} />
                </div>

                <div className="form-group">
                    <button className="btn btn-primary btn-block" onClick={this.send}>Send</button>
                </div>
            </form>
            </div>
            </div>
        )
    }
}

export default Mail;