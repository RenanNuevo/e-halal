import React from 'react';

export default function DataTable({data, headers}) {
    return (
        <div>
            <table>
                <thead>
                    {headers.map((header, key) => 
                        <th key={key}>{header}</th>
                    )}
                </thead>

                {data.length !== 0 ?
                    <tbody>
                        {data.map((data, index) => (
                            <tr key={index}>
                                <td><span>#{data.id}</span></td>
                                <td><span>{data.date}</span></td>
                                <td>
                                        <span>{data.amount}</span>
                                </td>
                                <td><span>{data.delivery}</span></td>
                                <td><span>{data.timer}</span></td>
                                <td><div>
                                    <button className='bg-green-500 text-white rounded-md p-1'>data Details</button></div></td>
                                <td><div>
                                    <button 
                                        className='m-1 bg-green-500 text-white rounded-md p-1'>&#10004;
                                    </button>
                                    <button 
                                        className='m-1 bg-red-500 text-white rounded-md p-1'>&#10006;
                                    </button>
                                    </div>
                                </td>
                                
                            </tr>
                        ))}
                    </tbody>
                : null}
            </table>
        </div>
    )
}
