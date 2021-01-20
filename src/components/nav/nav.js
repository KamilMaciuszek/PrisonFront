import react, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Dropdown, Nav, NavItem} from 'react-bootstrap'

class Navigation extends Component {

    handleLogout = () => {
        localStorage.clear();
        this.props.setUser(null);

    };


    render() {
        let buttons;

        if(this.props.user){
            buttons = (

                <ul className="navbar-nav ml-auto">
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Punishment
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item ><Link to={'/addpunish'}>Add punishment</Link></Dropdown.Item>
                            <Dropdown.Item><Link to={'/deletepunish'}>Delete punishment</Link></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Pass
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item ><Link to={'/getpass'}>View pass</Link></Dropdown.Item>
                            <Dropdown.Item><Link to={'/addpass'}>Add pass</Link></Dropdown.Item>
                            <Dropdown.Item><Link to={'/deletepass'}>Delete pass</Link></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Isolation
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item ><Link to={'/getisolation'}>View isolations</Link></Dropdown.Item>
                            <Dropdown.Item><Link to={'/addisolation'}>Add isolation</Link></Dropdown.Item>
                            <Dropdown.Item><Link to={'/deleteisolation'}>Delete isolation</Link></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Prisoner
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item ><Link to={'/getprisoners'}>View prisoners</Link></Dropdown.Item>
                            <Dropdown.Item><Link to={'/addprisoner'}>Add prisoner</Link></Dropdown.Item>
                            <Dropdown.Item><Link to={'/deleteprisoner'}>Delete prisoner</Link></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Cells
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item ><Link to={'/getcells'}>View cells</Link></Dropdown.Item>
                            <Dropdown.Item><Link to={'/addcell'}>Add cell</Link></Dropdown.Item>
                            <Dropdown.Item><Link to={'/deletecell'}>Delete cell</Link></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <li className="nav-item">
                        <Link className="nav-link" to={'/mail'}>Send mail</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/'} onClick={this.handleLogout} className="nav-link" >Logout</Link>
                    </li>
                </ul>
            )
        }
      /*  else{
            buttons = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to={'/login'}>Login</Link>
                </li>
                <li>
                    <Link className="nav-link" to={'/register'}>Sign up</Link>
                </li>
            </ul>
            )
        } */

        return (
            <nav className="navbar navbar-expand navbar-light fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to={"/"}>Home</Link>
                    <div className="collapse-nav ml-auto">
                        {buttons}
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navigation;