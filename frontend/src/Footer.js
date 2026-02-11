import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250,250,250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          
          <div className="col">
            <img src="media/images/logo.svg" style={{ width: "50%" }} alt="logo" />
            <p>&copy; 2010-2025, Not Zerodha Broking Ltd. All rights reserved.</p>
          </div>
        
          <div className="col  footer-links text-muted">
            <p>Company</p>
            <a href="">About</a><br />
            <a href="">Products</a><br />
            <a href="">Pricing</a><br />
            <a href="">Referral programme</a><br />
            <a href="">Careers</a><br />
            <a href="">Zerodha.tech</a><br />
            <a href="">Press & media</a><br />
            <a href="">Zerodha cares (CSR)</a><br />
          </div>

          <div className="col footer-links text-muted">
            <p>Support</p>
            <a href="#">Support portal</a><br />
            <a href="#">Z-connect blog</a><br />
            <a href="#">List of charges</a><br />
            <a href="#">Downloads & resources</a><br />
            <a href="#">Contact</a><br />
          </div>

          <div className="col footer-links text-muted">
            <p>Account</p>
            <a href="#">Open an account</a><br />
            <a href="#">Fund transfer</a><br />
            <a href="#">60 day challenge</a><br />
          </div>
        </div>
    
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
           Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
          no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
         Broking Ltd. – SEBI Registration no.: IN-DP-431-2019
        Registered Address: Zerodha Broking Ltd., 
       #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, 
       Bengaluru - 560078, Karnataka, India. For any complaints
       pertaining to securities broking please write to complaints@zerodha.com,
        for DP related to dp@zerodha.com. Please ensure you carefully 
         read the Risk Disclosure Document as prescribed by SEBI | ICF </p>

         <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints
              on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication,
             Speedy redressal of the grievances</p>
             <p>Investments in securities market are subject to market risks; read all the
                 related documents carefully before investing</p>
               <p>Attention investors: 1) Stock brokers can accept securities as margins
                 from clients only by way of pledge in the 
                 
                 depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account
     statement issued by NSDL/CDSL every month.</p> 
        </div>

      </div>
      <div className=' bottom-links footer-links text-muted mt-4 mb-4'>
        <a href='' >NSE</a>
        <a href=''>BSE</a>
        <a href='' >Terms & condition</a>
        <a href=''>Policies & Procedure</a>
        <a href='' >Privacy policy</a>
        <a href=''>Disclosure</a>
        <a href=''>Investor charter</a>
      </div>
    </footer>
  );
}

export default Footer;
