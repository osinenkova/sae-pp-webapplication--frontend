import React from 'react';
import { useHistory } from "react-router-dom";

function Dashboard(props) {
    return (
        <div>
            {props.loggedIn ? <p>Dashboard</p> : null }
        </div>
    )
}

export default Dashboard;
