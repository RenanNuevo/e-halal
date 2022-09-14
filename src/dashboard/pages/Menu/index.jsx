import React, { useState, useEffect } from 'react';
import DashboardHeader from '../../../components/DashboardHeader';
import Badge from '../../../components/Badge';
import menus from '../../../constants/menu';
import { calculateRange, sliceData } from '../../../utils/table-pagination';
// import { DataTable } from '../../../components/DataTable'
import '../styles.css';

function Menu () {
    const [search, setSearch] = useState('');
    const [menusData, setMenus] = useState(menus);
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState([]);
    const [activeTab, setActiveTab] = useState('incoming');
    const [openmodal, setOpenmodal] = useState(false);
    
    const modalopenclose = (stat) => {
        setOpenmodal(stat);
    }

    useEffect(() => {
        setPagination(calculateRange(menus, 7));
        setMenus(sliceData(menus, page, 7));
    }, []);

    // Search
    const __handleSearch = (event) => {
        setSearch(event.target.value);
        if (event.target.value !== '') {
            let search_results = menusData.filter((item) =>
                item.delivery.toLowerCase().includes(search.toLowerCase()) ||
                item.timer.toLowerCase().includes(search.toLowerCase()) ||
                item.id.toLowerCase().includes(search.toLowerCase())
            );
            setMenus(search_results);
        }
        else {
            __handleChangePage(1);
        }
    };

    // Change Page
    const __handleChangePage = (new_page) => {
        setPage(new_page);
        setMenus(sliceData(menus, new_page, 7));
    }

    const setActiveTabHandler = (id) => {
        setActiveTab(id);
    }

    const tabs = ['incoming', 'preparing', 'pickup', 'cancelled', 'completed']
    const tableHeaders = ['Name', 'Image', 'Description', 'Price', 'Preparation Time', 'Tagged', 'Category']

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
                    <p className='text-xl font-bold-md'>Menu List</p>
                    <div className=''>
                        <button
                            onClick={() => modalopenclose(true)}
                            className='m-1 bg-green-700 text-white rounded-md p-1.5'>ADD MENU
                        </button>
                        <button 
                            className='m-1 bg-red-500 text-white rounded-md p-1.5'>CANCEL
                        </button>
                    </div>
                </div>
                <table>
                    <thead>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Preparation Time</th>
                        <th>Tagged</th>
                        <th>Category</th>
                    </thead>

                    {menusData.length !== 0 ?
                        <tbody>
                            {menusData.map((menu, index) => (
                                <tr key={index}>
                                    <td><span>{menu.name}</span></td>
                                    <td><span>
                                    <img
                                        src={menu.image}
                                        alt="logo" />
                                        </span>
                                        </td>
                                    <td>
                                        <span>{menu.description}</span>
                                    </td>
                                    <td><span>{menu.price}</span></td>
                                    <td><span>{menu.prep_time}</span></td>
                                    <td class="tagged"><span>{menu.tagged}</span></td>
                                    <td><span>{menu.category}</span></td>
                                </tr>
                            ))}
                        </tbody>
                    : null}
                </table>

                {menusData.length !== 0 ?
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
                <div class="relative bg-white rounded-lg shadow">
                    <div class="flex justify-between px-6 mt-4 pt-2 rounded-t">
                        <p class="font-bold">Add Menu</p>
                    </div>
                    <div class="p-6 ">
                        <table class="w-full text-sm text-left text-gray-500">
                            <thead class="menu">
                                <th>Name</th>
                                <th>Image</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Preparation Time</th>
                            </thead>
                            <tbody>
                            <tr class="bg-white border-b hover:bg-gray-50">
                                        <td class="p-4 w-32"><input type='text' class="bg-gray-100 border border-grey p-2" /></td>
                                        <td colspan="1" class="w-3">
                                            <label for="files" class="bg-green-700 text-white rounded-lg p-2 px-4">Upload</label>
                                            <input type="file" id="files"  placeholder="BROWSE"  class="hidden"/>
                                        </td>
                                        <td class="p-4 w-32"><input type='text' class="bg-gray-100 border border-grey p-2" /></td>
                                        <td class="p-4 w-32"><input type='text' class="bg-gray-100 border border-grey p-2" /></td>
                                        <td class="p-4 w-32"><input type='text' class="bg-gray-100 border border-grey p-2" /></td>
                                    </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="flex items-center justify-center p-6 space-x-2 rounded-b border-0">
                        <button
                            // onClick={() => handleCloseModal(false)}
                            type="button"
                            class="text-white w-48 bg-green-700  rounded-lg border border-gray-200 
                            text-sm font-medium px-5 py-2 hover:text-gray-900 focus:z-10"
                            >SAVE</button>
                            <button
                                onClick={() => modalopenclose(false)}

                                        type="button"  
                                        class="text-white w-48 bg-red-500 hover:bg-red-800 focus:ring-4 focus:outline-none 
                                        focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                    >CANCEL</button>
                    </div>
                </div>
                </div>
                </div>
                :
                null
            }
            </div>
        </div>
    )
}

export default Menu;