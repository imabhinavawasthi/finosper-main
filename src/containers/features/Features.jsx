import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
    {
        title: 'Income Tax Return',
        text: 'Filling in 5 Easy Steps',
    },
    {
        title: 'GST Return',
        text: 'The more complex it is, more easyfit delt with',
    },
    {
        title: 'Internal Audit',
        text: 'Standardize the processes and remove loop holes in your business',
    },
    {
        title: 'Registration',
        text: 'Get personalized help to give birth to your incorporation be it forms, LLP, Co., Society',
    },
];

const Features = () => (
    <div className="gpt3__features section__padding" id="features">
        <div className="gpt3__features-heading">
            <h1 className="gradient__text">Prosper Your Money Plant With Finosper</h1>
            <p>Get Started With Finosper</p>
        </div>
        <div className="gpt3__features-container">
            {featuresData.map((item, index) => (
                <Feature title={item.title} text={item.text} key={item.title + index} />
            ))}
        </div>
    </div>
);

export default Features;