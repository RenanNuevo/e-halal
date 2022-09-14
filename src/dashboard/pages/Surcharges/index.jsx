import React, { useState, useEffect } from 'react';
import DashboardHeader from '../../../components/DashboardHeader';
import Badge from '../../../components/Badge';
import all_orders from '../../../constants/orders';
import { calculateRange, sliceData } from '../../../utils/table-pagination';
// import { DataTable } from '../../../components/DataTable'
import '../styles.css';
import { data } from 'autoprefixer';
import Tab from '../../../components/Tab';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'


function Surcharges () {
    const [search, setSearch] = useState('');
    const [orders, setOrders] = useState(all_orders);
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState([]);
    const [activeTab, setActiveTab] = useState();
    const [openAddOns, setOpenAddOns] = useState(true)
    
    useEffect(() => {
        setPagination(calculateRange(all_orders, 5));
        setOrders(sliceData(all_orders, page, 5));
    }, []);

    const handleOpenAddOns = () => {
        setOpenAddOns(!openAddOns)
    }

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
            <div className='flex flex-row flex-nowrap justify-around mb-3 mt-5 '>
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
                { openAddOns ? <div class="grid grid-cols-2 grid-flow-col shadow rounded-lg shadow w-full h-max">
                    <Tab color="white"/>
                    <div class="bg-white row-span-2 justify-self-start col-span-1 w-full">
                    <div class="flex flex-col justify-between p-8 space-y-8 min-w-200 h-1/3 ">
                        <div class="relative rounded-lg max-w-50 w-full">
                            <p className="text-teal-800 font-bold text-2xl">Order Details</p>
                        </div>
                        <table class="text-sm text-left text-gray-500">
                            <tbody className='max-h-3 overflow-auto '>
                                {orders[0].items.map((item, index) => {
                                    console.log({index})
                                        return (
                                            <tr key={index} class="bg-white border-b hover:bg-gray-50">
                                            <td class="font-semibold text-gray-900 ">
                                            <div class="text-base font-semibold">{item.name}</div>
                                            <div class="flex ">
                                                <p className="text-gray-600 mx-1">Quantity</p>
                                                <AiOutlineMinus size={19} className='cursor-pointer bg-teal-800 text-white p-1'/>
                                                <div class="w-5">
                                                <input
                                                    type='text'
                                                    value={'01'}
                                                    placeholder=''
                                                    className='w-full text-center'
                                                    onChange={e => __handleSearch(e)} />
                                                    </div>
                                                <AiOutlinePlus size={19} color={'white'} className='cursor-pointer bg-teal-800 text-white p-1'/>
                                            </div>
                                            </td>
                                            <td class=" font-semibold text-gray-900">
                                            <p class=" font-semibold text-gray-900">Php {item.price}.00</p>
                                                <button class="justify-center font-bold text-red-900">Remove</button>
                                            </td> 
                                        </tr>
                                        )
                                })}
                                <tr>
                                    <td className='text-teal-800 font-bold text-xl'>Total Amount</td>
                                    <td>Php 776.00</td>
                                </tr>
                            </tbody>
                        </table>
                            <div class="justify-center align-self-end text-center">
                                <button onClick={() => console.log('')} className='rounded-lg  bg-green-700 text-white text-xl px-6 py-2'>PRINT RECEIPT</button>
                            </div>
                        </div>
                    </div>

                </div>
                :
                <div class="p-6">
                    <div class="">
                        <p class="text-yellow-500  text-2xl">Gold Subscription Package <i class="text-sm !text-gray">Subscribed since 11/03/2022</i></p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue augue sit amet lorem efficitur bibendum.
                            In vitae tortor pulvinar, eleifend tortor ac, dapibus magna. Morbi id ligula nisi. </p>
                        <div class="grid grid-cols-2 items-start mt-3">
                            <table class="column-type ">
                            <tr>
                                    <th scope="row">Advertisement in home screen</th>
                                    <td>Some text</td>
                                </tr>
                                <tr>
                                    <th scope="row">Advertisement in category screen</th>
                                    <td>Some text</td>
                                </tr>
                                <tr>
                                    <th scope="row">Listing Prioritization</th>
                                    <td>Some text</td>
                                </tr>
                                <tr>
                                    <th scope="row">Advertisement in home screen</th>
                                    <td>Some text</td>
                                </tr>
                                <tr>
                                    <th scope="row">Checkout feature (Online shopping)</th>
                                    <td>Some text</td>
                                </tr>
                                <tr>
                                    <th scope="row">Voucher (Online shopping)</th>
                                    <td>Some text</td>
                                </tr>
                            </table><table class="column-type self-start">
                            <tr>
                                    <th scope="row">No</th>
                                    <td>Yes</td>
                                </tr>
                                <tr>
                                    <th scope="row">Yes</th>
                                    <td>Yes</td>
                                </tr>
                                <tr>
                                    <th scope="row">Moderate</th>
                                    <td>Yes</td>
                                </tr>
                                <tr>
                                    <th scope="row">Row 1</th>
                                    <td>Yes</td>
                                </tr>
                                <tr>
                                    <th scope="row">No</th>
                                    <td>No</td>
                                </tr>
                                <tr>
                                    <th scope="row">No</th>
                                    <td>No</td>
                                </tr>
                            </table>
                        </div>
                        <div class="grid justify-items-end ">
                            <button
                            onClick={() => handleOpenAddOns(openAddOns)}
                            type="button"
                            class="mt-3 text-white w-48 bg-green-700  rounded-lg border border-gray-200 
                            text-sm font-medium px-5 py-2 hover:text-gray-900 focus:z-10"
                            >View Add Ons</button>
                        </div>
                    </div>
                </div> 

                }
            </div>
        </div>
    )
}

export default Surcharges;