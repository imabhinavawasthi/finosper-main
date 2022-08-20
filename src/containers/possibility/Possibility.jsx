import React from 'react';
import { NavLink } from 'react-router-dom';
import possibilityImage from '../../assets/tax3.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import './possibility.css';

const Possibility = () => (
    <div className="gpt3__possibility section__padding" id="possibility">
        <div className="gpt3__possibility-image">
            <img className='animated-logo-possibility' src={possibilityImage} alt="possibility" />
        </div>
        <div className="gpt3__possibility-content">
            <h1 className="gradient__text">Everything in just one click <span className='click-icon' ><FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon></span></h1>
            <div className='services-hr-css'>
            <hr className='hr-css'/>
                12A/80G Registration
                <hr className='hr-css'/>
                Company/LLP Registration
                <hr className='hr-css'/>
                Society Registration
                <hr className='hr-css'/>
                Future & Options Taxations
                <hr className='hr-css'/>
                Share/Mutual Fund Return
                <hr className='hr-css'/>
                Producer Company
                <hr className='hr-css'/>
            </div>
            <h4><NavLink to="/services"><strong>GET STARTED NOW</strong></NavLink></h4>
        </div>
    </div>   
);

export default Possibility;