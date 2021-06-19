import './App.css';

import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Top from './Top';
import About from './About';
import Service from './Service';
import Works from './Works';
import Contact from './Contact';
import Footer from './Footer';
import Feedback from './Feedback';
const App = () => {
    return (
        <>
        <Top />
        <About />
        <Service />
        <Works />
        <Feedback />
        <Contact />
        <Footer />
        </>
    );
};



export default App;
