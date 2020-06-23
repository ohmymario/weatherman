import React from 'react';
import ForecastGraph from '../forecastGraph/ForecastGraph'

import '../forecast/Forecast.css'

const data = [
  {
    "id": "7 Day Forecast",
    "color": "hsl(84, 70%, 50%)",
    "data": [
      {
        "x": "Monday",
        "y": 101
      },
      {
        "x": "Tuesday",
        "y": 104
      },
      {
        "x": "Wednesday",
        "y": 105
      },
      {
        "x": "Thursday",
        "y": 104
      },
      {
        "x": "Friday",
        "y": 106
      },
      {
        "x": "Saturday",
        "y": 105
      },
      {
        "x": "Sunday",
        "y": 98
      },
    ]
  },
]

const Forecast = () => {
  return (
    <div className="container">
      <ForecastGraph data={data}/>
      {/* <ForecastGraph /> */}
    </div>
  )
}

export default Forecast;
