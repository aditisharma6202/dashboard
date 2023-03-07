import React from "react";
import FormData from "../../../Utility/FormData";
function ProductForm() {
  return (
    <div className="pt-2  ">
      <div className="d-flex row justify-content-around p-0 m-1">
        <div className="col-sm-4 col-12 p-2 bg-aliceblue">
          <h6 className="title">Price Details</h6>
          <div className="row">
            <div className="d-flex space-between row mt-1">
              <div className="text-muted col-6">MRP</div>
              <div className="col-6">0.00</div>
            </div>
            <div className="d-flex space-between row mt-1">
              <div className="text-muted col-6">Cost</div>
              <div className="col-6">0.00</div>
            </div>{" "}
            <div className="d-flex space-between row mt-1">
              <div className="text-muted col-6">Pur. Rate</div>
              <div className="col-6">0.00</div>
            </div>{" "}
            <div className="d-flex space-between row mt-1">
              <div className="text-muted col-6">Rate</div>
              <div className="col-6">0.00</div>
            </div>{" "}
            <div className="d-flex space-between row mt-1">
              <div className="text-muted col-6">Margin</div>
              <div className="col-6">0.00</div>
            </div>
          </div>
        </div>
        <div className="col-sm-4 col-12  bg-aliceblue p-2">
          <h6 className="title">Tax Detail</h6>
          <div className="row ">
            <div className="d-flex space-between row mt-1">
              <div className="text-muted col-6">HSN/SAC</div>
              <div className="col-6">0.00</div>
            </div>{" "}
            <div className="d-flex space-between row mt-1">
              <div className="text-muted col-6">IGST %</div>
              <div className="col-6">0.00</div>
            </div>{" "}
            <div className="d-flex space-between row mt-1">
              <div className="text-muted col-6">CGST</div>
              <div className="col-6">0.00</div>
            </div>{" "}
            <div className="d-flex space-between row mt-1">
              <div className="text-muted col-6">SGST</div>
              <div className="col-6">0.00</div>
            </div>
          </div>
        </div>
        <div className="col-sm-4 col-12  p-2 bg-aliceblue">
          <h6 className="title">Other Detail</h6>
          <div className="row">
            <div className="d-flex space-between row mt-1">
              <div className="text-muted col-8">Unit 1/2</div>
              <div className="col-4">0.00</div>
            </div>
            <div className="d-flex space-between row mt-1">
              <div className="text-muted col-8">Conversation</div>
              <div className="col-4">0.00</div>
            </div>
            <div className="d-flex space-between row mt-1">
              <div className="text-muted col-8">Group</div>
              <div className="col-4">0.00</div>
            </div>
            <div className="d-flex space-between row mt-1">
              <div className="text-muted col-8">Category</div>
              <div className="col-4">0.00</div>
            </div>
            <div className="d-flex space-between row mt-1">
            <div className="text-muted col-8">Rack</div>
            <div className="col-4">0.00</div>
          </div>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default ProductForm;
