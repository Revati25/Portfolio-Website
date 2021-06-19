import React from 'react';
import image1 from '../src/assets/images/graphic.png';
import image2 from '../src/assets/images/desktop.png';
import image3 from '../src/assets/images/design.png';
import image4 from '../src/assets/images/ui.png';



const Service = ()=>{
 return(
  <>  
  <div className="container">
  <div className="head">
           <h1>Service Offerings</h1>
       </div>
       <section id="header1" className="d-flex  align-items-center">
       <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-4">
  <div className="col">
    <div className="card service">
     <div className="card-body part1">
        <div className="images1">
            <img src={image1} className="serve" />
          
        </div>
       
     </div>
     <h1 className="design">Graphic Design</h1>
    </div>
  </div>
  <div className="col">
    <div className="card service">
    
      <div className="card-body part2">
      <div className="images1">
            <img src={image2} className="serve" />
        </div>
      </div>
      <h1 className="design">Web Design</h1>
    </div>
  </div>
  <div className="col">
    <div className="card service">

      <div className="card-body part3">
      <div className="images1">
            <img src={image3} className="serve" />
        </div>
      </div>
      <h1 className="design">Interaction Design</h1>
    </div>
  </div>
  <div className="col">
    <div className="card service">
      
      <div className="card-body part4">
      <div className="images1">
            <img src={image4} className="serve" />
        </div>
      </div>
      <h1 className="design">UI Design</h1>
    </div>
  </div>
</div>
            
            
             
          

            
        
      
         
          </section>
       </div>

        

</>
 );



};
export default Service;