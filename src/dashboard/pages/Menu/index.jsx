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
                        className='m-1 bg-green-700 text-white rounded-md p-1.5'>ADD MENU
                    </button>
                    <button 
                        className='m-1 bg-red-500 text-white rounded-md p-1.5'>CANCEL
                    </button>
                        {/* <input
                            type='text'
                            value={search}
                            placeholder='Search..'
                            className='dashboard-content-input'
                            onChange={e => __handleSearch(e)} /> */}
                    </div>
                </div>
                {/* <DataTable data={menusData} headers={tableHeaders} /> */}
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
                                    <td><span>{menu.tagged}</span></td>
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
            </div>
        </div>
    )
}

export default Menu;