import React from "react";

const Detail=(props)=>{
  return(<>
 <div className="d-flex row mt-1">
              <div className="text-dark col-6">{props.detailOne} </div>
              <div className="col-6 d-flex gap-1 ">
                {props.head=='rupee'?<span>&#8377;</span> :''}
                <input disabled placeholder={props.detailTwo} className='w-50' /></div>
            </div>
  </>);
}
function ProductForm() {
  return (
    <div className=" ">
      <div className="d-flex row justify-content-around p-0 m-1">
        <div className="col-sm-4 col-12 p-2 bg-aliceblue">
          <h6 className="title">Price Details</h6>
          <div className="row">
           <Detail detailOne={'MRP'} detailTwo={'0.00'} head={'rupee'}/>
           <Detail detailOne={'Cost'} detailTwo={'0.00'} head={'rupee'}/>
           <Detail detailOne={'Pur. Rate'} detailTwo={'0.00'} head={'rupee'}/>
           <Detail detailOne={'Rate'} detailTwo={'0.00'} head={'rupee'}/>
           <Detail detailOne={'Margin'} detailTwo={'0.00'} head={'rupee'}/>
          </div>
        </div>
        <div className="col-sm-4 col-12  bg-aliceblue p-2">
          <h6 className="title">Tax Detail</h6>
          <div className="row ">
          <Detail detailOne={'HSN/SAC'} detailTwo={'0.00'} head={'rupee'}/>
          <Detail detailOne={'IGST %'} detailTwo={'0.00'} head={'rupee'}/>
          <Detail detailOne={'CGST'} detailTwo={'0.00'} head={'rupee'}/>
          <Detail detailOne={'SGST'} detailTwo={'0.00'} head={'rupee'}/>
          </div>
        </div>
        <div className="col-sm-4 col-12  p-2 bg-aliceblue">
          <h6 className="title">Other Detail</h6>
          <div className="row">
            <Detail detailOne={'Unit 1/2'} detailTwo={'0.00'} head={'noRupee'}/>
            <Detail detailOne={'Conversation'} detailTwo={'0.00'} head={'noRupee'}/>
            <Detail detailOne={'Group'} detailTwo={'0.00'} head={'noRupee'}/>
            <Detail detailOne={'Category'} detailTwo={'0.00'} head={'noRupee'}/>
            <Detail detailOne={'Rack'} detailTwo={'0.00'} head={'noRupee'}/>
          </div>
         
        </div>
      </div>
      <div className="col-12 px-3 py-1 form-bottom">
        <div className="row gap-4">
          <div className="col-2 text-light bg-primary">C.R. DATE-</div>
          <div className="col-2 text-light bg-primary">M.D. DATE-</div>
          <div className="col-2 text-light bg-primary">L.A.-</div>

        </div>
       

      </div>
      <div className="col-12 px-3 py-1 form-bottom">
        <div className="col ">
          <button className="p-0 .btn-left-border-none btn btn-light">
            ADD
          </button>
          <button className="p-0 .btn-right-border-none btn btn-secondary">
          <i class="bi bi-heart-fill px-1"></i><span>F2</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductForm;
