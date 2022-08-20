import React, { useState } from 'react';
import './tabsapp.css';
const TabsApp = (props) => {

    const [currentTab, setCurrentTab] = useState('1');
    const tabs = props.tabs;

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }

    return (
        <div >
            <div >
                <div className='tabs-css'>
                    {tabs.map((tab, i) =>
                        <button
                            className='col' key={i}
                            id={tab.id}
                            disabled={currentTab === `${tab.id}`}
                            onClick={(handleTabClick)}>
                            {tab.tabTitle}
                        </button>
                    )}
                </div>
                <div className='content-tabs-css'>
                    {tabs.map((tab, i) =>
                        <div key={i}>
                            {
                                currentTab === `${tab.id}` &&
                                <div>
                                    <h3 className='title-tabs-css'>{tab.title}</h3>
                                    <p>{tab.content}</p>
                                </div>
                            }

                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default TabsApp;