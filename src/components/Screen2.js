import React from 'react'
import './screen2.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
const Screen2 = () => {
  return (
    <div className='screen1'>
         <div className="screen1_container">
          <h2 className='heading_screen1'>UI/UX &gt; Refer & Earn &gt; Friends Referred</h2>
          <Link to='./' className="goback">
            <ArrowBackIcon/>
            <h2>go back</h2>
          </Link>
          <div className="referrals_screen2">
             <div className="referral_code_screen2">
                <h1>Your Referral Code</h1>
                <h2>E D C H 5 4</h2>
            </div>
            <div className="referrals_inner_screen2">
                
            <div className="referral_components_screen2">
                    <h3>Wallet Balance</h3>
                    <h1>&#8377; 500</h1>
            </div>
            </div>
          </div>
          <div className="how_it_works">
            <div className="head_works">
            <h3>Friends Who Enrolled </h3>
            <p>(3)</p>
            </div>
            <div className="friends">
                <div className="cover">
                <div className="friends_item">
                    <h3>Dhiraj Saxena</h3>
                     <h2>14 Sep, 2022</h2>
                </div>
                <h3 className='course'>Courses Enrolled(6)</h3>
                <div className="skills">
                    <div className="line1">

                    <h2>UI/UX</h2>
                    <h2>Photoshop</h2>
                    <h2>Illustrator</h2>
                    </div>
                    <div className="line2">
                    <h2>Python</h2>
                    <h2>MERN</h2>
                    <h2>Java</h2>
                    </div>

                </div>
                <div className="amount">
                    <h3>Referral Amount </h3>
                    <h2>&#8377; 185</h2>
                </div>
                </div>
                <div className="cover">
                <div className="friends_item">
                    <h3>Dhiraj Saxena</h3>
                     <h2>14 Sep, 2022</h2>
                </div>
                <h3 className='course'>Courses Enrolled(6)</h3>
                <div className="skills">
                    <div className="line1">

                    <h2>UI/UX</h2>
                    <h2>Photoshop</h2>
                    <h2>Illustrator</h2>
                    </div>
                    <div className="line2">
                    <h2>Python</h2>
                    <h2>MERN</h2>
                    <h2>Java</h2>
                    </div>

                </div>
                
                <div className="amount">
                    <h3>Referral Amount </h3>
                    <h2>&#8377; 185</h2>
                </div>
                </div>

                <div className="cover">
                <div className="friends_item">
                    <h3>Dhiraj Saxena</h3>
                     <h2>14 Sep, 2022</h2>
                </div>
                <h3 className='course'>Courses Enrolled(6)</h3>
                <div className="skills">
                    <div className="line1">

                    <h2>UI/UX</h2>
                    <h2>Photoshop</h2>
                    <h2>Illustrator</h2>
                    </div>
                    <div className="line2">
                    <h2>Python</h2>
                    <h2>MERN</h2>
                    <h2>Java</h2>
                    </div>

                </div>
                
                <div className="amount">
                    <h3>Referral Amount </h3>
                    <h2>&#8377; 185</h2>
                </div>
                </div>
                
            </div>
          </div>
          <h3 className="friendswho_screen2">
            Terms & Conditions
           </h3>
        </div>
    </div>
  )
}

export default Screen2