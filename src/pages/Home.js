import React from 'react';
import Header from '../components/header/Header';
import Column from '../components/Column';
import Footer from '../components/footer/Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <h2>Главная →</h2>
            <Column />
            <Column />
            <Footer />
        </div>
    );
};

export default Home;

