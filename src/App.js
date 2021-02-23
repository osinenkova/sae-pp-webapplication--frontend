// LIBRARIES
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

// DATA
import data from './Data/data.json'

// PAGES
import Home from './Components/Pages/Home'
import LatestJobs from './Components/Pages/Latest-Jobs'
import Favorites from './Components/Pages/Favorites'
import Help from './Components/Pages/Help'
import Login from './Components/Pages/Login'
import Books from './Components/Pages/Books'
import JobPosting from './Components/Pages/JobPosting'
import Dashboard from './Components/Pages/Dashboard'

// COMPONENTS
import apiClient from './Services/api'


export default class App extends Component {
  state = {
    jobs : [],
    favorites: [],
    searchJobs: '',
    sliderValue: '',
    loggedIn: false,
    currentAuthorId: false
  }

  componentDidMount() {
    // data.json
    this.setState({ jobs: data });
    // database
    apiClient.get('/api/job-postings')
    .then(response => {
      let jobs = [...this.state.jobs];
      let jobsWithPostings = jobs.concat(response.data);
      this.setState({ jobs: jobsWithPostings });
      //console.log(this.state.jobs);
    })
    .catch(error => console.error(error));
  }

  addFavorite = (id) => {
      if (this.state.favorites.includes(id)) {
        // this removes the already added contacts from favorites:
        let array = this.state.favorites.filter(favorite => favorite != id);
        this.setState({ favorites: array }, ()=>console.log(this.state.favorites))
      } else { 
        // and this adds them to the favoites list:
        let addedFavorites = [...this.state.favorites]
        addedFavorites.push(id);
        this.setState({ favorites: addedFavorites }, ()=>console.log(this.state.favorites))
      }
  }
  handleSearchFieldChange = (e) => {
    this.setState({ searchJobs: e.target.value }, () => {console.log(this.state.searchJobs)})
  }
  getValue = (e,val) => {
    console.warn(val);
      switch(val) {
        case 0:
          this.setState({sliderValue: 'Junior'}, () => {console.log(this.state.sliderValue)}) 
        break;
        case 50:
          this.setState({sliderValue: 'Midweight'}, () => {console.log(this.state.sliderValue)}) 
        break;
        case 100:
        this.setState({sliderValue: 'Senior'}, () => {console.log(this.state.sliderValue)}) 
        break;
        default:
        return ''
      }
  }
  cleanInput = () => {
    this.setState({ 
      searchJobs: '',
      sliderValue: ''
      });
  }

  login = () => {
    this.setState({ loggedIn: true });
    sessionStorage.setItem('loggedIn', true);
    apiClient.get('api/user').then(response => {
      this.setState({ currentAuthorId: response.data.id })
    })
  };

  logout = () => {
    apiClient.post('/logout').then(response => {
      if (response.status === 204) {
        this.setState({ loggedIn: false });
        this.setState({ currentAuthorId: false })
        sessionStorage.setItem('loggedIn', false);
      }
    })
  };

  render () {
  const authLink = this.state.loggedIn 
    ? <button onClick={this.logout} className="nav-link btn btn-link">Logout</button> 
    : <NavLink to='/login' className="nav-link">Anmelden</NavLink>;
    let filteredSearch = this.state.jobs.filter((data) => {
      // TODO: second filter to search in multiple keys
      // slider results
      return data.level.toLowerCase().includes(this.state.sliderValue.toLowerCase())
      // search results
       && ( data.level.toLowerCase().includes(this.state.searchJobs.toLowerCase()) ||
       data.company.toLowerCase().includes(this.state.searchJobs.toLowerCase()) ||
       data.role.toLowerCase().includes(this.state.searchJobs.toLowerCase()) );
    })
    return (
      <div className="App">
        <Router>
          <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink to="/" className="nav-link"> Home </NavLink>
                  </li>
                  { this.state.loggedIn === true ?
                  <li className="nav-item">
                    <NavLink to="/dashboard" className="nav-link"> Dashboard </NavLink>
                  </li> : null }
                  <li className="nav-item">
                    <NavLink to="/latest-jobs" className="nav-link"> Latest Jobs </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/help" className="nav-link"> Help </NavLink>
                  </li>
                  { this.state.loggedIn ? 
                  <li className="nav-item">
                  <NavLink to='/post-a-job' className="nav-link">Jobschaltung</NavLink>
                  </li> : null }
                  <li className="nav-item">
                  <NavLink to='/books' className="nav-link">Books</NavLink>
                  </li>
                  <li className="nav-item">
                    {authLink}
                  </li>
                </ul>
              </div>
            </nav>
            
            <div className="container mt-5 pt-5"></div>
              <Switch>
                <Route path="/latest-jobs">
                  <LatestJobs
                    favorites={this.state.favorites}
                    jobs={filteredSearch}
                    addFavorite={this.addFavorite}
                    handleSearchFieldChange={this.handleSearchFieldChange}
                    getValue={this.getValue}
                    // cleanInput={this.cleanInput}
                    toggleChecked={this.toggleChecked}
                    currentAuthorId={this.state.currentAuthorId}
                     />
                </Route>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path='/dashboard'>
                  <Dashboard loggedIn={this.state.loggedIn} />
                  </Route>
                <Route path="/favorites">
                  <Favorites favorites={this.state.favorites} jobs={this.state.jobs} addFavorite={this.addFavorite} />
                </Route>
                <Route path="/help">
                  <Help />
                </Route>
                <Route path='/books' exact render={props => (
                  <Books {...props} loggedIn={this.state.loggedIn} />
                )} />
                <Route path='/post-a-job' exact render={props => (
                  <JobPosting loggedIn={this.state.loggedIn} />
                )} />
                <Route path='/login' render={props => (
                  <Login {...props} login={this.login} />
                )} />
              </Switch>
          </div>
        </Router>

      </div>
    );
  }
}