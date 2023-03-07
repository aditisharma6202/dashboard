import React from 'react';
import Header from '../../../HeaderFooter/header';
import { useState } from 'react';
import Breadcrumb from '../../../Utility/breadcrumb';
import { Link } from 'react-router-dom';
import ProductTable from './productTable';
import ProductForm from './productForm';
const formlinks=[{title:'HSN',formlink:'/'},
{title:'HSN',formlink:'/'},
{title:'HSN',formlink:'/'},
{title:'Group',formlink:'/'},
{title:'Tax Group',formlink:'/'},
{title:'Ledger',formlink:'/'},
{title:'Vendor',formlink:'/'},
]
function Product() {
   
    return ( <>
    <Header />
    <div className='dash-active  pt-2'>
        <Breadcrumb catagory={'Inventory'} subcatagory={'Product'}/>
        <div className='col-12 '>
            <div className='only-desktop'>
            <div className='row'>
            {formlinks.map((info)=>{
                return(
                    <div className='col formlink'>
                    <Link to={info.formlink} className='link'>{info.title}</Link>
                    <button className='btn text-danger'><i class="bi bi-x-circle"></i></button>
                </div>
                );
               
            })}
           </div> 
           </div>
          <div className='row mt-1'>
            <div className='col-md-8 col-12'>
                <div className='card'>
                    <div className='border-black'>
                        <div className='desktop-height-60vh'>
                       <ProductTable/>
                       </div>
                       
                       <ProductForm/>
                    </div>
                </div>
            </div>
            <div className='col-md-4 col-12'>
                <div className='card bg-aliceblue vh-100'>
                    <div className='card-body'>
                        <h5 className='title'>
                            Search Product
                        </h5>
                        <div className='col d-flex mt-3'>
                            <input/><button className='btn btn-success'>Search</button>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
    </div>
    </> );
}

export default Product;