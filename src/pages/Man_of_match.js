//
// import axios from "axios";
// import NavBar from "../pages/NavBar"
// import React, { useState, useEffect } from 'react';
//
// const baseUrl = "http://127.0.0.1:8000/Man_of_match";
//
// export default function Man_of_match() {
//     const [data, setData] = useState([]);
//     const apiUrl = 'http://127.0.0.1:8000/Man_of_match'; // Replace with your API endpoint
//
//     useEffect(() => {
//         axios.get(apiUrl)
//             .then(response => {
//                 setData(response.data);
//             })
//             .catch(error => {
//                 console.error('Error fetching data:', error);
//             });
//     }, []);
//
//     return (
//         <div>
//             <h1>Cricket Player Scores</h1>
//             <table>
//                 <thead>
//                 <tr>
//                     <th>Player Name</th>
//                     <th>Score</th>
//                 </tr>
//                 </thead>
//                 <tbody>
//                 {data.map((player, index) => (
//                     <tr key={index}>
//                         <td>{player.name}</td>
//                         <td>{player.score}</td>
//                     </tr>
//                 ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

import NavBar from "../pages/NavBar"

import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import Matches_Won from "./Matches_Won";
import Matches_played from "./Matches_played";
import Top_Batsman from "./Top_Batsman";
import Worst_Bowler from "./Worst_Bowler";
import Worst_charts from "./Worst_charts";

class CricketStatsTable extends Component {
    constructor() {
        super();
        this.state = {
            data: {},
            isLoading: true,
        };
    }

    componentDidMount() {
        axios
            .get('http://127.0.0.1:8000/Man_of_match')
            .then((response) => {
                this.setState({
                    data: response.data,
                    isLoading: false,
                });
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
            });
    }

    renderTable() {
        const { data } = this.state;

        // Convert JSON data to an array of objects
        const playerData = Object.keys(data).map((key) => ({
            name: key,
            score: data[key],
        }));

        return (
            // <table>
            //     <thead>
            //     <tr>
            //         <th>Player</th>
            //         <th>Score</th>
            //     </tr>
            //     </thead>
            //     <tbody>
            //     {playerData.map((player, index) => (
            //         <tr key={index}>
            //             <td>{player.name}</td>
            //             <td>{player.score}</td>
            //         </tr>
            //     ))}
            //     </tbody>
            // </table>

            <div className="flow-root">
                <NavBar />
                <div className="flex justify-between">
                    <h1 className="text-3xl font-bold text-stone-800 ml-12 mb-10 mt-10">Man of the Match</h1>
                    <button type="button" className="rounded-md text-stone-800 px-3 py-2 text-sm font-semibold shadow-sm">
                        View Chart
                    </button>
                </div>

                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                        Player
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Title Won
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                {playerData.map((player, index) => (
                                    <tr key={index}>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{player.name}</td>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{player.score}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <Matches_Won />
                <Matches_played />
                <Top_Batsman />
                <Worst_charts />
                <Worst_Bowler />
            </div>
        );
    }

    render() {
        const { isLoading } = this.state;

        return (
            <div>
                {isLoading ? <p>Loading...</p> : this.renderTable()}
            </div>
        );
    }
}

export default CricketStatsTable;

