import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import apiClient from '../../Services/api';

  

class JobPosting extends Component {

  constructor (props) {
    super(props)
    this.state = {
        author_id: '',
        company: '',
        //   logo: '',
        position: '',
        role: '',
        level: '',
        contract: '',
        location: '',
        languages: '',
        tools: ''
    }

    this.onChangeValue = this.onChangeValue.bind(this);
    this.onChangeValueArrayLanguages = this.onChangeValueArrayLanguages.bind(this);
    this.onChangeValueArrayTools = this.onChangeValueArrayTools.bind(this);

    this.onSubmitButton = this.onSubmitButton.bind(this);
  }

    onChangeValueArrayLanguages(e) {
        let incomingLanguages = e.target.value;
        this.setState(({
            languages: [...incomingLanguages.split(",")],
          }));
    }

    onChangeValueArrayTools(e) {
        let incomingTools = e.target.value;
        this.setState(({
            tools: [...incomingTools.split(",")],
          }));

    }

    onChangeValue(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmitButton(e) {
        e.preventDefault();
        console.log(this.state);
        apiClient.get('api/user')
            .then(response => {
            apiClient.post('api/job-postings', {
                author_id: response.data.id,
                company: this.state.company,
                // logo: this.state.logo,
                position: this.state.position,
                role: this.state.role,
                level: this.state.level,
                contract: this.state.contract,
                location: this.state.location,
                languages: this.state.languages,
                tools: this.state.tools
            })

            .then(function (response) {
                console.log(response.data);
            })

            .catch(function (error) {
                console.log(error);
            });

            this.setState({
                company: '',
                // logo: '',
                position: '',
                role: '',
                level: '',
                contract: '',
                location: '',
                languages: [],
                tools: []
            })
        })
    }

  render () {
        return (
        <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={this.onSubmitButton}>
                            <strong>Company:</strong>
                            <input type="text" name="company" className="form-control" value={this.state.company} onChange={this.onChangeValue} />
                            {/* <strong>Logo:</strong>
                            <input type="file" name="logo" className="form-control" value={this.state.logo} onChange={this.onChangeValue} /> */}
                            <strong>Position:</strong>
                            <input type="text" name="position" className="form-control" value={this.state.position} onChange={this.onChangeValue} />
                            <strong>Role</strong>
                            <select name="role" className="form-control" value={this.state.role} onChange={this.onChangeValue}>
                                <option value="" disabled className="text-muted">Select Role...</option>
                                <option value="Frontend">Frontend</option>
                                <option value="Backend">Backend</option>
                                <option value="Fullstack">Fullstack</option>
                            </select>
                            <strong>Level</strong>
                            <select name="level" className="form-control" value={this.state.level} onChange={this.onChangeValue}>
                                <option value="" disabled className="text-muted">Select Level...</option>
                                <option value="Junior">Junior</option>
                                <option value="Middleweight">Middleweight</option>
                                <option value="Senior">Senior</option>
                            </select>
                            <strong>Contract</strong>
                            <select name="contract" className="form-control" value={this.state.contract} onChange={this.onChangeValue}>
                                <option value="" disabled className="text-muted">Select Contract Type...</option>
                                <option value="Part Time">Part Time</option>
                                <option value="Full Time">Full Time</option>
                                <option value="Freelance">Freelance</option>
                            </select>
                            <strong>Location</strong>
                            <input type="text" name="location" className="form-control" value={this.state.location} onChange={this.onChangeValue} />
                            <strong>Languages</strong>
                            <input type="text" name="languages" className="form-control" value={this.state.languages} onChange={this.onChangeValue/*this.onChangeValueArrayLanguages*/} />
                            <strong>Tools</strong>
                            <input type="text" name="tools" className="form-control" value={this.state.tools} onChange={this.onChangeValue/*this.onChangeValueArrayTools*/} />
                            <button className="btn btn-success">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>)
    }
}

export default JobPosting;

if (document.getElementById('job-posting')) {

    ReactDOM.render(<JobPosting />, document.getElementById('job-posting'));

}