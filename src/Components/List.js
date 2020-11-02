import React from 'react'
import { ListGroup } from 'reactstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

// COMPONENTS
import Job from './Job'

export default function List (props) {
    let jobs = props.jobs.map(job => {
        return <Job
                id={job.id}
                key={job.id}

                company={job.company}
                logo={job.logo}
                new={job.new}
                featured={job.featured}
                position={job.position}
                role={job.role}
                level={job.level}
                postedAt={job.postedAt}
                contract={job.contract}
                location={job.location}
                languages={job.languages}
                tools={job.tools}

                favorites={props.favorites}
                addFavorite={props.addFavorite}
                />
        })
    return (
        <div className='container my-5'>
            <div className="d-flex justify-content-end">
            <Link to="/favorites"> View Favorites </Link>
            </div>
            <h3>Latest Jobs</h3>
            <div className='row'>
                <div className='col-md'>
                    <ListGroup id="listgroup">
                        {jobs}
                    </ListGroup>
                </div>
            </div>
        </div>
    )
}
