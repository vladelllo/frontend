import React from 'react';
import Header from '../components/header/Header.js'
import Content from '../components/Content.js'
import Footer from '../components/footer/Footer.js'

import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
        <Header />
        <h2>О нас →</h2>
        <Link to="/">На главную →</Link>

        <Content />
        <Footer />    
    </div>
  );
};

export default About;
