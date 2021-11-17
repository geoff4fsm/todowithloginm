import React, { Component }from "react";
import { BrowserRouter as Router, Route, Routes, Link, Element, Redirect, useHistory } from 'react-router-dom'
import { withRouter } from 'react-router'
import AuthenticationService from "./AuthenticationService";

class HeaderComponent extends Component {
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn()
            console.log(isUserLoggedIn)
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div>
                        <ul className="navbar-nav">
                            {isUserLoggedIn && <li><Link className="nav-link" to="/welcome/Invictus65">Home</Link></li>}
                            {isUserLoggedIn && <li><Link className="nav-link" to="/todos">Todos</Link></li>}
                        </ul>
                        <ul className="navbar-nav navbar-collapse justify-content-end">
                            {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                            {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick = {AuthenticationService.logout}>Logout</Link></li>}
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }

}

export default withRouter(HeaderComponent)