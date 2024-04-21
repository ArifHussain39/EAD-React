import React, { useEffect } from 'react'
import img1 from './assets/images/AOS/download1.jpg';
import img2 from './assets/images/AOS/download2.jpg';
import img3 from './assets/images/AOS/download3.jpg';
import img4 from './assets/images/AOS/download4.jpg';
import img5 from './assets/images/AOS/download5.jpg';
import AOs from 'aos';
import 'aos/dist/aos.css';


function AOS() {

    AOs.init();

    return (
        <>

            <h1>AOS Animations</h1>
            <div >
                <img data-aos="fade-right" src={img1} alt="AOS" width={'600px'} />
                <br />
                <img data-aos="fade-left" src={img2} alt="AOS" width={'600px'} />
                <br />
                <img data-aos="fade-up" src={img3} alt="AOS" width={'600px'} />
                <br />
                <img data-aos="fade-in" src={img4} alt="AOS" width={'600px'} />
                <br />
                <img data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false" src={img5} alt="AOS" width={'600px'} 
                />

            </div>



        </>

    )
}

export default AOS;