import React, { Component } from 'react';
import './Header.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class HeaderComponent extends Component {
    render () {
        return (
            // <div className="header-container">
            //     <div className="header mt-10">
            //         <h1>HELLO</h1>
            //     </div>
            // </div>
            <div className="header-container jumbotron jumbotron-fluid row">
                <div className="container mt-6 col-5">
                    <h1>Custom Appointment Forms Adapting to your Services</h1>
                    <Router>
                        <div className="d-flex justify-content-around row">
                            <Link className="btn btn-primary col-2" to="/register">Register</Link>
                            <Link className="btn btn-primary col-2" to="/login">Login</Link>
                        </div>
                    </Router>
                </div>
            </div>
        )
    }
}

export default HeaderComponent;