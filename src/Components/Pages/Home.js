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
                data: [
                    1, 1, 4, 5, 6
                ]
            }
        ]
    }

    }
    render() {
        return (
            <div>
                <Chart chartData={this.state.chartData} />
            </div>
        )
    }
}
