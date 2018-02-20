import React, { Component } from 'react';
import { render } from 'react-dom';
import About from './about';
import { Link } from 'react-router-dom';
import AuthButton from './auth/authButton';
import Login from './auth/login';

class NavBar extends Component {

    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Betsy Bailey</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item" href="#">
                                <Link to="/about" className="nav-link">About</Link>
                                <span className="sr-only">(current)</span>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/posts">Archive</Link>
                            </li>
                        </ul>
                        <ul>
                        <li className="navbar-text">
                            <Link className="nav-link" to="/adminPortal">Admin Portal</Link>
                        </li>
                        <li className="navbar-text">
                            <AuthButton className="nav-link" />
                         
                        </li>
                        </ul>
                    </div>
                </nav>
            </React.Fragment>
        )

    }
}
export default NavBar;