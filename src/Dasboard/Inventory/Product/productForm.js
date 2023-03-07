import React from 'react';
import FormData from '../../../Utility/FormData';
function ProductForm() {
    return ( <div className='pt-4 productform'>
      <div className='row justify-content-around'>
        <div className='col-sm-4 col-12 mt-3 bg-aliceblue'>
        <h6 className='title'>Price Details</h6>
      <form>
     <FormData label={'MRP'} placeholder={'0.00'} type={'string'} />
     <FormData label={'Pur. Rate'} placeholder={'0.00'} type={'string'} />
     <FormData label={'Cost'} placeholder={'0.00'} type={'string'} />
     <FormData label={'Pur. Disc'} placeholder={'0.00'} type={'string'} />
     <FormData label={'Rate'} placeholder={'0.00'} type={'string'} />
     <FormData label={'Margin'} placeholder={'0.00'} type={'string'} />
      </form>
        
        </div>
        <div className='col-sm-4 col-12 mt-3 bg-aliceblue'>
        <h6 className='title'>Tax Detail</h6>
      <form>
     <FormData label={'HSN/SAC'} placeholder={'0.00'} type={'string'} />
     <FormData label={'IGST %'} placeholder={'0.00'} type={'string'} />
     <FormData label={'CGST'} placeholder={'0.00'} type={'string'} />
     <FormData label={'SGST'} placeholder={'0.00'} type={'string'} />
     
      </form>   
        </div>
        <div className='col-sm-3 col-12 mt-3 bg-aliceblue'>
        <h6 className='title'>Other Detail</h6>
      <form>
     <FormData label={'Unit 1/2'} placeholder={'0.00'} type={'string'} />
     <FormData label={'Conversion'} placeholder={'0.00'} type={'string'} />
     <FormData label={'Group'} placeholder={'0.00'} type={'string'} />
     <FormData label={'Category'} placeholder={'0.00'} type={'string'} />
     <FormData label={'Rack'} placeholder={'0.00'} type={'string'} />
    
      </form>
        
        </div>
        </div>
    </div> );
}

export default ProductForm;