import React from 'react';
import { NavLink } from 'react-router-dom';
import './article.css';

const Article = ({ imgUrl, date, title, link }) => (
    <NavLink to={link}>
        <div className="gpt3__blog-container_article article-css-card">
            <div className="gpt3__blog-container_article-content">
                <div className='container'>
                    <div className='row'>
                        <div className='col-8'>
                            <div>
                                <p>{date}</p>
                                <h3>{title}</h3>
                            </div>
                            <h6 className="navlink-course-btn">Explore Now</h6>
                        </div>
                        <div className='col-4'>
                            <img className='img-course-css' src={imgUrl} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </NavLink>
);

export default Article;