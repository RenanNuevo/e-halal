import { MdPointOfSale } from 'react-icons/md'
import { BiFoodMenu } from 'react-icons/bi'
import { GiTakeMyMoney, GiShoppingCart, GiPriceTag } from 'react-icons/gi'
import { GrAnnounce } from 'react-icons/gr'
import { SiSimpleanalytics } from 'react-icons/si'
import { FaCoins } from 'react-icons/fa'
import { TbSettings } from 'react-icons/tb'

const sidebar_menu = [
    {
        id: 1,
        Icon: <MdPointOfSale /> ,
        path: '/orders',
        title: 'Orders',
    },
    {
        id: 2,
        Icon: <BiFoodMenu /> ,
        path: '/menu',
        title: 'Menu',
    },
    {
        id: 3,
        Icon: <GiTakeMyMoney />,
        path: '/surcharges',
        title: 'Surcharges',
    },
    {
        id: 4,
        Icon: <GrAnnounce />,
        path: '/ads',
        title: 'Advertisement',
    },
    {
        id: 5,
        Icon: <SiSimpleanalytics />,
        path: '/analytics',
        title: 'Analytics',
    },
    {
        id: 6,
        Icon: <FaCoins />,
        path: '/e-wallet',
        title: 'E-Wallet',
    },
    {
        id: 7,
        Icon: <GiShoppingCart />,
        path: '/pos',
        title: 'POS',
    },
    // {
    //     id: 8,
    //     Icon: <GiPriceTag />,
    //     path: '/offers',
    //     title: 'Offers',
    //     submenu: {
    //         id: 10,
    //         path: '/vouchers',
    //         title: 'Vouchers',
    //     }
    // },
    {
        id: 9,
        Icon: <TbSettings />,
        path: '/settings',
        title: 'Settings',
    },
]

export default sidebar_menu;