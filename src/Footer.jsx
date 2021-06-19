import React from 'react';
import { NavLink } from 'react-router-dom';
import EmailSharpIcon from '@material-ui/icons/EmailSharp';
import PhoneInTalkSharpIcon from '@material-ui/icons/PhoneInTalkSharp';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';


const Footer = () =>{
    return(
        <>
           
           <footer className="pt-5 pb-4">

	<div className="container text-center text-md-left">

		<div className="row text-center text-md-left">

			<div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
				<h5 className="text-uppercase mb-4 font-weight-bold">Spy Engineering</h5>
				<p>Rev-Tech Solution is the WebDevelopment and Designing company.Company vision is to provide quality services to 
    	their customers.</p>
				
			</div>

			<div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
				<h5 className="text-uppercase mb-4 font-weight-bold">Quick links</h5>
			<p>
				<NavLink to="/" className="link"> Home</NavLink>
			</p>
			<p>
				<NavLink to="/about" className="link"> About</NavLink>
			</p>
			<p>
				<NavLink to="/service" className="link">Services</NavLink>
			</p>
			<p>
				<NavLink to="/contact" className="link">Contact</NavLink>
			</p>
			</div>

			<div className="col-md-5 col-lg-5 col-xl-4 mx-auto mt-3">
				<h5 className="text-uppercase mb-4 font-weight-bold" >Contact</h5>
				<p>
					<EmailSharpIcon />revtechsolution21@gmail.com
				</p>
				<p>
					<PhoneInTalkSharpIcon />+91 9112722457
				</p>
			
			</div>
			
		</div>

		<hr className="mb-4" />

		<div className="row align-items-center">

			<div className="col-md-7 col-lg-8">
				<p>	Copyright ©2021 All rights reserved by:
					<NavLink to="#" className="names">
						<i class="text-uppercase">Spy Engineering</i>
					</NavLink></p>
				
			</div>

			<div className="col-md-5 col-lg-4">
				<div className="text-center text-md-right">

					<ul className="list-unstyled list-inline">
						<li className="list-inline-item">
							<NavLink to="https://www.facebook.com/revtech25" className="btn-floating btn-sm text-dark" ><FacebookIcon /> </NavLink>
						</li>
						<li class="list-inline-item">
							<NavLink to="https://www.instagram.com/revtechsolution/" className="btn-floating btn-sm text-dark"> <InstagramIcon /> </NavLink>
						</li>
						<li class="list-inline-item">
							<NavLink to="https://www.linkedin.com/in/rev-tech-solution-ab00a720b/" className="btn-floating btn-sm text-dark"> <LinkedInIcon /> </NavLink>
						</li>
						<li class="list-inline-item">
							<NavLink to="https://www.linkedin.com/in/rev-tech-solution-ab00a720b/" className="btn-floating btn-sm text-dark"> <WhatsAppIcon /> </NavLink>
						</li>
						
					</ul>
					
				</div>
				
			</div>
			
		</div>

	</div>
	
</footer>     

        </>
    );

    
};
export default Footer;