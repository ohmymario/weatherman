import React from 'react';
import {ResponsiveLine } from '@nivo/line';
import '../forecastGraph/ForecastGraph.css'

const lineGraphSettings = {
    theme: {
        fontSize: '14px',
        fontFamily: "Roboto",
        dots: {
            text: {
                fill: '#000000',
                fontSize: 16,
            },
        },
    },
};

const ForecastGraph = ({ data }) => {

    // temp ranges
    const min = Math.min(...data[0].data.map(value => value.y))
    const max = Math.max(...data[0].data.map(value => value.y))
    return (
        <ResponsiveLine
            theme={lineGraphSettings.theme}
            data={data}
            margin={{ top: 50, right: 50, bottom: 50, left: 75 }}
            xScale={{ type: 'point' }}
            yScale={{
                type: 'linear',
                base: 10,
                min: min,
                max: max+2,
                stacked: true,
                reverse: false
            }}
            enableArea={true}
            areaOpacity={0.1}
            areaBaselineValue={min}
            yFormat={value => `${value}°`}
            curve="monotoneX"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                orient: 'bottom',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legendOffset: 36,
                legendPosition: 'middle'
            }}
            axisLeft={{
                orient: 'left',
                tickSize: 10,
                tickPadding: 5,
                tickRotation: 0,
                legendOffset: -50,
                legendPosition: 'middle',
                format: value => `${value}°` }}
            colors={['#504fd3']}
            lineWidth={3.5}
            pointSize={4}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            isInteractive={true}
            pointLabel="y"
            useMesh={true}
            tooltip={(props) => {
                return <div className='toolTip'>{props.point.data.y}°</div>
            }}
        />
    )
}

export default ForecastGraph;