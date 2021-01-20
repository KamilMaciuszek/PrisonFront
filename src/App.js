import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/auth/login';
import Register from './components/auth/register';
import Navigation from './components/nav/nav'
import Home from './components/home/home';
import { Component } from 'react';
import React from 'react';
import axios from 'axios';
import GetCells from './components/cells/getCells';
import DeleteCell from './components/cells/deleteCell';
import Mail from './components/mail/mail';
import AddPrisoner from './components/prisoner/addPrisoner';
import GetPrisoner from './components/prisoner/getPrisoners';
import addIsolation from './components/isolation/addIsolation';
import addPunish from './components/punishments/addPunish';
import deletePunish from './components/punishments/deletePunish';
import deletePrisoner from './components/prisoner/deletePrisoner';
import GetPass from './components/pass/getPass';
import DeletePass from './components/pass/deletePass';
import addPass from './components/pass/addPass';
import GetIsolation from './components/isolation/getIsolation';
import DeleteIsolation from './components/isolation/deleteIsolation';
import addCell from './components/cells/addCell';


export default class App extends Component {

  state = {};

  componentDidMount= () =>{
    axios.get('UserInfo').then(
        res => {
            this.setUser(res.data);
            console.log(res);
        },
        err => {
            console.log(err);
        }
    )
};

setUser = user => {
   this.setState({
    user: user
  });
}

  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navigation user={this.state.user} setUser={this.setUser} />
        <Switch>
        <Route exact path='/' component={()=> <Home user={this.state.user} />}/>
        <Route exact path='/login' component={()=> <Login setUser={this.setUser}/>} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/getcell' component={GetCells} />
        <Route exact path='/deletecell' component={DeleteCell} />
        <Route exact path='/addcell' component={addCell} />
        <Route exact path='/mail' component={Mail} />
        <Route exact path='/addprisoner' component={AddPrisoner} />
        <Route exact path='/getprisoners' component={GetPrisoner}/>
        <Route exact path='/deleteprisoner' component={deletePrisoner} />
        <Route exact path='/addisolation' component={addIsolation} />
        <Route exact path='/getisolation' component={GetIsolation} />
        <Route exact path='/deleteisolation' component={DeleteIsolation} />
        <Route exact path='/addpunish' component={addPunish} />
        <Route exact path='/deletepunish' component={deletePunish} />
        <Route exact path='/getpass' component={GetPass} />
        <Route exact path='/addpass' component={addPass} />
        <Route exact path='/deletepass' component={DeletePass} />
        </Switch>
        </div> 
      </BrowserRouter>
      
    );
  }
  
}

function refreshPage() {
  window.location.reload(false);
}
