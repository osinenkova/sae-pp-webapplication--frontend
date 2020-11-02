import React from 'react'
import { ListGroup } from 'reactstrap'

//COMPONENTS
import Job from '../Job'


export default function Favorites(props) {
    let favorites = props.favorites.map(favorite => {
        // TODO: render a job list based on favorite.id, job.id === favorite.id
        let idArr = props.jobs.map(job => job.id);
        console.log(idArr)
    return <Job
            id={favorite.id}
            key={favorite.id}

            company={favorite.company}
            logo={favorite.logo}
            new={favorite.new}
            featured={favorite.featured}
            position={favorite.position}
            role={favorite.role}
            level={favorite.level}
            postedAt={favorite.postedAt}
            contract={favorite.contract}
            location={favorite.location}
            languages={favorite.languages}
            tools={favorite.tools}

            favorites={props.favorites}
            addFavorite={props.addFavorite}
            />
    })
    return (
        <div className="container mt-5">
            <h3>Favorites</h3>
            <div className='row'>
                <div className='col-md'>
                    <ListGroup id="listgroup">
                    {favorites.length ? favorites : <p>Empty</p>}
                    </ListGroup>
                </div>
            </div>
        </div>
    )
}
