import React from 'react';
import Footer from '../../../HeaderFooter/footer';
import Header from '../../../HeaderFooter/header';
import LeaderForm from './leadgerform';
import LeadgerTable from './leadgerTable';
function Leadger() {
    return (<>
    <Header/>
    <div className='dash-active  pt-2'>
      
        <div className='col-12 '>
            
          <div className='row mt-5 '>
            <div className='col-md-8 col-12'>
                <div className='card'>
                    <div className='border-black'>
                        <div className='desktop-height-60vh'>
                       <LeadgerTable/>
                       </div>
                       
                       <LeaderForm/>
                    </div>
                </div>
            </div>
            <div className='col-md-4 col-12'>
                {/* <div className='card bg-aliceblue'>
                    <div className='card-body'>
                        <h5 className='title'>
                            Search Product
                        </h5>
                        <div className='col d-flex mt-3'>
                            <input/><button className='btn btn-success btn-left-border-none'>Search</button>
                        </div>
                    </div>
                </div> */}
            </div>
          
          </div>
         

        </div>
    </div>
    <Footer/>

    </>  );
}

export default Leadger;