import React, { useState, useEffect } from 'react';
import Badge from '../../../components/Badge';
import all_orders from '../../../constants/orders';
import { calculateRange, sliceData } from '../../../utils/table-pagination';
import '../styles.css';

import uploadImg from '../../../assets/upload.png'

function Ads () {
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
                <div className="flex justify-center block p-10 bg-white w-full my-2 border">
                    <div className="grid  gap-40 grid-cols-2">
                        <div className="grid justify-items-center gap-6 ">
                            <img
                                src={uploadImg}
                                alt="upload" />
                            <p className="text-green-800 font-bold text-xl">
                                Drag and drop or
                            </p>
                            <button
                                    type="button"
                                    className="bg-green-800 px-6 text-white font-medium py-2.5 text-xs uppercase 
                                        rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 
                                        active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out"
                                >BROWSE</button>
                        </div>
                        <div className="grid content-center justify-self-end">
                            <p className='text-green-800 text-2xl font-bold mb-3'>Advertisement Guidelines</p>
                            <ol>
                                <li>1. Image should be maximum of 25mb only</li>
                                <li>2. Image size should be 1080px x 1080px only</li>
                                <li>3. Image should be maximum of 25mb only</li>
                                <li>4. Image size should be 1080px x 1080px only</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ads;