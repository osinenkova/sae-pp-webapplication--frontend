import React, { useState, useEffect } from 'react';

function Dashboard(props) {

    // useEffect(() => {
    //     props.auth()
    // })

    return (
        <div>
            {props.loggedIn ? <p>Dashboard</p> : null }
        </div>
    )
}

export default Dashboard;
