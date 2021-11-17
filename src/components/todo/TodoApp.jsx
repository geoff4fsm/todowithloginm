import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, useParams,  useHistory } from 'react-router-dom'
import { withRouter } from 'react-router'
import AuthenticationService from './AuthenticationService.js'
import HeaderComponent from './HeaderComponent.jsx'
import LoginComponent from './LoginComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import ListTodosComponent from './ListTodosComponent.jsx'
import ErrorComponent from './ErrorComponent.jsx'
import TodoComponent from './TodoComponent.jsx'

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <HeaderComponent />
                    <Routes>
                        <Route path="/" element={<LoginComponent />} />
                        <Route path="/login" element={<LoginComponent />} />
                        <AuthenticatedRoute path="/welcome/:name" element={<WelcomeComponent />} />
                        <AuthenticatedRoute path="/todos/:id" element={<TodoComponent />} />
                        <AuthenticatedRoute path="/todos" element={<ListTodosComponent />} />
                        <AuthenticatedRoute path="/logout" element={<LogoutComponent />} />
                        
                        <Route element={<ErrorComponent />} />
                    </Routes>
                    <FooterComponent />
                </Router>
                {/* <LoginComponent />
                <WelcomeComponent /> */}
            </div>
        )
    }
}

export default TodoApp;
