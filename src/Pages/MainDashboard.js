import React from 'react'
import "../assets/Maindashboard.css"
import oneImg from "../assets/img/oneImg.webp";
import nature from "../assets/img/imgUtt.jpg";
import riverImg from "../assets/img/riverImg.webp";



function MainDashboard() {
    return (
        <div className='main'>
            {/* <h1>MainDashboadr</h1> */}

            <div className='content'>
                <div className='img-content'>
                    <img src={oneImg} alt="start" width="900" height="400" />
                    <div className='text-content'>
                        <h3 className='text-tead'>
                            “Jobs fill your pocket, but adventures fill your soul.” – ...
                            “To Travel is to Live.” – ...
                            “Life is either a daring adventure or nothing at all.” – ...
                            “Blessed are the curious for they shall have adventures.” – ...
                            “Take only memories, leave only footprints.” – ...
                            “Live your life by a compass not a clock.” –
                        </h3>
                    </div>
                </div>
                <div className='img-content'>
                    <img src={nature} alt="start" width="60%" height="40%" />
                    <img src={riverImg} alt="start" width="60%" height="40%" />
                    {/* <img src={nature} alt="start" width="60%" height="40%" /> */}
                </div>
            </div>
        </div>
    )
}

export default MainDashboard;