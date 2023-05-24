import React from 'react';
import earth from '../assets/images/Earth.png';
import '../styles/homeview.css';
import ListView from './ListView';

const HomeView = () => (
  <div className="home-view">
    <div className="earth-box">
      <img src={earth} alt="Globe" className="earth-img" />
    </div>
    <p className="metrics-heading">Metrics on covid 19</p>
    <ListView />
  </div>
);

export default HomeView;
