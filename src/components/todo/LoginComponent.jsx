import React, { Component } from "react";
import AuthenticationService from "./AuthenticationService";
import { BrowserRouter as Router, Route, Routes, Redirect, useParams, useHistory } from 'react-router-dom'
import { withRouter } from 'react-router'

class LoginComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }

        this.handleChange = this.handleChange.bind(this)
        // this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)

    }

    handleChange = (event) => {
        // console.log(event.target.value)
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
    }

    // handlePasswordChange = (event) => {
    //     console.log(event.target.value)
    //     this.setState(
    //         {
    //             password: event.target.value
    //         }
    //     )
    // }

    loginClicked = (props) => {
        // console.log(this.state)
        // if (this.state.username === 'Invictus65' && this.state.password === 'dummy') {
        //     AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
        //     this.props.navigate(`/welcome/${this.state.username}`)
            // this.setState({ showSuccessMessage: true })
            // this.setState({ hasLoginFailed: false })
        // } else {
        //     console.log('Failed')
        //     this.setState({ hasLoginFailed: true })
        //     this.setState({ showSuccessMessage: false })
        // }

        AuthenticationService
        .executeBasicAuthenticationService(this.state.username, this.state.password)
        .then((response) => {
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
            this.props.navigate(`/welcome/${this.state.username}`)
        }).catch( () => {
            this.setState({showSuccessMessage: false })
            this.setState({hasLoginFailed: true })
        })

    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} /> */}
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Successful</div>}
                    User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        )
    }
}
export default LoginComponent