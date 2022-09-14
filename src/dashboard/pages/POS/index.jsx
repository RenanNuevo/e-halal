import React, { useState, useEffect } from 'react';
import DashboardHeader from '../../../components/DashboardHeader';
import Badge from '../../../components/Badge';
import all_orders from '../../../constants/orders';
import { calculateRange, sliceData } from '../../../utils/table-pagination';
import menus from '../../../constants/menu';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import qr from '../../../assets/qr.png';
import g1 from  '../../../assets/g1.png'
import g2 from  '../../../assets/g2.png'
import g3 from  '../../../assets/g3.png'

function POS () {
    const [search, setSearch] = useState('');
    const [orders, setOrders] = useState(all_orders);
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState([]);
    const [activeTab, setActiveTab] = useState('incoming');
    const [showReceipt, setShowReceipt] = useState(false);

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

    const handleShowReceipt = () => {
        setShowReceipt(!showReceipt);
    }

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
            <div className='bg-white flex overflow-auto rounded-lg m-6'>
                {
                    !showReceipt && (
                        <div class="grid grid-cols-3 grid-flow-col gap-3 shadow bg-green-50 rounded-lg shadow w-full h-max">
                            <div class="bg-white shadow m-4 row-span-2 rounded-lg col-start-1 col-end-3 h-screen overflow-auto">
                            <div class="p-8 space-y-8 min-w-200">
                                <div class="flex relative rounded-full w-1/2 h-7 justify-between">
                                <input
                                    type="search"
                                    id="default-search"
                                    class="block w-full p-4 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for products" required />
                                <div class="absolute inset-y-0 right-1 flex items-center pointer-events-none">
                                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                </div>
                            </div>
                            <div className="grid grid-flow-col gap-3 justify-start  w-1/2">
                            <div className='flex flex-row'>
                                <p>View By:</p>
                                <img src={g3} width="25" height="25" class="object-cover m-1"></img>
                                <img src={g1} width="25" height="25" class="object-cover m-1"></img>
                                <img src={g2} width="25" height="25" class="object-cover m-1"></img>
                            </div>
                            <div className='grid grid-flow-col content-start'>
                                <label>Sort By:</label>
                                {/* <div className='dashboard-content-search'> */}
                                <select id="small" class="block ml-2 w-40 text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Name A-Z</option>
                                    <option value="1">Test</option>
                                    <option value="2">Test</option>
                                    <option value="3">Test</option>
                                    <option value="4">Test</option>
                                </select>
                        {/* </div> */}
                                        
                            </div>
                        </div>
                        <table class="text-sm text-left text-gray-500 ">
                            <tbody className='overflow-auto p-0 grid grid-cols-3 gap-10 flex justify-center '>
                                {menus.map((item, index) => (
                                    <tr key={index} class="w-96 bg-white border-none ">
                                        <td class="p-1 border-none"><img src={item.image} width="150" height="150" class="object-cover"></img></td>
                                        <td class="font-semibold text-gray-900 justify-center border-none">
                                            <div class="font-semibold text-left p-0 !important">{item.name}</div>
                                            <div class="font-semibold text-gray-900 text-left">{item.price}.00</div>
                                            <button class="align-center text-xl font-bold text-gray-900 text-left">Add to Cart</button>
                                        </td>
                                        
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
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
                                <button onClick={() => handleShowReceipt()} className='rounded-lg  bg-green-700 text-white text-xl px-6 py-2'>PRINT RECEIPT</button>
                            </div>
                        </div>
                    </div>
                </div> 
                    ) || <div div class="grid grid-cols-2 grid-flow-col shadow rounded-lg shadow w-full h-screen p-8">
                    <div class="bg-white flex flex-col w-full justify-around align-center "> 
                    {/* bg-white flex flex-col w-full justify-center align-center  */}
                        <div class="flex  flex-col min-w-200 h-full justify-around align-center">
                            <div class="flex flex-col h-40 justify-center ">
                            {/* relative rounded-lg max-w-50 w-full */}
                                <p className="text-teal-800 font-bold text-2xl px-5">Order Summary</p>
                                <table class="text-sm text-left text-gray-500">
                                    <tbody className='max-h-3 overflow-auto '>
                                        {orders[0].items.map((item, index) => {
                                            console.log({index})
                                                return (
                                                    <>
                                                    <tr key={index} class="bg-white border-b hover:bg-gray-50">
                                                    <td class="font-semibold text-gray-900 ">
                                                    <div class="text-base font-semibold">{item.name}</div>
                                                    <div class="flex ">
                                                        <p className="">Quantity</p>
                                                        <div class="w-5">
                                                        <input
                                                            type='text'
                                                            value={'01'}
                                                            placeholder=''
                                                            className='w-full text-center'
                                                            onChange={e => __handleSearch(e)} />
                                                            </div>
                                                    </div>
                                                    </td>
                                                    
                                                    <td class=" font-semibold text-gray-900">
                                                    <p class=" font-semibold text-gray-900">Php {item.price}.00</p>
                                                    </td> 
                                                </tr>
                                                </>
                                                )
                                        })}
                                        <tr className='border-none my-5'>
                                            <td className='text-teal-800 font-bold text-xl border-none'>Total Amount</td>
                                            <td className='border-none'>Php 776.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="justify-center align-self-end text-center">
                            <button onClick={() => handleShowReceipt()} className='rounded-lg w-64  bg-orange-400 text-white text-xl px-6 py-2'>EDIT</button>
                        </div>        
                    </div>
                    <div class="bg-white row-span-2 flex flex-col w-full  border-l justify-around align-center ">
                        {/* <div class="border h-40 p-8 min-w-200 h-full "> */}
                            <div class="flex flex-col h-40 justify-center items-center">
                                <img src={qr} className="w-64 h-64"/>
                                <p className="text-teal-800 font-bold text-2xl">ORDER # 00001234</p>
                            </div>
                            <div class="justify-center align-self-end text-center">
                                <button onClick={() => handleShowReceipt()} className='rounded-lg w-64  bg-green-700 text-white text-xl px-6 py-2'>PRINT RECEIPT</button>
                            </div>
                        {/* </div> */}
                    </div>
                </div>
                }
                
            </div>
        </div>
    )
}

export default POS;