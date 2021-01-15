import React from 'react'
import { ListGroup } from 'reactstrap'

//COMPONENTS
import Job from '../Job'


export default function Favorites(props) {
    // defined favorites id array >>>

    const filtered = props.jobs.filter((job) => props.favorites.includes(job.id))

    let favorites = filtered.map(favorite => {
        console.log(favorite)
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
            addFavorite={props.addFavorite} // props.addFavorite is not a function
            />
    })
    return (
        <div className="container mt-5">
            <h3>Favorites</h3>
            <div className='row'>
                <div className='col-md'>
                    <ListGroup id="listgroup">
                    {favorites.length ? favorites : <p className="text-muted">This list is empty</p>}
                    </ListGroup>
                </div>
            </div>
        </div>
    )
}
