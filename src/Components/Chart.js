//LIBRARIES
import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Pie} from 'react-chartjs-2';


function Chart(props) {
    
    const nextPath = (path) => {
        props.history.push(path);
    }

   return (
       <div className="chart mt-5">
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
            onElementsClick={ elem=> elem[0] !== undefined ? console.log(elem[0]._index) : null /*() => nextPath('/latest-jobs')*/ }
            />
       </div>
   )
}

export default withRouter(Chart);