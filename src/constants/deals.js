const deals = [
    {
        id: 1,
        number: '#000001',
        isAllMenu: false,
        products: [{name: 'Tabbouleah Salad', amount: '476.00'}, {name: 'Tabbouleah Salad', amount: '476.00'}],
        offer: 'One-Time',
        schedule: '02/01/2022',
        voucher: 'LOVE2022',
        discount: 'Php 50.00',
    },
    {
        id: 2,
        number: '#000002',
        isAllMenu: true,
        products: "10YEARS",
        offer: 'Recurring',
        schedule: '02/01/2022',
        voucher: 'LOVE2022',
        discount: 'Php 50.00'
    },
    {
        id: 3,
        number: '#000003',
        isAllMenu: false,
        products: [{name: 'Tabbouleah Salad', amount: '476.00'}, {name: 'Tabbouleah Salad', amount: '476.00'}, {name: 'Tabbouleah Salad', amount: '476.00'}, {name: 'Tabbouleah Salad', amount: '476.00'}],
        offer: 'Recurring',
        schedule: '10/01/2022',
        voucher: 'LOVE2022',
        discount: 'Php 50.00'
    }
]

export default deals;
