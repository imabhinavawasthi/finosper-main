import React from 'react';
import './home.css'
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from '../../containers';
import { CTA, Brand, Navbar } from '../../components';

const Home = (props) => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar userdata={props.userdata} />
      <Header userdata={props.userdata} />
    </div>
    {/* <Brand /> */}
    {/* <WhatGPT3 /> */}
    <Features />
    <Possibility />

    <Blog />
    <div className='container mb-5'>
      <CTA />
    </div>
    <Footer />
  </div>
);

export default Home;