import React, { Component } from "react";
import axios from 'axios';

class GetPass extends Component {
    
    state = {
        Pass:[],
    };

    async componentDidMount() {
        await axios.get('Pass').then(
            res => {
                this.setState({
                    Pass: res.data
                    
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
            
            <ul className="text-info">{this.state.Pass.map(Pass => (
                <li key={Pass.id}>{Pass.startDate} || {Pass.endDate} || {Pass.idPrisoner}</li> 
            ))}</ul>
            </div>
            </div>
        );
    }
}

export default GetPass;