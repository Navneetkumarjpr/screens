import React from 'react'
import Logo from "../images/logo.png"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './header.css';
const Header = () => {
  return (
    <div className='header'>
        <img className='header_logo' src={Logo} alt="" />
        <div className="header_elements">
            <h2 className='head1'>My Assignment</h2>
            <h2 className='head1'>Chat with Mentor</h2>
            <div className="profile_details">
                <div className="account">

                <AccountCircleIcon className='account_circle'/>
                </div>
                <h2 className='head2'>ProfileName  <ExpandMoreIcon/></h2>
                
            </div>
        </div>
    </div>
  )
}

export default Header