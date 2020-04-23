import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { Link, withRouter } from 'react-router-dom'
import playroomLogo from '../Landing/img/logo.png';

class Nav extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        const Nav = styled.nav`
        height: 50px;
        font-family: Helvetica, Arial, sans-serif;
        img {
            width: 170px;
            height : 35px;
            
        }
        .logo {
            display: inline-block;
            margin: 8px 0 0 -15px;
        }`;

        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <Nav>
                        <a href={"/dashboard"} className="logo">
                            <img src={playroomLogo} alt="Playroom Logo" />
                        </a>
                    </Nav>
                    <button className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbar1"
                        aria-controls="navbar1"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-conten-md-center" id="navbar1">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/dashboard">Home</Link>
                            </li>
                        </ul>

                    </div>
                </nav>
            </div>
            
        )
    }
}
export default withRouter(Nav);

