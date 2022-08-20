import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import courseimg1 from "../../assets/tax1.png"
import './blog.css';

const Blog = () => (
    <div className="gpt3__blog section__padding" id="blog">
        <div className="gpt3__blog-heading">
            <h1 className="gradient__text">Our Services :)</h1>
        </div>
        <div className='container'>
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
        </div>
    </div>
);

export default Blog;