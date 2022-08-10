import React, {useState, useEffect} from 'react';
import DashboardHeader from '../../../components/DashboardHeader';

import all_orders from '../../../constants/orders';
import {calculateRange, sliceData} from '../../../utils/table-pagination';


import '../styles.css';
// import DoneIcon from '../../assets/icons/done.svg';
// import CancelIcon from '../../assets/icons/cancel.svg';
// import RefundedIcon from '../../assets/icons/refunded.svg';

function Orders () {
    const [search, setSearch] = useState('');
    const [orders, setOrders] = useState(all_orders);
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState([]);
    const [activeTab, setActiveTab] = useState([]);


    var extension = '../../../assets/';

    const [modalcontent, setmodalcontent] = useState([]);
    const [openmodal, setopenmodal] = useState(false);
    const [opennxtmodal, setopennxtmodal] = useState(false);




    const changecontent = (orderID) => {
      let found = all_orders.find(obj => {
        return obj.id === orderID;
      })
      setmodalcontent(found);
      setopenmodal(true);
    }

    const modalopenclose = (stat) => {
      setopenmodal(stat);
    }

    const openNextModal = (bool) => {
      setopennxtmodal(bool);
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

    return(
        <div className='dashboard-content'>
            <DashboardHeader
                btnText="New Order" />
            <div className='flex flex-row flex-nowrap justify-around -mb-3 mt-5 '>
                {/* TO DO: loop */}
                <button
                    onClick={() => setActiveTabHandler('incoming')}
                    id='incoming'
                    className={activeTab === 'incoming' ? 'tab-item-active rounded-md' : 'tab-item bg-gray-400 rounded-md p-1'
                }>INCOMING</button>
                <button
                    onClick={() => setActiveTabHandler('preparing')}
                    id='preparing' className={activeTab === 'preparing' ? 'tab-item-active rounded-md' :  'tab-item bg-gray-400 rounded-md p-1'
                }>PREPARING</button>
                <button
                    onClick={() => setActiveTabHandler('pickup')}
                    id='pickup' className={activeTab === 'pickup' ? 'tab-item-active rounded-md' : 'tab-item bg-gray-400 rounded-md p-1'
                }>PICK-UP/DELIVERY</button>
                <button
                    onClick={() => setActiveTabHandler('cancelled')}
                    id='cancelled' className={activeTab === 'cancelled' ? 'tab-item-active rounded-md' : 'tab-item bg-gray-400 rounded-md p-1'}>
                CANCELLED</button>
                <button
                    onClick={() => setActiveTabHandler('completed')}
                    id='completed' className={activeTab === 'completed' ? 'tab-item-active rounded-md' : 'tab-item bg-gray-400 rounded-md p-1'}>
                COMPLETED</button>
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
                      <div class="relative modal-dialog modal-dialog-centered p-4 w-full max-w-3xl h-full md:h-auto ">

                          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">

                              <div class="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
                                  <h4 class="text-base font-semibold text-gray-900 dark:text-white ml-15">
                                    Order #{modalcontent.id} <span class="text-sm font-normal"> {modalcontent.date} / {modalcontent.timer} </span>
                                  </h4>
                                  <button type="button" class="font-semibold text-black-600 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => modalopenclose(false)}>
                                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                  </button>
                              </div>

                              <div class="p-6 space-y-6">
                                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                      <tbody>
                                {modalcontent.items.map((item, index) => (


                                       <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td class="p-4 w-32"><img src={item.image} width="143" height="156" class="object-cover"></img></td>
                                        <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                                        <div class="text-base font-semibold">{item.name}</div>
                                        <div class="font-normal text-gray-500">{item.description}</div>
                                        </td>
                                        <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">Php {item.price}.00</td>
                                        <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">{item.quantity}</td>
                                        <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">Php {item.totalprice}.00</td>
                                       </tr>
                                ))}

                                  <tr >
                                      <td colspan="3" class="border-0"></td>
                                      <td  class="border-0 py-4 px-6 font-semibold text-green-900 dark:text-white">TOTAL</td>
                                      <td class="border-0 py-4 px-6 font-semibold text-gray-900 dark:text-white">Php {modalcontent.totalamount}.00</td>
                                  </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div class="flex items-center justify-center p-6 space-x-2 rounded-b dark:border-gray-600 border-0">
                                  <button type="button" class="text-white w-48 bg-orange-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">MODIFY ORDER</button>
                                  <button type="button" class="text-white w-48 bg-green-700  rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500">ACCEPT ORDER</button>
                              </div>
                          </div>
                      </div>
                  </div>

                : null}


                {opennxtmodal === true ?
                <div id="checkItem" tabindex="-1" aria-hidden="true" className="modal fade flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                    <div class="relative modal-dialog modal-dialog-centered p-4 w-full max-w-3xl h-full md:h-auto ">

                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">

                            <div class="flex justify-between items-start p-5 rounded-t dark:border-gray-600 ">
                                <button type="button" class="font-semibold text-black-600 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => openNextModal(false)}>
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </button>
                            </div>

                            <div class="p-6 space-y-6 leading-none" >

                            <p class="font-semibold"> Type of Request: <span class="font-normal"> Cancellation </span></p>
                              <p class="font-semibold"> Customer Name: <span class="font-normal"> Juan Dela Cruz</span></p>
                              <p class="font-semibold"> Contact Number: <span class="font-normal"> 09124895766 </span></p>
                              <p class="font-semibold"> Reason: <span class="font-normal"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua </span></p>
                            </div>
                            <div class="flex items-center justify-center p-6 space-x-2 rounded-b dark:border-gray-600 border-0">
                                <button type="button" class="text-white w-48 bg-green-700  rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500">ORDER DETAILS</button>
                                <button type="button" class="text-white w-48 bg-green-700  rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500">ACCEPT</button>

                                <button type="button" class="text-white w-48 bg-red-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">DECLINE</button>
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
