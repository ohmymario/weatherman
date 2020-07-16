import React from 'react';
import { ResponsiveLine } from '@nivo/line';
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

const ForecastGraph = (props) => {

    const { data, bAxis = 0 } = props;

    // y scale temp ranges
    let min, max, stacked;
    max = Math.max(...data[0].data.map(value => value.y))
    min = Math.min(...data[0].data.map(value => value.y))
    stacked = true;
    if (data.length === 2) {
        stacked = false;
        data.map((obj) => Object.keys(obj).forEach(function (key) {
            if (obj[key] === 'High') {
                max = Math.max(...obj.data.map(value => value.y))
            }
            if (obj[key] === 'Low') {
                const minVal = Math.min(...obj.data.map(value => value.y))
                min = parseInt(minVal / 10, 10) * 10;
            }
        }))
    };


    function createSliceTooltip(slice) {
        const points = slice.points;
        return (
            <div className='slice-toolTip'>
                <div>{points[0].data.x}</div>
                {points.map(point => (
                    <div key={point.id} style={{ color: point.serieColor }}>
                        {point.serieId} {point.data.yFormatted}
                    </div>
                ))}
            </div>
        )
    }

    /// change what data value to choose depending on how many passed in
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
                max: max + 2,
                stacked: stacked,
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
                tickRotation: bAxis,
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
                format: value => `${value}°`
            }}
            colors={['#504fd3', '#54afed']}
            lineWidth={3.5}
            pointSize={4}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            isInteractive={true}
            pointLabel="y"
            useMesh={true}
            enableSlices={data.length === 2 ? 'x' : false}
            sliceTooltip={({ slice }) => createSliceTooltip(slice)}
            tooltip={(props) => {
                return <div className='toolTip'>{props.point.data.y}°</div>
            }}
        />
    )
}

export default ForecastGraph;