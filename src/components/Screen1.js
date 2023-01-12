import React from 'react'
import './screen1.css';
import GroupsIcon from '@mui/icons-material/Groups';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SellIcon from '@mui/icons-material/Sell';
import { Link } from 'react-router-dom';
const Screen1 = () => {
  return (
    <div className='screen1'>
        <div className="screen1_container">
          <h2 className='heading_screen1'>UI/UX &gt; Refer & Earn</h2>
          <div className="referrals">
            <div className="referrals_inner">
            <div className="referral_components">
                <div className="referral_earning">
                    <h3>Referral Earning</h3>
                    <h1>&#8377; 2,500</h1>
                </div>
                <div className="referral_earning">
                    <h3>Total Referrals</h3>
                    <h1>7</h1>
                </div>
                <div className="referral_earning">
                    <h3>Wallet Balance</h3>
                    <h1>&#8377; 500</h1>
                </div>
            </div>
            <div className="button_withdraw">
               <button className='withdraw_balance'>Withdraw Balance</button>
            </div>
            </div>
            <div className="referral_code">
                <h1>Your Referral Code</h1>
                <h2>E D C H 5 4</h2>
            </div>
          </div>
          <div className="how_it_works">
            <h1>How Does it works ?</h1>
            <div className="works_details">
                <div className="works_item">
                    <div className='works_icon'><GroupsIcon className='groups'/></div>
                    <div className="item_container">
                        <h2>Invite your Friends</h2>
                        <p>Share the link tuteDude.com with your friends</p>
                    </div>
                </div>
                <div className="works_item">
                    <div className='works_icon'><SellIcon className='groups'/></div>
                    <div className="item_container">
                        <h2>Friend purchases any course</h2>
                        <p>Using your REFERRAL CODE in the payments page</p>
                    </div>
                </div>
                <div className="works_item">
                    <div className='works_icon'><CurrencyRupeeIcon className='groups'/></div>
                    <div className="item_container">
                        <h2>You get &#8377; 200 as referral money</h2>
                        <p>On total purchase the friend makes, into wallet</p>
                    </div>
                </div>
                <div className="works_item">
                    <div className='works_icon'><GroupsIcon className='groups'/></div>
                    <div className="item_container">
                        <h2>Your Friend gets &#8377; 200 Off </h2>
                        <p>On his overall fee on successful purchase using your referral code </p>
                    </div>
                </div>
                <div className="works_item">
                    <div className='works_icon'><AccountBalanceWalletIcon className='groups'/></div>
                    <div className="item_container">
                        <h2>Transfer money from wallet</h2>
                        <p>When the wallet balance reaches
₹200 or more, you can withdraw it</p>
                    </div>
                </div>
            </div>
          </div>
          <h3 className="friendswho">
            <Link to="/friendsWhoEnrolled" className='friendwholink'> Friends Who Enrolled </Link>
          </h3>
          <h3 className="friendswho">
            Terms & Conditions
        </h3>
        </div>
    </div>
  )
}

export default Screen1