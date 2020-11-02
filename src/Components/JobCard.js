// LIBRARIES
import React from 'react';
import { Button, Card, CardBody, CardTitle } from 'reactstrap';
import { faHeart, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function JobCard(props) {
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

                    <p className="d-flex justify-content-around align-items-center">
                        <Button color="primary">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </Button>

                        <Button color="primary">
                            <FontAwesomeIcon icon={faPhone} />
                        </Button>

                        <FontAwesomeIcon icon={faHeart} color={ props.favorites.includes(props.id) ? 'red': "black" } onClick={() => props.addFavorite(props.id)} className="fa-lg" />
                    </p>

                    </div>
                </div>
            </Card>
        </div>
    )
}
