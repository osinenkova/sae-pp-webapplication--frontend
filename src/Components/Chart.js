import React, {Component} from 'react';
import {Pie} from 'react-chartjs-2';

export default function Chart(props) {
   
   return (
       <div className="chart">
           <Pie
            data={props.chartData}
            width={100}
            height={25}
            options={{
                title: {
                    display: true,
                    fontSize: 25,
                    text: 'Available keywords'
                },
                legend: {
                    display: true,
                    // position: 'right'
                }
            }}
            />
       </div>
   )
}