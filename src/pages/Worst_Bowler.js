import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BowlerTableComponent() {
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

    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Bowler Wickets Table</h1>
            <table className="table-auto">
                <thead>
                <tr>
                    <th scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Bowler</th>
                    <th scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Wickets</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{item.bowler}</td>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{item.wickets}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default BowlerTableComponent;
