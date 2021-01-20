import React, { Component } from "react";
import axios from 'axios';

class GetIsolation extends Component {
    
    state = {
        Isolation:[],
    };

    async componentDidMount() {
        await axios.get('Isolation').then(
            res => {
                this.setState({
                    Isolation: res.data
                    
                });
                console.log(res)
            },
            err => {
                console.log(err);
            }
        )
    }



    render() {
        return(
            <div className="auth-wrapper">
                  <div className="auth-inner">
            
            <ul className="text-info">{this.state.Isolation.map(Isolation => (
                <li key={Isolation.id}>{Isolation.startDate} || {Isolation.endDate} || {Isolation.idPrisoner}</li> 
            ))}</ul>
            </div>
            </div>
        );
    }
}

export default GetIsolation;