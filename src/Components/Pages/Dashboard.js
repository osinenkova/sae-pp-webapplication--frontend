import React, { Component } from 'react'
import data from '../../Data/data.json'
// components
import List from '../List'

export default function Dashboard (props) {
  return (
      <div>
          <List
          jobs={props.jobs}
          favorites={props.favorites}
          addFavorite={props.addFavorite}
            />
      </div>
  )
}
