import React, {useState, useEffect} from 'react';
import DashboardHeader from '../../../components/DashboardHeader';

import all_orders from '../../../constants/orders';
import { calculateRange, sliceData } from '../../../utils/table-pagination';
import Badge from '../../../components/Badge';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import g1 from  '../../../assets/g1.png'
import g2 from  '../../../assets/g2.png'
import g3 from  '../../../assets/g3.png'
import '../styles.css';

function Orders () {
    const [search, setSearch] = useState('');
    const [orders, setOrders] = useState(all_orders);
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState([]);
    const [activeTab, setActiveTab] = useState('incoming');
    const [modalcontent, setmodalcontent] = useState([]);
    const [openmodal, setOpenmodal] = useState(false);
    const [opennxtmodal, setopennxtmodal] = useState(false);
    const [openModifyModal, setOpenModifyModal] = useState(false);

    const changecontent = (orderID) => {
      let found = all_orders.find(obj => {
        return obj.id === orderID;
      })
      setmodalcontent(found);
      setOpenmodal(true);
    }

    const modalopenclose = (stat) => {
      setOpenmodal(stat);
    }

    const openNextModal = (bool) => {
      setopennxtmodal(bool);
    }

    const handleOpenModifyModal = (bool) => {
        setOpenModifyModal(bool);
    }

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
                                        <button className='bg-green-500 text-white rounded-md p-1' type="button"  onClick={() => changecontent(order.id)}>
                                          Order Details
                                        </button></div></td>
                                    <td><div>
                                        <button
                                            className='m-1 bg-green-500 text-white rounded-md p-1' type="button" onClick={() => openNextModal(true)}>&#10004;
                                        </button >
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

                {openmodal === true ?
                  <div id="modalEl" tabindex="-1" aria-hidden="true" className="modal fade flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                        <div class="relative modal-dialog modal-dialog-centered p-4 w-full max-w-6xl h-full md:h-auto">
                            { openModifyModal && (
                                <div class="grid grid-cols-6 grid-flow-col shadow bg-green-50 rounded-lg shadow w-full max-w-5xl">
                                    <div class="bg-white shadow m-4 row-span-2 rounded-lg col-span-4 ">
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
                                    <div className="grid grid-flow-col gap-3 justify-start  w-2/2">
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
                                    </div>
                                </div>
                                    <table class="max-h-3 text-sm text-left text-gray-500">
                                        <tbody className='max-h-3 overflow-auto '>
                                            {modalcontent.items.map((item, index) => (
                                                <tr key={index} class="w-96 bg-white border-b hover:bg-gray-50">
                                                    <td class="p-1"><img src={item.image} width="150" height="150" class="object-cover"></img></td>
                                                    <td class="py-2  font-semibold text-gray-900 ">
                                                    <div class="text-base font-semibold">{item.name}</div>
                                                    <td class="py-2 px-6 font-semibold text-gray-900">Php {item.price}.00</td>
                                                    </td>
                                                    {/* <td class="py-4 px-6 font-semibold text-gray-900">Php {item.price}.00</td>*/}
                                                    <td class="py-4 px-6 font-semibold text-gray-900">
                                                        <button class="justify-center font-bold text-gray-900">Add to Cart</button>
                                                    </td> 
                                                    
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                                    <div class="bg-white row-span-2 col-span-2 justify-self-start">
                                        
                                        <div class="flex flex-col justify-start p-8 space-y-8 min-w-200 h-full">
                                            <div class="relative rounded-lg max-w-50 w-full">
                                                <p className="text-teal-800 font-bold text-2xl">Order Details</p>
                                            </div>
                                            <table class="text-sm text-left text-gray-500 justify-content-start">
                                                <tbody className='max-h-3 overflow-auto '>
                                                    {modalcontent.items.map((item, index) => (
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
                                                    ))}
                                                     <tr>
                                                        <td className='text-teal-800 font-bold text-xl'>Total Amount</td>
                                                        <td>Php 776.00</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div class="justify-center align-self-end text-center">
                                                <button onClick={() => {
                                                    modalopenclose(false);
                                                    handleOpenModifyModal(false);
                                                } } className='rounded-lg  bg-green-700 text-white text-xl px-6 py-2'>MODIFY ORDER</button>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            ) ||
                            <div class="relative bg-white rounded-lg shadow">
                                <div class="flex justify-between items-start p-5 rounded-t border-b ">
                                    <h4 class="text-base font-semibold text-gray-900">
                                        Order #{modalcontent.id} <span class="text-sm font-normal"> {modalcontent.date} / {modalcontent.timer} </span>
                                    </h4>
                                    <button type="button" class="font-semibold text-black-600 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" onClick={() => modalopenclose(false)}>
                                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </button>
                                </div>
                                <div class="p-6 space-y-6">
                                    <table class="w-full text-sm text-left text-gray-500">
                                        <tbody>
                                            {modalcontent.items.map((item, index) => (
                                                <tr key={index} class="bg-white border-b hover:bg-gray-50">
                                                    <td class="p-4 w-32"><img src={item.image} width="143" height="156" class="object-cover"></img></td>
                                                    <td class="py-4 px-6 font-semibold text-gray-900 ">
                                                    <div class="text-base font-semibold">{item.name}</div>
                                                    <div class="font-normal text-gray-500">{item.description}</div>
                                                    </td>
                                                    <td class="py-4 px-6 font-semibold text-gray-900">Php {item.price}.00</td>
                                                    <td class="py-4 px-6 font-semibold text-gray-900">{item.quantity}</td>
                                                    <td class="py-4 px-6 font-semibold text-gray-900">Php {item.totalprice}.00</td>
                                                </tr>
                                            ))}
                                            <tr>
                                                <td colspan="3" class="border-0"></td>
                                                <td  class="border-0 py-4 px-6 font-semibold text-green-900">TOTAL</td>
                                                <td class="border-0 py-4 px-6 font-semibold text-gray-900">Php {modalcontent.totalamount}.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="flex items-center justify-center p-6 space-x-2 rounded-b border-0">
                                        <button
                                            onClick={()=> handleOpenModifyModal(true)}
                                            type="button"  
                                            class="text-white w-48 bg-orange-500 hover:bg-blue-800 focus:ring-4 focus:outline-none 
                                            focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                        >MODIFY ORDER</button>
                                    <button
                                        type="button"
                                        class="text-white w-48 bg-green-700  rounded-lg border border-gray-200 
                                        text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
                                        >ACCEPT ORDER</button>
                                </div>
                            </div>
                            }
                        </div>
                  </div>

                : null}


                {opennxtmodal === true ?
                <div id="checkItem" tabindex="-1" aria-hidden="true" className="modal fade flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                    <div class="relative modal-dialog modal-dialog-centered p-4 w-full max-w-3xl h-full md:h-auto ">

                        <div class="relative bg-white rounded-lg shadow">

                            <div class="flex justify-between items-start p-5 rounded-t ">
                                <button type="button" class="font-semibold text-black-600 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" onClick={() => openNextModal(false)}>
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </button>
                            </div>

                            <div class="p-6 space-y-6 leading-none" >

                            <p class="font-semibold"> Type of Request: <span class="font-normal"> Cancellation </span></p>
                              <p class="font-semibold"> Customer Name: <span class="font-normal"> Juan Dela Cruz</span></p>
                              <p class="font-semibold"> Contact Number: <span class="font-normal"> 09124895766 </span></p>
                              <p class="font-semibold"> Reason: <span class="font-normal"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua </span></p>
                            </div>
                            <div class="flex items-center justify-center p-6 space-x-2 rounded-b border-0">
                                <button type="button" class="text-white w-48 bg-green-700  rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">ORDER DETAILS</button>
                                <button type="button" class="text-white w-48 bg-green-700  rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">ACCEPT</button>

                                <button type="button" class="text-white w-48 bg-red-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">DECLINE</button>
                            </div>
                        </div>
                    </div>
                </div>
                : null }


            </div>
        </div>

    )
}

export default Orders;
