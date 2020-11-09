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

// PAGES
import Home from './Components/Pages/Home'
import LatestJobs from './Components/Pages/Latest-Jobs'
import Favorites from './Components/Pages/Favorites'
import Stats from './Components/Pages/Stats'

export default class App extends Component {
  state = {
    jobs : [],
    favorites: [],
    searchJobs: '',
    filteredValue: '',
    sliderValue: ''
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
  render () {
    let filteredSearch = this.state.jobs.filter((data) => {
      // TODO: not just company in keywords
      // TODO: make it function together
      // TODO: add reset for slider
      return data.level.toLowerCase().includes(this.state.sliderValue.toLowerCase()) && data.company.toLowerCase().includes(this.state.searchJobs.toLowerCase());
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
                  <Link to="/latest-jobs" className="p-3"> Latest Jobs </Link>
                  </NavItem>
              </Nav>
  
              <Switch>
                <Route path="/latest-jobs">
                  <LatestJobs
                    favorites={this.state.favorites}
                    jobs={filteredSearch}
                    addFavorite={this.addFavorite}
                    handleSearchFieldChange={this.handleSearchFieldChange}
                    getValue={this.getValue}
                     />
                </Route>
                <Route exact path="/">
                  <Home />
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