// LIBRARIES
import React from 'react';
import { ListGroupItem, Button } from 'reactstrap';

// COMPONENTS
import Toggle from './Toggle.js';
import JobCard from './JobCard'


export default function Job(props) {
    // console.log(props.currentAuthorId, props.author_id)
    return (
        <div>
            <ListGroupItem>
                <Toggle>
                    {( {on, toggle} ) => ( 
                        <div>
                            <div className="outer-section">
                                <Button color='link' onClick={toggle}>
                                    {props.position} at {props.company}
                                </Button>
                            </div>
                            {on &&
                                <div>
                                    <JobCard
                                        id={props.id}
                                        author_id={props.author_id}
                                        company={props.company}
                                        logo={props.logo}
                                        new={props.new}
                                        featured={props.featured}
                                        position={props.position}
                                        role={props.role}
                                        level={props.level}
                                        postedAt={props.postedAt}
                                        contract={props.contract}
                                        location={props.location}
                                        languages={props.languages}
                                        tools={props.tools}

                                        favorites={props.favorites}
                                        addFavorite={props.addFavorite}

                                        currentAuthorId={props.currentAuthorId}
                                        deleteJob={props.deleteJob}
                                        editJob={props.editJob}
                                    />
                                </div>
                                }
                        </div>)}
                </Toggle>
            </ListGroupItem>
        </div>
    )
}
