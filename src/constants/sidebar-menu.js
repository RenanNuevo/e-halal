// import DashboardIcon from '../assets/icons/dashboard.svg';
// import ShippingIcon from '../assets/icons/shipping.svg';
// import ProductIcon from '../assets/icons/product.svg';
// import UserIcon from '../assets/icons/user.svg';
import { MdPointOfSale } from 'react-icons/md'
import { BiFoodMenu } from 'react-icons/bi'
import { GiTakeMyMoney } from 'react-icons/gi'
import { GrAnnounce } from 'react-icons/gr'

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
        id: 4,
        Icon: <GrAnnounce />,
        path: '/analytics',
        title: 'Analytics',
    },
    {
        id: 4,
        Icon: <GrAnnounce />,
        path: '/e-wallet',
        title: 'E-Wallet',
    },
    {
        id: 4,
        Icon: <GrAnnounce />,
        path: '/pos',
        title: 'POS',
    },
    {
        id: 4,
        Icon: <GrAnnounce />,
        path: '/offers',
        title: 'Offers',
    },
    {
        id: 4,
        Icon: <GrAnnounce />,
        path: '/settings',
        title: 'Settings',
    },
]

export default sidebar_menu;