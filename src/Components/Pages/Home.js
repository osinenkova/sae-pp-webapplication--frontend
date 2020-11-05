// LIBRARIES
import React from "react";
import { Button } from 'reactstrap';

export default function Home(props) {
    return (

        <div className="container mt-5">
            <h1> Choose a keyword: </h1>
            <div className="d-flex justify-content-between mt-5">
                <Button onClick={()=>props.filtered('Senior',  props.jobs)}> Senior results </Button>
                <Button onClick={()=>props.filtered('Front-end',  props.jobs)}> Front-end </Button>
                <Button onClick={()=>props.filtered('Fullstack',  props.jobs)}> Fullstack </Button>
                <Button onClick={()=>props.filtered('Junior',  props.jobs)} > Junior </Button>
                <Button onClick={()=>props.filtered('Software',  props.jobs)}> Software </Button>
            </div>
        </div>
    )
}
