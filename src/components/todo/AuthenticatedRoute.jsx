import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService'
import { BrowserRouter as Router, Route, Routes,  useParams, useHistory, Navigate } from 'react-router-dom'
import { withRouter } from 'react-router'

export default class AuthenticatedRoute extends Component {
    render() {
        if (AuthenticationService.isUserLoggedIn()) {
            return <Route {...this.props} />
        } else {
            return <Navigate to='/login' />
        }
    }
}
