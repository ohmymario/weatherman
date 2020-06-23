import React from 'react';
import { ResponsiveLine } from '@nivo/line';

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

    // lowest temp
    const min = Math.min(...data[0].data.map(value => value.y))
    return (
        <ResponsiveLine
            theme={lineGraphSettings.theme}
            data={data}
            margin={{ top: 50, right: 25, bottom: 50, left: 75 }}
            xScale={{ type: 'point' }}
            yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
            enableArea={true}
            areaOpacity={0.07}
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
            isInteractive={false}
            enablePointLabel={true}
            pointLabel="y"
            pointLabelYOffset={-20}
            enableCrosshair={false}
            useMesh={true}
        />
    )
}

export default ForecastGraph;