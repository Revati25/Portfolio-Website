import React from 'react';
import aim from '../src/assets/images/company2.jpg';
import { NavLink } from 'react-router-dom';
import hand from '../src/assets/images/hand.png';
import cv from '../src/assets/images/download.png';



const About = ()=>{
    return(
     <>
      
      <section id="header2" className="d-flex  align-items-center">
            <div className="container-fluid nav_bg">
            <div className="row">
              <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-lg-6 col-md-10 c pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column about">
                 <h1 className="top2">
                   About Company
                  </h1> 
                  <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <div className="started d-flex">
                  <div className="mt-3 me-5 button1">
                  <button className="buttons1 ">
    <img src={hand} className="hand" />Hire Me
  </button>

          </div> 
          <div className="mt-3  button2">
          <button className="buttons2 ">
    <img src={cv} className="hand" />Download CV
  </button>

          </div>
          </div>
                </div>
                
                <div className="col-lg-6 order-1 order-lg-2 headers-img1">
                 <img src={aim} className="img-fluid animateds" alt="home img" />
               
                </div>
              </div>
             
              </div>
            </div>

            </div>
        
      
         
          </section>
       

          




       
    </>
    );
};

export default About;