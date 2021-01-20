import React, { Component } from 'react';
import { Link } from 'react-router-dom'


export default class Home extends Component {



    render(){
        if(this.props.user){
            return (
                <div></div>
            )
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <p>
                            <Link to={'login'}><div className="btn btn-sq-lg btn-primary mr-2">
                                <p> Zaloguj Się</p>
                                 </div> </Link>
                           <Link to={'register'}> <div className="btn btn-sq-lg btn-success ml-2">
                                <p>Zarejestruj Się</p>
                            </div></Link>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
