// LIBRARIES
import React from "react";
import { Form, FormGroup, Input, Label } from 'reactstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function Home(props) {
    return (
        <div className="container mt-5">
            <h1> Choose a keyword: </h1>
            <div className="d-flex justify-content-between mt-5">
                <Link to="/dashboard"> Senior </Link>
                <Link to="/dashboard"> Front-end </Link>
                <Link to="/dashboard"> Fullstack </Link>
                <Link to="/dashboard"> Junior </Link>
                <Link to="/dashboard"> Software </Link>
            </div>
        </div>
    )
}
