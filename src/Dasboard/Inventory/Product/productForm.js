import React from "react";
import FormData from "../../../Utility/FormData";
const Detail=(props)=>{
  return(<>
 <div className="d-flex space-between row mt-1">
              <div className="text-muted col-6">{props.detailOne} </div>
              <div className="col-6">{props.detailTwo}</div>
            </div>
  </>);
}
function ProductForm() {
  return (
    <div className="pt-2  ">
      <div className="d-flex row justify-content-around p-0 m-1">
        <div className="col-sm-4 col-12 p-2 bg-aliceblue">
          <h6 className="title">Price Details</h6>
          <div className="row">
           <Detail detailOne={'MRP'} detailTwo={'0.00'}/>
           <Detail detailOne={'Cost'} detailTwo={'0.00'}/>
           <Detail detailOne={'Pur. Rate'} detailTwo={'0.00'}/>
           <Detail detailOne={'Rate'} detailTwo={'0.00'}/>
           <Detail detailOne={'Margin'} detailTwo={'0.00'}/>
          </div>
        </div>
        <div className="col-sm-4 col-12  bg-aliceblue p-2">
          <h6 className="title">Tax Detail</h6>
          <div className="row ">
          <Detail detailOne={'HSN/SAC'} detailTwo={'0.00'}/>
          <Detail detailOne={'IGST %'} detailTwo={'0.00'}/>
          <Detail detailOne={'CGST'} detailTwo={'0.00'}/>
          <Detail detailOne={'SGST'} detailTwo={'0.00'}/>
          </div>
        </div>
        <div className="col-sm-4 col-12  p-2 bg-aliceblue">
          <h6 className="title">Other Detail</h6>
          <div className="row">
            <Detail detailOne={'Unit 1/2'} detailTwo={'0.00'}/>
            <Detail detailOne={'Conversation'} detailTwo={'0.00'}/>
            <Detail detailOne={'Group'} detailTwo={'0.00'}/>
            <Detail detailOne={'Category'} detailTwo={'0.00'}/>
            <Detail detailOne={'Rack'} detailTwo={'0.00'}/>
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
        <div className="row">
          <button className="col-1 p-0 btn btn-light">
            ADD
          </button>
          <button className="col-1 p-0 btn btn-secondary">
          <i class="bi bi-heart-fill px-1"></i><span>F2</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductForm;
