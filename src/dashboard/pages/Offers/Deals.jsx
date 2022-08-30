import React, { useState, useEffect } from 'react';
import Badge from '../../../components/Badge';
import deals from '../../../constants/deals';
import menus from '../../../constants/menu';
import { calculateRange, sliceData } from '../../../utils/table-pagination';
import '../styles.css';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import g1 from  '../../../assets/g1.png'
import g2 from  '../../../assets/g2.png'
import g3 from  '../../../assets/g3.png'

function Deals () {
    const [search, setSearch] = useState('');
    const [orders, setOrders] = useState(deals);
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState([]);
    const [activeTab, setActiveTab] = useState('incoming');
    const [openmodal, setOpenmodal] = useState(false);
    const [isEditting, setIsEditting] = useState(false);
    const [selectedDeal, setselectedDeal] = useState(null);
    const [openProductsModal, setOpenProductModal] = useState(false)

    const toggleProductModal = (deal) => {
        setOpenProductModal(!openProductsModal)
        setselectedDeal(deal);
    }

    const handleOpenModal = (orderID) => {
        setOpenmodal(true);
    }
  
    const modalopenclose = (stat) => {
        setOpenmodal(stat);
    }
    useEffect(() => {
        setPagination(calculateRange(deals, 5));
        setOrders(sliceData(deals, page, 5));
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
        setOrders(sliceData(deals, new_page, 5));
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
                <div className='dashboard-content-header'>
                    <p className='self-end ml-5 font-bold text-green-700'>Limited Time Offers</p>
                    <button  onClick={() => handleOpenModal()} className="self-end m-1 bg-teal-800 text-white rounded-md p-1 w-32">Add Deal</button>
                </div>
                <table>
                    <thead>
                        <th>Deal Number</th>
                        <th>Product(s)</th>
                        <th>Offer</th>
                        <th>Schedule</th>
                        <th>Discount</th>
                        <th>Action</th>
                    </thead>
                    {deals.length !== 0 ?
                        <tbody>
                            {deals.map((deal, index) => (
                                <tr key={index}>
                                    <td><span>DEAL {deal.number}</span></td>
                                    <td className='justify-center'>{deal.isAllMenu ? <span className='text-center'> All Menu </span> : <button
                                        onClick={() => toggleProductModal(deal)}
                                        className='m-1 p-1 bg-teal-800 text-white text-sm rounded-md w-32'
                                        >VIEW INCLUDED PRODUCTS</button> }</td>
                                    <td><span>{deal.offer}</span></td>
                                    <td><span>{deal.schedule}</span></td>
                                    <td><span>{deal.discount}</span></td>
                                    <td>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                handleOpenModal();
                                                setIsEditting(true);
                                            }}
                                            className='m-1 bg-teal-800 text-white rounded-md p-1 w-1/2 align-end'>Edit
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    : null}
                </table>
                {openProductsModal === true ?
                            <div id="modalEl" tabindex="-1" aria-hidden="true" className="modal fade flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                                    <div class="relative modal-dialog modal-dialog-centered p-4 w-full max-w-screen-md h-full md:h-auto">
                                        <div class="relative bg-white rounded-lg shadow">
                                        <div className='items-center justify-center p-8 w-full'>
                                            <div className='dashboard-content-header'>
                                                <p className='self-end ml-5 font-bold text-green-700'>{selectedDeal && selectedDeal.number}</p>
                                                <p className='self-end ml-5 font-bold text-green-700'>{selectedDeal && selectedDeal.voucher}</p>
                                            </div>
                                            <table>
                                                <tbody>
                                                    {selectedDeal && selectedDeal.products.map((product, index) => (
                                                        <tr key={index}>
                                                            <td><span>{product.name}</span></td>
                                                            <td><span>{product.amount}</span></td>
                                                        </tr>
                                                    ))}
                                                    </tbody>
                                            </table>
                                        </div>

                                        <div class="flex items-center justify-center p-6 space-x-2 rounded-b border-0">
                                            <button
                                                onClick={() => toggleProductModal(null)}
                                                type="button"
                                                class="text-white font-bold w-48 bg-red-400  rounded-lg border border-gray-200 
                                                text-sm font-medium px-5 py-2.5 focus:z-10"
                                                >CANCEL</button>
                                        </div>
                                    </div>
                                    </div>
                            </div>
                        : null}

                {deals.length !== 0 ?
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

            {
                openmodal && (
                    <div id="modalEl" tabindex="-1" aria-hidden="true"
                className="modal fade flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div class="relative modal-dialog modal-dialog-centered p-4 w-full max-w-7xl flex">
                    <div class="grid grid-cols-8 grid-flow-col shadow bg-green-50 rounded-lg shadow w-full h-1/6">
                        <div class="bg-white shadow m-4 row-span-2 rounded-lg col-span-5">
                        <div class="p-8 space-y-8 min-w-200">
                            <div class="flex relative rounded-full w-1/2 justify-between">
                            <input
                                type="search"
                                id="default-search"
                                class="block w-full p-4 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for products" required />
                            <div class="absolute inset-y-0 right-1 flex items-center pointer-events-none">
                                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                        </div>
                        <div className="grid grid-flow-col gap-3 justify-start  w-2/2">
                        <div className='flex flex-row'>
                            <p>View By:</p>
                            <img src={g3} width="25" height="25" class="object-cover m-1"></img>
                            <img src={g1} width="25" height="25" class="object-cover m-1"></img>
                            <img src={g2} width="25" height="25" class="object-cover m-1"></img>
                        </div>
                        <div className='grid grid-flow-col content-start'>
                            <label>Sort By:</label>
                            <select id="small" class="block ml-2 w-40 text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Name A-Z</option>
                                <option value="1">Test</option>
                                <option value="2">Test</option>
                                <option value="3">Test</option>
                                <option value="4">Test</option>
                            </select>
                        </div>
                    </div>
                        <table class="relative text-sm text-left text-gray-500 h-64 p-4">
                            <button
                                type="button"
                                className='m-1 bg-green-700 text-white rounded-md p-1 w-32 absolute right-0 -top-5'>Select All
                            </button>
                            <tbody className=''>
                                {menus.map((item, index) => (
                                    <tr key={index} class="w-96 bg-white border-b hover:bg-gray-50 border-none">
                                        <td class="p-1 border-none"><img src={item.image} width="150" height="150" class="object-cover"></img></td>
                                        <td class="py-2 border-none font-semibold text-gray-900 ">
                                        <div class="text-base border-none font-semibold">{item.name}</div>
                                        <td class="py-2 px-6 border-none font-semibold text-gray-900">Php {item.price}.00</td>
                                        </td>
                                        <td class="py-4 px-6 border-none font-semibold text-gray-900">
                                            <button class="justify-center font-bold text-gray-900">Add to Deal</button>
                                        </td> 
                                        
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                        <div class="bg-white row-span-4 col-span-5 justify-self-start w-full">
                            
                            <div class="flex flex-col justify-between p-8 space-y-8 min-w-94 h-full">
                                <div className='m-2 relative'>
                                    <div className='mt-4'>
                                        <label className="text-green-700 font-bold text-md">Deal Type:</label>
                                        <div className="flex justify-between form-check">
                                            <div className="flex-col w-full">
                                                
                                                <div className="flex mb-3">
                                                    <input
                                                        name="flexRadioDefault"
                                                        id="flexRadioDefault1" 
                                                        className='form-check-input h-4 w-4 border border-gray-300 bg-white checked:bg-green-600 checked:border-green-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer' type="radio"/><p>Fixed Discount</p>
                                                </div>
                                            </div>
                                            <div className="flex-col w-full">
                                                
                                                <div className="flex mb-3">
                                                    <input 
                                                        name="flexRadioDefault"
                                                        id="flexRadioDefault2" 
                                                        className='form-check-input h-4 w-4 border border-gray-300 bg-white checked:bg-green-600 checked:border-green-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer' type="radio" /><p>Percent Off</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-4'>
                                        <label className="text-green-700 font-bold text-md">Discount:</label>
                                        <div className="flex justify-between form-check">
                                            <div className="flex-col w-full">
                                                
                                                <div className="flex mb-3">
                                                    <input
                                                        name="flexRadioDefault"
                                                        id="flexRadioDefault1" 
                                                        className='form-check-input h-4 w-4 border border-gray-300 bg-white checked:bg-green-600 checked:border-green-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer' type="radio"/><p>Fixed Discount</p>
                                                </div>
                                                <input  className='self-end border border-gray p-1 w-5/6' type="text" value="Php 0.00" />

                                            </div>
                                            <div className="flex-col w-full">
                                                
                                                <div className="flex mb-3">
                                                    <input 
                                                        name="flexRadioDefault"
                                                        id="flexRadioDefault2" 
                                                        className='form-check-input h-4 w-4 border border-gray-300 bg-white checked:bg-green-600 checked:border-green-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer' type="radio" /><p>Percent Off</p>
                                                </div>
                                                <input className='self-end border border-gray p-1 w-5/6' type="text" value="0%" />

                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-4'>
                                        <label className="text-left">Select Day:</label>
                                        <div className="flex items-stretch mt-2 mb-3">
                                            <label className='self-end font-bold mr-1'>From</label>
                                            <select id="small" className="border border-gray p-1 w-2/6 text-center text-gray-800">
                                                <option selected>Monday</option>
                                                <option value="1">Tuesday</option>
                                                <option value="2">Wednesday</option>
                                                <option value="3">Thursday</option>
                                                <option value="4">Friday</option>
                                                <option value="5">Saturday</option>
                                                <option value="6">Saturday</option>
                                            </select>
                                            <label className='self-end font-bold ml-1'>To</label>
                                            <select id="small" className="border border-gray p-1 w-2/6 text-center text-gray-800 mr-2">
                                                <option selected>Friday</option>
                                                <option value="1">Monday</option>
                                                <option value="2">Tuesday</option>
                                                <option value="3">Wednesday</option>
                                                <option value="4">Thursday</option>
                                                <option value="5">Saturday</option>
                                                <option value="6">Sunday</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='mt-4'>
                                        <label className="text-left">Select Date:</label>
                                        <div className="flex items-stretch mt-2 mb-3">
                                            <label className='self-end font-bold mr-1'>From</label>
                                            <input className='border border-gray p-1 text-center w-2/6' value="08/15/2021" type="text" />
                                            <label className='self-end font-bold ml-1'>To</label>
                                            <input className='border border-gray p-1 text-center w-2/6' value="08/31/2021" type="text" />
                                        </div>
                                    </div>
                                    <div className='absolute right-12'>
                                        <input type="checkbox" className='self-end mr-2' />
                                        <label className='text-center'>Recurring Forever</label>
                                    </div>
                                </div>
                                <div class="justify-center align-self-end text-center justify-end">
                                    <button onClick={() => {
                                        modalopenclose(false);
                                    } } className='rounded-lg font-bold  bg-green-700 text-white text-xl px-6 py-2'>{isEditting ? "SAVE CHANGES" : "CREATE DEAL" }</button>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
                </div>
                )
            }
            </div>
            
        </div>
    )
}

export default Deals;