import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ThirdTableComponent() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Make an Axios GET request to your API
        axios.get('http://127.0.0.1:8000/Matches_played')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <h1 className="text-3xl font-bold text-stone-800 ml-12 mb-10 mt-10">Matches Played By Each Team</h1>
            <div className="flex ml-12">
            {data.map((item, index) => (
                <div key={index}>
                    <h2 className="text-stone-800 text-xl font-bold flex">Table {index + 1}</h2>
                    <table>
                        <thead>
                        <tr>
                            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Team</th>
                            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Value</th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                        {Object.entries(item).map(([team, value]) => (
                            <tr key={team}>
                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{team}</td>
                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{value}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            ))}
            </div>
        </div>
    );
}

export default ThirdTableComponent;
