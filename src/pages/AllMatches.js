import axios, {all, post} from "axios";
import React from "react";
import NavBar from "../pages/NavBar"

const baseUrl = "http://127.0.0.1:8000/";
// export default function AllMatches()
// {
//     const[allmatches, setAllMatches] = React.useState(null);
//
//     React.useEffect(() =>{
//         axios.get(baseUrl).then((response) =>{
//             setAllMatches(JSON.parse(JSON.stringify(response.data)))
//         });
//     }, []);
//
//     if(!allmatches) return null;
//
//     return(
//         <div>
//             {
//                 post.map((allmat, i) =>{
//                     return(
//                         <>
//
//                         </>
//                     );
//                 })
//             }
//         </div>
//     );
// }

// const plans = [
//     {
//         id: 1,
//         name: 'Hobby',
//         memory: '4 GB RAM',
//         cpu: '4 CPUs',
//         storage: '128 GB SSD disk',
//         price: '$40',
//         isCurrent: false,
//     },
//     {
//         id: 2,
//         name: 'Startup',
//         memory: '8 GB RAM',
//         cpu: '6 CPUs',
//         storage: '256 GB SSD disk',
//         price: '$80',
//         isCurrent: true,
//     },
//     // More plans...
// ]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function AllMatches() {
    const [allmatches, setAllMatches] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseUrl).then((response) => {
            setAllMatches(JSON.parse(JSON.stringify(response.data)))
        });
    }, []);

    if(!allmatches) return null;

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <NavBar />
            <div className="-mx-4 mt-10 ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                    <thead>
                    <tr>
                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                            Date
                        </th>
                        <th
                            scope="col"
                            className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">
                            Venue
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                            Match Number
                        </th>
                        <th
                            scope="col"
                            className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">
                            Team1
                        </th>
                        <th
                            scope="col"
                            className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">
                            Team2
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 text-center">
                            Winner
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {allmatches.map((allMatches, planIdx) => (
                        <tr key={allMatches.id}>
                            <td className={classNames(
                                    planIdx === 0 ? '' : 'border-t border-transparent',
                                    'relative py-4 pl-4 pr-3 text-sm sm:pl-6'
                                )}>
                                <div className="font-medium text-gray-900">
                                    {allMatches.match_date}
                                </div>
                                {planIdx !== 0 ? <div className="absolute -top-px left-6 right-0 h-px bg-gray-200" /> : null}
                            </td>
                            <td className={classNames(
                                    planIdx === 0 ? '' : 'border-t border-gray-200',
                                    'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell'
                                )}>
                                <div className="font-medium text-gray-900">
                                    {allMatches.venue}
                                </div>
                            </td>
                            <td
                                className={classNames(
                                    planIdx === 0 ? '' : 'border-t border-gray-200',
                                    'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell'
                                )}>
                                <div className="font-medium text-gray-900">
                                    {allMatches.match_number}
                                </div>
                            </td>
                            <td
                                className={classNames(
                                    planIdx === null ? '' : 'border-t border-gray-200',
                                    'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell'
                                )}>
                                <div className="font-medium text-gray-900">
                                    {allMatches.team1}
                                </div>
                            </td>
                            <td className={classNames(
                                    planIdx === 0 ? '' : 'border-t border-gray-200',
                                    'px-3 py-3.5 text-sm text-gray-500'
                                )}>
                                <div className="font-medium text-gray-900">
                                    {allMatches.team2}
                                </div>
                            </td>
                            <td
                                className={classNames(
                                    planIdx === 0 ? '' : 'border-t border-transparent',
                                    'relative py-3.5 pl-3 pr-4 text-right text-sm font-medium sm:pr-6'
                                )}>
                                <div className="font-medium text-gray-900">
                                    {allMatches.winning_team}
                                </div>
                                {planIdx !== 0 ? <div className="absolute -top-px left-0 right-6 h-px bg-gray-200" /> : null}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
