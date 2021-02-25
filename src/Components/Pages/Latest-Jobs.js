// LIBRARIES
import React from 'react'
import Slider from '@material-ui/core/Slider'

// COMPONENTS
import List from '../List'
import Filter from '../Filter'

export default function LatestJobs (props) {
  const marks = [
    {
      value: 0,
      label: 'Junior'
    },
    {
      value: 50,
      label: 'Midweight'
    },
    {
      value: 100,
      label: 'Senior'
    },
  ];


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
                onChangeCommitted={props.getValue} //console.log(marks.find(mark => mark.value === 50).label)
              />
              {/* simple reset button: <Button onClick={props.cleanInput}>reset</Button> */}
            </div>
          </div>
          <List
          jobs={props.jobs}
          favorites={props.favorites}
          addFavorite={props.addFavorite}
          currentAuthorId={props.currentAuthorId}
          deleteJob={props.deleteJob}
            />
      </div>
  )
}
