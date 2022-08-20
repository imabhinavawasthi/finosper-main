import React from "react";
import ai from "../../assets/tax2.png";
import Article from "../../components/article/Article"
import "./coursesheader.css";
import Blog from "../../containers/blog/Blog"
import courseimg1 from "../../assets/tax1.png"
import TabsApp from "../../parts/tabs/TabsApp"
import { useNavigate } from 'react-router';
import {
    NavLink
} from "react-router-dom";
const CoursesHeader = (props) => {
    const navigate = useNavigate();
    const curruser = props.userdata;
    return (
        <div>
            <div className="gpt3__header section__padding" id="home">
                <div className="gpt3__header-content">
                    <h1 className="gradient__text">
                        Services Page
                    </h1>
                    <p>
                        Prospering Your Money Plant!
                    </p>

                    <div className="gpt3__header-content__input">
                        {/* <input type="email" placeholder="Your Email Address" /> */}
                        <a className="gpt3__header-content__input" href="#serviceslist"><button type="button">Explore Services</button></a>
                    </div>

                </div>

                <div className="gpt3__header-image-courses animated-header-image">
                    <img src={ai} />
                </div>
            </div>
            <div className="container" id="serviceslist">
                <div className="row">
                    <div className="gpt3__blog-heading">
                        <h1 className="gradient__text">Our Services :)</h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-6 col-md-12 article-css-card'>
                    <Article imgUrl={courseimg1} date="By Finosper Wealth Management LLP" title="Income Tax Return" link="/services" />
                        

                    </div>
                    <div className='col-lg-6 col-md-12'>
                        <Article  imgUrl={courseimg1} date="By Finosper Wealth Management LLP" title="GST Return" link="/services" />

                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-6 col-md-12 article-css-card'>
                        <Article imgUrl={courseimg1} date="By Finosper Wealth Management LLP" title="Internal Audit" link="/services" />

                    </div>
                    <div className='col-lg-6 col-md-12'>
                        <Article imgUrl={courseimg1} date="By Finosper Wealth Management LLP" title="Registration" link="/services" />

                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-6 col-md-12 article-css-card'>
                        <Article imgUrl={courseimg1} date="By Finosper Wealth Management LLP" title="Share/Mutual Fund Return" link="/services" />

                    </div>
                    <div className='col-lg-6 col-md-12'>
                        <Article imgUrl={courseimg1} date="By Finosper Wealth Management LLP" title="Future & Options Taxations" link="/services" />

                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-6 col-md-12 article-css-card'>
                        <Article imgUrl={courseimg1} date="By Finosper Wealth Management LLP" title="Producer Company" link="/services" />

                    </div>
                    <div className='col-lg-6 col-md-12'>
                        <Article imgUrl={courseimg1} date="By Finosper Wealth Management LLP" title="12A/80G Registration" link="/services" />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoursesHeader;
