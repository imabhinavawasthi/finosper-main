import React from 'react';
import gpt3Logo from '../../logo.svg';
import './footer.css';

const Footer = (props) => {
    let curruser = props.userdata;
    return (
        <div className="gpt3__footer ">
            {/* <div className="gpt3__footer-heading">
                <h1 className="gradient__text">Do you want to step in to the future before others</h1>
            </div>
    
            <div className="gpt3__footer-btn">
                <p>Request Early Access</p>
            </div> */}

            <div className="gpt3__footer-links">
                <div className="gpt3__footer-links_logo">
                    {/* <img src={gpt3Logo} alt="gpt3_logo" /> */}
                    <h3 className='logocss'><strong>
                        Finos<span className="logored">per</span>
                    </strong></h3>
                    <p>Prospering Your Money Plant, <br /> All Rights Reserved</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Links</h4>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Company</h4>
                    <p>Terms & Conditions </p>
                    <p>Careers</p>
                    <p>Interships</p>
                    <p>Contact</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Get in touch</h4>
                    <p>India</p>
                    {/* <p>085-132567</p> */}
                    <p>finosper.ho@gmail.com</p>
                </div>
            </div>

            <div className="gpt3__footer-copyright">
                <p>@2022 Finosper. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;