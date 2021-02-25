import React, { Component } from 'react'
import { withRouter } from "react-router";
import apiClient from '../../Services/api';


class JobUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            company: '',
            position: '',
            role: '',
            level: '',
            contract: '',
            location: '',
            languages: '',
            tools: ''
        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillMount() {
        this.getJobDetails();
    }

        getJobDetails() {
            let url = window.location.pathname;
            let jobId = url.substring(url.lastIndexOf('/') + 1);
            apiClient.get(`/api/job-postings/${jobId}`)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    company: response.data.company,
                    position: response.data.position,
                    role: response.data.role,
                    level: response.data.level,
                    contract: response.data.contract,
                    location: response.data.location,
                    languages: response.data.languages,
                    tools: response.data.tools
                 }, () => console.log(this.state))
            })
            .catch(err => console.log(err));

        }

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();
        apiClient.put(`api/job-postings/${this.state.id}`, {
            company: this.state.company,
            position: this.state.position,
            role: this.state.role,
            level: this.state.level,
            contract: this.state.contract,
            location: this.state.location,
            languages: this.state.languages,
            tools: this.state.tools
         })
        .then(response => {
            console.log(response);
        }).catch(err => console.log(err));
    }

  render () {
        return (
        <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h3>Update a Job..</h3>
                        <form onSubmit={this.onSubmit}>
                            <strong>Company:</strong>
                            <input type="text" name="company" className="form-control" defaultValue={this.state.company} onChange={this.handleInputChange} />
                            {/* <strong>Logo:</strong>
                            <input type="file" name="logo" className="form-control" value={this.state.logo} onChange={this.onChangeValue} /> */}
                            <strong>Position:</strong>
                            <input type="text" name="position" className="form-control" defaultValue={this.state.position} onChange={this.handleInputChange} />
                            <strong>Role</strong>
                            <select name="role" className="form-control" defaultValue={this.state.role} onChange={this.handleInputChange} >
                                <option value="" disabled className="text-muted">Select Role...</option>
                                <option value="Frontend">Frontend</option>
                                <option value="Backend">Backend</option>
                                <option value="Fullstack">Fullstack</option>
                            </select>
                            <strong>Level</strong>
                            <select name="level" className="form-control" defaultValue={this.state.level} onChange={this.handleInputChange}>
                                <option value="" disabled className="text-muted">Select Level...</option>
                                <option value="Junior">Junior</option>
                                <option value="Middleweight">Middleweight</option>
                                <option value="Senior">Senior</option>
                            </select>
                            <strong>Contract</strong>
                            <select name="contract" className="form-control" defaultValue={this.state.contract} onChange={this.handleInputChange}>
                                <option value="" disabled className="text-muted">Select Contract Type...</option>
                                <option value="Part Time">Part Time</option>
                                <option value="Full Time">Full Time</option>
                                <option value="Freelance">Freelance</option>
                            </select>
                            <strong>Location</strong>
                            <input type="text" name="location" className="form-control"  defaultValue={this.state.location} onChange={this.handleInputChange} />
                            <strong>Languages</strong>
                            <input type="text" name="languages" className="form-control" defaultValue={this.state.languages} onChange={this.handleInputChange} />
                            <strong>Tools</strong>
                            <input type="text" name="tools" className="form-control"  defaultValue={this.state.tools} onChange={this.handleInputChange} />
                            <button className="btn btn-success">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>)
    }
}


export default JobUpdate;