import React from 'react';
import work1 from '../src/assets/images/work_1.png';
import work2 from '../src/assets/images/work_2.png';
import work3 from '../src/assets/images/work_3.png';
import work4 from '../src/assets/images/work_4.png';
import email from '../src/assets/images/email.png';
import hand from '../src/assets/images/hand.png';

const Works =() =>{
return(
<>

<div className="recentw">



<div className="container">
    <h1 className="recenth">Recent Works</h1>
</div>
<section id="header4" className="d-flex  align-items-center">
<div className="container">
<div className="row row-cols-1 row-cols-md-2 g-0">
  <div className="col-md-6 columns d-flex">
    <div className="card bodies1">
      <img src={work1} className="topimage col-md " alt="..." />
      <div className="card-body recent">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. 
        
        This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col columns d-flex">
    <div className="card bodies">
      <img src={work2} className="topimage" alt="..." />
      <div className="card-body recent">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. 
        This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col columns d-flex">
    <div className="card bodies1">
      <img src={work3} className="topimage" alt="..." />
      <div className="card-body recent">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div className="col columns d-flex">
    <div className="card bodies">
      <img src={work4} className="topimage" alt="..." />
      <div className="card-body recent">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. 
        This content is a little bit longer.</p>
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
export default Works;