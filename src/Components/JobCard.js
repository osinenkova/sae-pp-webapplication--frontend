// LIBRARIES
import React from 'react';
import { Button, Card, CardBody, CardTitle } from 'reactstrap';
import { faHeart, faEnvelope, faPhone, faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Link } from 'react-router-dom';


// COMPONENTS
import Modal from './Modal'
import apiClient from '../Services/api'

export default function JobCard(props) {
    const history = useHistory();
    const redirect = (id) => {
        apiClient.get(`/api/job-postings/${id}`)
        .then(response => {
            history.push(`/job-posting/${response.data.id}`)
        })
    }
    return (
        <div>
            <Card>
                <div className="row mt-3">
                    <div className="col-6">
                        <CardTitle className="ml-4 font-weight-bold">
                            <span> {props.contract} | {props.location}  </span>
                        </CardTitle>
                        <CardBody>
                            <div className="text-muted px-2 d-flex flex-column">
                            <div><img src={props.logo} /> <strong>{props.company} </strong></div>
                            <div>Role: {props.role}</div>
                            <div>Level: {props.level}</div>
                            <div>Languages: {props.languages}</div>
                            <div>{props.tools ? props.tolls : null}</div>
                            </div>
                        </CardBody>
                    </div>
                    <div className="col-6 d-flex flex-column align-self-center">
                        <p className="d-flex justify-content-center"> {props.new ? <strong>new, &#160;</strong> : null} posted {props.postedAt} </p>

                        <div className="d-flex justify-content-around align-items-center">
                            <Modal buttonIcon={faEnvelope} color={'primary'} />
                            <Button color="primary">
                                <FontAwesomeIcon icon={faPhone} />
                            </Button>
                            <FontAwesomeIcon icon={faHeart} color={ props.favorites.includes(props.id) ? 'red': "black" } onClick={() => props.addFavorite(props.id)} className="fa-lg" />
                        </div>
                        { props.currentAuthorId === props.author_id  ?
                        <div className="mt-5 col-3 align-self-end d-flex justify-content-around align-items-center">
                            <FontAwesomeIcon icon={faTrash} className="fa-lg" onClick={() => props.deleteJob(props.id)}  />
                            {/* <Link to={`/job-update/${props.id}`}> */}
                                <FontAwesomeIcon icon={faEdit} className="fa-lg" onClick={() => history.push(`/job-update/${props.id}`)} />
                            {/* </Link> */}
                        </div>
                        : null
                        }

                    </div>
                </div>
            </Card>
        </div>
    )
}
