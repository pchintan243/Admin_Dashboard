import React from 'react'
import "./chart.css"
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";

const Chart = ({ title, data, dataKey, grid }) => {
    return (
        <div className='chart'>
            <h3 className="chartTitle">
                {title}
            </h3>
            {/* aspect means if the width is 4 units then height will be 1 units  */}
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke='#5550bd' />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey={dataKey}
                        stroke='#5550bd'
                        activeDot={{ r: 8 }}
                    />
                    {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray="5 5" />}
                </LineChart>

            </ResponsiveContainer>
        </div>
    )
}

export default Chart