import React, { Component } from "react";
import axios from 'axios';

class GetCells extends Component {
    
    state = {
        cells:[],
    };

    async componentDidMount() {
        await axios.get('PCells').then(
            res => {
                this.setState({
                    cells: res.data
                    
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
            <ul>{this.state.cells.map(cell => (
                <li key={cell.id}>{cell.beds}</li> 
            ))}</ul>
        );
    }
}

export default GetCells;