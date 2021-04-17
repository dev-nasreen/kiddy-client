import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import AboutUs from '../AboutUs/AboutUs';
import Header from '../Header/Header';
import Packages from '../Packages/Packages';
import Pricing from '../Pricing/Pricing';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <AboutUs></AboutUs>
            <Packages></Packages>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;