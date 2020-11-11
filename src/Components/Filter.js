// LIBRARIES
import React from 'react';
import { Form, InputGroup, Input } from 'reactstrap';

export default function Filter(props) {
    return (
        <div className="container mt-5">
            <Form>
            <InputGroup>
                <Input placeholder='Filter results..'
                    className="mb-5"
                    onChange={props.handleSearchFieldChange}
                />
            </InputGroup>
            </Form>
        </div>
    )
}
