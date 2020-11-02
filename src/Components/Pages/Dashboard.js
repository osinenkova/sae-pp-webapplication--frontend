import React, { Component } from 'react'
import data from '../../Data/data.json'
// components
import List from '../List'
import Filter from '../Filter'

export default function Dashboard (props) {
  return (
      <div>
          <Filter handleSearchFieldChange={props.handleSearchFieldChange} />
          <List
          jobs={props.jobs}
          favorites={props.favorites}
          addFavorite={props.addFavorite}
            />
      </div>
  )
}
