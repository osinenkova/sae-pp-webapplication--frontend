import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// DATA
import data from './Data/data.json'

// COMPONENTS
import Home from './Components/Pages/Home'
import Dashboard from './Components/Pages/Dashboard'
import Favorites from './Components/Pages/Favorites'

export default class App extends Component {
  state = {
    jobs : [],
    favorites: [],
    searchJobs: '',
    filteredValue: ''
  }
  componentDidMount() {
      this.setState({ jobs: data }, ()=>console.log(this.state.jobs));
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
  filtered = (keyword, data) => {
    const count = data.filter(entry =>
      (
        Object.values(entry).some( val => typeof val === "string" && val.toLowerCase().includes(keyword.toLowerCase()) )
      ) 
    )
    this.setState({ filteredValue: count.length }, console.log( this.state.filteredValue ))
  }
  render () {
    let filteredSearch = this.state.jobs.filter((data) => {
      // TODO: not just company
      // TODO: button to navigate to dashboard with filtered results
      return data.company.toLowerCase().includes(this.state.searchJobs.toLowerCase())
    })
    return (
      <div className="App">
        <Router>
          <div>
              <Nav tabs className="py-3">
                  <NavItem>
                   <Link to="/" className="p-3"> Home </Link>
                  </NavItem>
                  <NavItem>
                  <Link to="/dashboard" className="p-3"> Dashboard </Link>
                  </NavItem>
              </Nav>
  
              <Switch>
                <Route path="/dashboard">
                  <Dashboard favorites={this.state.favorites} jobs={filteredSearch} addFavorite={this.addFavorite} handleSearchFieldChange={this.handleSearchFieldChange} />
                </Route>
                <Route exact path="/">
                  <Home filtered={this.filtered} jobs={this.state.jobs} growValue={this.state.filteredValue} />
                </Route>
                <Route path="/favorites">
                  <Favorites favorites={this.state.favorites} jobs={this.state.jobs} addFavorite={this.addFavorite} />
                </Route>
              </Switch>
          </div>
        </Router>
      </div>
    );
  }
}