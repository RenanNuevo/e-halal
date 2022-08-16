import instapay from '../assets/instapay.png';
import ewallet from '../assets/ewallet.png';
import card from '../assets/card.png';
import bank from '../assets/bank.png';

const gateways= [
    {
        id: 1,
        name: 'E-wallets with Instapay',
        description: 'Cash in from your GCash or Paymaya app',
        img: ewallet,
    },
    {
        id: 2,
        name: 'Online banking with InstaPay',
        description: "Go to bank's app or website to cash in",
        img: instapay,
    },
    {
        id: 3,
        name: 'Linked Bank Account',
        description: 'Link your account once for seamless cash-ins',
        img: bank,
        
    },
    {
        id: 4,
        name: 'Cards',
        description: 'Use Visa, Master Card and more',
        img: card,
    }
]

export default gateways;
