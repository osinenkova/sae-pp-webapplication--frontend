// LIBRARIES
import React, { Component } from 'react'

// COMPONENTS
import Chart from '../Chart'

export default class Home extends Component {
    state = {
        chartData: {

            labels: ['Senior', 'Front-end', 'Fullstack', 'Junior', 'Software'],

            datasets: [
                {
                    label: 'Job Listings',
                    data: [ 1, 1, 3, 5, 6 ],
                    backgroundColor: [ '#4872B5', '#2F4A75', '#629AF5', '#162338', '#578ADB' ]
                }
            ]

        }
    } 
    
    render() {
        return (
            <div className="h-100">
                <Chart
                    chartData={this.state.chartData}
                 />
            </div>
        )
    }
}
