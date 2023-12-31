import React, { useState } from 'react'
import '../assets/Header.css';
import FooterComp from '../Components/FooterSide';
import ReactDatePicker from 'react-datepicker';

function Header() {

    const [showPage, setShowPage] = useState(false)
    const [date, set] = useState(false)

    const seeToGo = () => {
        console.log("open to new tab");
        setShowPage(true)
    }

    return (
        <div>
            <div className='header'>
                <div className='header-1stCileld'>
                    <h3 className='box' onClick={() => seeToGo()}>See and Go</h3>
                    <h3 className='box'>Plan Your Trip</h3>
                    <h3 className='box'>Travel Essentials</h3>
                    <h3 className='box' >Travel Date</h3>
                    <h3 className='box'>Our Experiences</h3>
                    <h3 className='box'>Journey Map</h3>
                    {
                        showPage ? (<>
                            <div className='seedo'>
                                <div >
                                    <button onClick={() => setShowPage(false)}>Close</button>
                                </div>
                            </div>
                        </>) :
                            (<>

                            </>)
                    }

                    {/* <div className='signoff'>
                        <button className='button1'>Login</button>
                        <button className='button1'>Log out</button>
                    </div> */}
                    <from className="regFrom">
                        <h2>Register Yourself</h2>
                        <input className='inputback' placeholder='Enter your name'></input>
                        <input className='inputback' placeholder='Enter your mobile number'></input>
                        <input className='inputback' placeholder='Enter your pan number'></input>
                        <input className='inputback' placeholder='Enter your location'></input>
                        <input className='inputback' placeholder='Enter your state'></input>

                        <div>
                            <button>Submit</button>
                        </div>
                    </from>

                </div>

            </div>
            <div>
                <FooterComp />
            </div>


        </div>
    )
}

export default Header