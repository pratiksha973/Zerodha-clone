import React from 'react';
function Hero() {
    return ( 
        <section className="container-fluid"  id='supportHero'>
            <div className='p-5 'id='supportWrapper'>
          <h4>Support Portal</h4>
          <a href='' style={{marginLeft:"2px"}}>Track Tickets</a>
            </div>
            <div className='row p-3 mt-1 m-3'>
                <div className='col-6 p-3 '>
            <h1 className='fs-3'>Search for an answer or help topics to create a ticket</h1>
            <input placeholder='Eg. how do I activate F&O'/><br></br>
            <a href=''>Track account opening</a>
             <a href=''>Track segment activation</a><br/>
              <a href=''>Intraday marging</a>
               <a href=''>Kite user manual</a><br/>
                </div>
                <div className='col-1'></div>
                <div className='col-5 p-3 '>
                    <h1 className='fs-3'>Featured</h1>
                    <ul>
                        <li> <a href=''>Current Takeovers and Delisting - January 2024</a></li>
                        <li> <a href=''>Latest Intraday leverages - MIS & CO</a></li>
                    </ul>
                   
                    

                </div>

            </div>
        </section>
     );
}

export default Hero;