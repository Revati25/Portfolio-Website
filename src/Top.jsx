import React from 'react';
import { NavLink } from 'react-router-dom';
import aim from '../src/assets/images/person.png';



const Top = ()=>{
return(
    <> 
    <div className="container-fluid">   
     <div className="row">
           <section id="header3" className="d-flex  align-items-center topsection">
            <div className="container-fluid nav_bg">
            <div className="row">
              <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column top1">
                <h5>Hi There</h5>
                 <h1 className="abouth">
                  Robert Rutherford
                  </h1> 
                  <h4>Crafting Your Future</h4>
                  
               
                </div>
                <div className="col-lg-6 mx-auto order-3 order-lg-2 headers-img">
                 <img src={aim} className="img-fluid animated" alt="home img" />
               
                </div>
                <div className="col-lg-6 order-1 order-lg-3 navs">
                <nav className="navbar navbar-expand-lg  navbar-light ">
                            
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                                 aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 lists">
                                        <li className="nav-item">
                                            <NavLink className="nav-link" activeClassName="menu_active" exact aria-current="page" to="/">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" activeClassName="menu_active" to="/">About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" activeClassName="menu_active" to="/">Service</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" activeClassName="menu_active" to="/">Portfolio</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" activeClassName="menu_active" to="/">Testimonial</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" activeClassName="menu_active" to="/">Contact</NavLink>
                                        </li>
                                    </ul>
                               </div>
                             
                        </nav>
                    </div>
                    </div>
                
              </div>
             </div>
              </div>
           

        
           
        
                        
                    </section>
          </div>
          </div>
    
               
            
                
            

        
      
         
         
     












    </>
);
};


export default Top;