import React from 'react'
import '../assets/Footer.css';
import nature from "../assets/img/imgUtt.jpg";

function FooterComp() {
    return (
        <div className='footer-main'>
            {/* <img src={nature} alt="start" width="60%" height="40%" /> */}
            <div className='footer-conent'>
                <h2>What to do in India</h2>
            </div>
            <div className='footer-img'>
                <div className="image-container">
                    <img src={nature} alt="start" width="400" height="400" className="hover-image"/>
                </div>
                <div className="image-container">
                    <img src={nature} alt="start" width="400" height="400" className="hover-image"/>
                </div>
                <div className="image-container">
                    <img src={nature} alt="Original Image" className="hover-image"/>
                </div>
                
            </div>
            <div className='footerPart'>

            </div>
        </div>
    )
}

export default FooterComp