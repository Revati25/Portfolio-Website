import React from 'react';
import feedback from '../src/assets/images/people.png';



const Feedback =()=>{
    return(
     <>
     <div className="container">
  <div className="headf">
           <h1>Feedback Recieved</h1>
       </div>
      <section id="team">
         <div className="container my-3 py-5 text-center">
         <div className="row">
             <div className="col-lg-3 col-md-6">
                 <div className="card team">
                     <div className="card-body fill">
                     <div className="person">
            <img src={feedback} className="img-fluid rounded-circle" />
        </div>
                         <h3>revtech</h3>
                         <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua</p>
                     </div>
                 </div>
             </div>
             <div className="col-lg-3 col-md-6">
                 <div className="card team">
                     <div className="card-body fill1">
                     <div className="person">
            <img src={feedback} className="img-fluid rounded-circle" />
        </div>
                         <h3>revtech</h3>
                         <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua</p>
                     </div>
                 </div>
             </div>
             <div className="col-lg-3 col-md-6">
                 <div className="card team">
                     <div className="card-body fill2">
                     <div className="person">
            <img src={feedback} className="img-fluid rounded-circle" />
        </div>
                         <h3>revtech</h3>
                         <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua</p>
                     </div>
                 </div>
             </div>
             <div className="col-lg-3 col-md-6">
                 <div className="card team">
                     <div className="card-body fill3">
                     <div className="person">
            <img src={feedback} className="img-fluid rounded-circle" />
        </div>
                         <h3>revtech</h3>
                         <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua</p>
                     </div>
                 </div>
             </div>
         </div>  
         </div>
      
      
      
      
      
      
      
      
      </section>

</div>




     </>
    );
};
export default Feedback;