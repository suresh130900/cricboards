import React, { useEffect, useState } from 'react';
import ApexCharts from 'react-apexcharts';
import axios from 'axios';

function BowlerWicketsChart() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/worst_bowler')
            .then((response) => {
                const bowlerData = response.data;
                const dataArray = Object.entries(bowlerData).map(([bowler, wickets]) => ({ bowler, wickets }));
                setData(dataArray);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    if (data.length === 0) {
        return <div>Loading...</div>; // You can add a loading indicator while data is being fetched.
    }

    // Prepare data for the chart
    const chartData = {
        options: {
            chart: {
                id: 'bowler-Run-Given-chart',
                type: 'bar',
            },
            xaxis: {
                categories: data.map((item) => item.bowler),
            },
        },
        series: [
            {
                name: 'Wickets',
                data: data.map((item) => item.wickets),
            },
        ],
    };

    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Bowler Runs Given Chart</h1>
            <ApexCharts options={chartData.options} series={chartData.series} type="bar" height={400} />
        </div>
    );
}

export default BowlerWicketsChart;
