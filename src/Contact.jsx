
     import React, { useState } from 'react';
     import skype from '../src/assets/images/skype.png';
     import whatsapp from '../src/assets/images/whatsapp.png';
     import messanger from '../src/assets/images/messanger.png';
     import send from '../src/assets/images/contact_icon.png';
import { NavLink } from 'react-router-dom';

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone:"",
    email: "",
    msg:"",
  });
   const InputEvent = (event) =>{
     const {name , value} = event.target;
     setData((preVal) =>{
        return{
            ...preVal,
            [name]: value,
        };
     });
    
    };
  
  const formSubmit= (e) => {
    
    alert(` Dear ${data.fullname}, your message has been sent successfully.Thank you for contacting us.`);
  };
    return (
        <>
         <div className="bgs">
          <div className="my-5">
            <h1 className="text-center"> Contact Us </h1>
            </div>
            <div className="container contact_div">
              <div className="row">
                <div className="col-md-6 col-10 mx-auto">
               
              
                  <form onSubmit={formSubmit}>
                  <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input type="text" className="form-control"  id="exampleFormControlInput1" name="fullname" value={data.fullname}   onChange={InputEvent}
                   placeholder="Enter Your Name..." required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input type="number" className="form-control" id="exampleFormControlInput1" name="phone" value={data.phone}   onChange={InputEvent} 
                  placeholder="Enter Your Number..." required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email}   onChange={InputEvent} 
                  placeholder="name@example.com" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg}   onChange={InputEvent} 
                  required>Message</textarea>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary" type="submit">Contact Me</button>
                </div>
              </form>
                
                </div>
              </div>
            </div>
            </div>
        </>
    );
};



export default Contact;






