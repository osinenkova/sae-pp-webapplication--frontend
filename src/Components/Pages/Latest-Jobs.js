// LIBRARIES
import React, { Component } from 'react'
import { Form, FormGroup, Label, Input } from 'reactstrap';
import Slider from '@material-ui/core/Slider'

// COMPONENTS
import List from '../List'
import Filter from '../Filter'

export default function LatestJobs (props) {
  const marks = [
    {
      value: 0,
      label: 'Junior',
      id: 1
    },
    {
      value: 50,
      label: 'Middleweight',
      id: 2
    },
    {
      value: 100,
      label: 'Senior',
      id: 3
    },
  ];
   const getValue = (e,val) => {
     console.warn(val)
   }
  return (
      <div>
          <Filter handleSearchFieldChange={props.handleSearchFieldChange} />
          <div className="container">
            <div className="col-3">
              <Slider
                defaultValue={50}
                //getAriaValueText={}
                aria-labelledby="discrete-slider-custom"
                step={50}
                //valueLabelDisplay="auto"
                marks={marks}
                onChangeCommitted={getValue} //console.log(marks.find(mark => mark.value === 50).label)
              />
            </div>
          </div>
          <List
          jobs={props.jobs}
          favorites={props.favorites}
          addFavorite={props.addFavorite}
            />
      </div>
  )
}
