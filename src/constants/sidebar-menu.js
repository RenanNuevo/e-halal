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
        title: 'Subscription',
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
    {
        id: 8,
        Icon: <GiPriceTag />,
        path: '/offers',
        title: 'Offers',
        submenu: [
            {
                id: 10,
                path: '/vouchers',
                title: 'Vouchers',
            },
            {
                id: 10,
                path: '/deals',
                title: 'Limited Time Offers',
            }
        ]
    },
    {
        id: 9,
        Icon: <TbSettings />,
        path: '/settings',
        title: 'Settings',
    },
]

export default sidebar_menu;

// const sidebar_menu = [
//     {
//         "title": "General",
//         "icon": "bi-gear-fill",
//         "childrens": [
//             {
//                 "title": "Home",
//                 "icon": "bi-house-fill",
//                 "path": "/"
//             },
//             {
//                 "title": "About",
//                 "icon": "bi-info-circle-fill",
//                 "path": "/about"
//             },
//             {
//                 "title": "Contact",
//                 "icon": "bi-phone-fill",
//                 "childrens": [
//                     {
//                         "title": "Facebook",
//                         "icon": "bi-facebook"
//                     },
//                     {
//                         "title": "Twitter",
//                         "icon": "bi-twitter"
//                     },
//                     {
//                         "title": "Instagram",
//                         "icon": "bi-instagram"
//                     }
//                 ]
//             },
//             {
//                 "title": "FAQ",
//                 "icon": "bi-question-circle-fill"
//             }
//         ]
//     },
//     {
//         "title": "Account",
//         "icon": "bi-info-circle-fill",
//         "childrens": [
//             {
//                 "title": "Login",
//                 "path": "/login"
//             },
//             {
//                 "title": "Register",
//                 "path": "/register"
//             },
//             {
//                 "title": "Forgot Password",
//                 "path": "/forgot-password"
//             },
//             {
//                 "title": "Reset Password",
//                 "path": "/reset-password"
//             }
//         ]
//     },
//     {
//         "title": "Profile",
//         "icon": "bi-person-fill",
//         "childrens": [
//             {
//                 "title": "Profile",
//                 "path": "/profile"
//             },
//             {
//                 "title": "Settings",
//                 "childrens": [
//                     {
//                         "title": "Account",
//                         "path": "/settings/account"
//                     },
//                     {
//                         "title": "Billing",
//                         "childrens": [
//                             {
//                                 "title": "Payment",
//                                 "path": "/settings/billing/payment"
//                             },
//                             {
//                                 "title": "Subscription",
//                                 "path": "/settings/billing/subscription"
//                             }
//                         ]
//                     },
//                     {
//                         "title": "Notifications",
//                         "path": "/settings/notifications"
//                     }
//                 ]
//             },
//             {
//                 "title": "Logout",
//                 "path": "/logout"
//             }
//         ]
//     },
//     {
//         "title": "Advance",
//         "icon": "bi-view-list",
//         "childrens": [
//             {
//                 "title": "Search",
//                 "path": "/search"
//             },
//             {
//                 "title": "History",
//                 "path": "/history"   
//             }
//         ]
//     },
//     {
//         "title": "Support",
//         "icon": "bi-question-circle-fill",
//         "path": "/support"
//     },
//     {
//         "title": "Report Bug",
//         "icon": "bi-bug",
//         "path": "/report-bug"
//     }
// ]

// export default sidebar_menu;