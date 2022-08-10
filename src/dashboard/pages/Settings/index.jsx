import React, { useState, useEffect } from 'react';
import DashboardHeader from '../../../components/DashboardHeader';
import Badge from '../../../components/Badge';
import all_orders from '../../../constants/orders';
import { calculateRange, sliceData } from '../../../utils/table-pagination';
// import { DataTable } from '../../../components/DataTable'
import '../styles.css';
import { data } from 'autoprefixer';
// import DoneIcon from '../../assets/icons/done.svg';
// import CancelIcon from '../../assets/icons/cancel.svg';
// import RefundedIcon from '../../assets/icons/refunded.svg';

function Settings () {
    const [search, setSearch] = useState('');
    const [orders, setOrders] = useState(all_orders);
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState([]);
    const [activeTab, setActiveTab] = useState('incoming');
    
    useEffect(() => {
        setPagination(calculateRange(all_orders, 5));
        setOrders(sliceData(all_orders, page, 5));
    }, []);

    // Search
    const __handleSearch = (event) => {
        setSearch(event.target.value);
        if (event.target.value !== '') {
            let search_results = orders.filter((item) =>
                item.delivery.toLowerCase().includes(search.toLowerCase()) ||
                item.timer.toLowerCase().includes(search.toLowerCase()) ||
                item.id.toLowerCase().includes(search.toLowerCase())
            );
            setOrders(search_results);
        }
        else {
            __handleChangePage(1);
        }
    };

    // Change Page
    const __handleChangePage = (new_page) => {
        setPage(new_page);
        setOrders(sliceData(all_orders, new_page, 5));
    }

    const setActiveTabHandler = (id) => {
        setActiveTab(id);
    }

    const tabs = ['incoming', 'preparing', 'pickup', 'cancelled', 'completed']
    const tableHeaders = ['Order No.', 'Date / Time', 'Amount', 'Delivery', 'Timer', 'Details', 'Actionss']

    return(
        <div className='dashboard-content'>
            <div className='flex flex-row flex-nowrap justify-around -mb-3 mt-5 '>
                {/* TO DO: loop */}
                {tabs.map((tab, index) => {
                    return <div className="flex space-x-2 justify-center"><button 
                        onClick={() => setActiveTabHandler(tab)}
                        id={tab}
                        key={index}
                        className={activeTab === tab ? 'tab-item-active rounded-md' : 'tab-item bg-gray-400 rounded-md p-1'}
                    >{tab.toLocaleUpperCase()}
                    <Badge display={8} />
                    </button>
                    </div>
                })}
            </div>
            <div className='dashboard-content-container'>
                <div className='dashboard-content-header'>
                    <div className='dashboard-content-search'>
                        <input
                            type='text'
                            value={search}
                            placeholder='Search..'
                            className='dashboard-content-input'
                            onChange={e => __handleSearch(e)} />
                    </div>
                </div>
                {/* <DataTable data={orders} headers={tableHeaders} /> */}
                <table>
                    <thead>
                        <th>Order No.</th>
                        <th>Date / Time</th>
                        <th>Amount</th>
                        <th>Delivery</th>
                        <th>Timer</th>
                        <th>Details</th>
                        <th>Action</th>
                    </thead>

                    {orders.length !== 0 ?
                        <tbody>
                            {orders.map((order, index) => (
                                <tr key={index}>
                                    <td><span>#{order.id}</span></td>
                                    <td><span>{order.date}</span></td>
                                    <td>
                                            <span>{order.amount}</span>
                                    </td>
                                    <td><span>{order.delivery}</span></td>
                                    <td><span>{order.timer}</span></td>
                                    <td><div>
                                        <button className='bg-green-500 text-white rounded-md p-1'>Order Details</button></div></td>
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

                {orders.length !== 0 ?
                    <div className='dashboard-content-footer'>
                        {pagination.map((item, index) => (
                            <span 
                                key={index}
                                className={item === page ? 'active-pagination' : 'pagination'}
                                onClick={() => __handleChangePage(item)}>
                                    {item}
                            </span>
                        ))}
                    </div>
                : 
                    <div className='dashboard-content-footer'>
                        <span className='empty-table'>No data</span>
                    </div>
                }
            </div>
        </div>
    )
}

export default Settings;