import React, { Component } from "react";
import axios from 'axios';

class GetPrisoner extends Component {
    
    state = {
        Prisoner:[],
    };

    async componentDidMount() {
        await axios.get('Prisoner').then(
            res => {
                this.setState({
                    Prisoner: res.data
                    
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
            
            <ul className="text-info">{this.state.Prisoner.map(Prisoner => (
                <li key={Prisoner.id}>{Prisoner.name} {Prisoner.forname} {Prisoner.behavior}</li> 
            ))}</ul>
            </div>
            </div>
        );
    }
}

export default GetPrisoner;