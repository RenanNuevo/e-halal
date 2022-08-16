import React, { useState, useEffect } from 'react';
import DashboardHeader from '../../../components/DashboardHeader';
import Badge from '../../../components/Badge';
import transHistory from '../../../constants/transHistory';
import gateways from '../../../constants/gateways';
import { calculateRange, sliceData } from '../../../utils/table-pagination';
// import { DataTable } from '../../../components/DataTable'
import '../styles.css';
import { data } from 'autoprefixer';
// import DoneIcon from '../../assets/icons/done.svg';
// import CancelIcon from '../../assets/icons/cancel.svg';
// import RefundedIcon from '../../assets/icons/refunded.svg';

function Ewallet () {
    const [activeTab, setActiveTab] = useState('incoming');
    const [openmodal, setOpenmodal] = useState(false);

    const handleOpenModal = () => {
        setOpenmodal(true);
    }
  
    const handleCloseModal = (stat) => {
        setOpenmodal(stat);
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
            <div className='bg-white flex overflow-auto flex-col rounded-lg m-6 p-6'>
                <div class="grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-2">
                    <div class=" rounded-lg col-span-2 p-4 m-3 border">
                        <p class="text-green-700 text-2xl font-bold mb-4">Current Balance:</p>
                        <p class="text-green-700 text-5xl font-bold mx-auto text-center">PHP 454, 000.00</p>
                    </div>
                    <div class="grid rounded-lg col-span-1 content-between m-4 gap-6">
                        <button onClick={() => handleOpenModal()} class="text-white bg-green-700 rounded-lg h-24 text-2xl font-bold">CASH IN</button>
                        <button onClick={() => handleOpenModal()} class="text-white bg-green-700 rounded-lg h-24 text-2xl font-bold">CASH OUT</button>
                    </div>
                    <div class="h-full rounded-lg col-span-3 row-span-3 p-4 m-4 border">
                        <p class="text-green-700 text-2xl font-bold mb-4">Transaction History:</p>
                        <ul class="flex flex-col">
                            {
                                transHistory.map((tran, id) => (
                                    <li key={id} class="border-gray-400 flex flex-row mb-0.5">
                                        <div class=" border select-none cursor-pointer bg-white dark:bg-gray-800 flex flex-1 items-center p-4">
                                            <div class=" mr-4 bg-gray-200 px-5 py-2 text-center">
                                                <p className='font-extrabold text-lg'>{tran.day}</p>
                                                <p className='text-xs uppercase'>{tran.month}</p>
                                            </div>
                                            <div class="flex-1 pl-1 md:mr-16">
                                                <div class="text-xl font-bold dark:text-white">
                                                    {tran.transaction}
                                                </div>
                                                <div class="text-gray-600 dark:text-gray-200 text-sm">
                                                    {tran.time}
                                                </div>
                                            </div>
                                            <div class="text-green-700 font-bold dark:text-green-800 text-xl">
                                                {tran.amount}
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                        {openmodal === true ?
                            <div id="modalEl" tabindex="-1" aria-hidden="true" className="modal fade flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                                    <div class="relative modal-dialog modal-dialog-centered p-4 w-full max-w-screen-md h-full md:h-auto">
                                    
                                        <div class="relative bg-white rounded-lg shadow">
                                        <div className='items-center justify-center p-8 w-full'>
                                            <ul class="flex flex-col w-full">
                                                {
                                                    gateways.map((gateway, id) => (
                                                        <li class="border mb-0.5 flex flex-row">
                                                            <div class="select-none cursor-pointer flex flex-1 items-center p-4">
                                                                <div class="mr-3 bg-gray-200 p-4 text-center">
                                                                    <a href="#" class="block relative">
                                                                        <img alt="profil" src={gateway.img} class="mx-auto object-cover rounded-full h-15 w-15 "/>
                                                                    </a>
                                                                </div>
                                                                <div class="flex-1 pl-1 mr-16">
                                                                    <div class="font-medium dark:text-white">
                                                                        {gateway.name}
                                                                    </div>
                                                                    <div class="text-gray-600 dark:text-gray-200 text-sm">
                                                                        {gateway.description}
                                                                    </div>
                                                                </div>
                                                                <button class="w-24 text-right flex justify-end">
                                                                    <svg width="20" fill="currentColor" height="20" class="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                                                                        </path>
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>

                                        <div class="flex items-center justify-center p-6 space-x-2 rounded-b border-0">
                                            <button
                                                onClick={() => handleCloseModal(false)}
                                                type="button"
                                                class="text-white font-bold w-48 bg-red-400  rounded-lg border border-gray-200 
                                                text-sm font-medium px-5 py-2.5 focus:z-10"
                                                >CANCEL</button>
                                        </div>
                                    </div>
                                    </div>
                            </div>
                        : null}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Ewallet;