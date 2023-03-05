import React from 'react';
import Header from '../../../HeaderFooter/header';
import { useState } from 'react';
import Breadcrumb from '../../../Utility/breadcrumb';
import { Link } from 'react-router-dom';
import ProductTable from './productTable';
const formlinks=[{title:'HSN',formlink:'/'},
{title:'HSN',formlink:'/'},
{title:'HSN',formlink:'/'},
{title:'Group',formlink:'/'},
{title:'Tax Group',formlink:'/'},
{title:'Ledger',formlink:'/'},
{title:'Vendor',formlink:'/'},
]
function Product() {
    const[isOpen, setisOpen]=useState(true)
    return ( <>
    <Header isOpen={isOpen} setisOpen={setisOpen}/>
    <div className={isOpen?'dash-active my-5 pt-2':'dash-inactive mt-5 pt-2'}>
        <Breadcrumb catagory={'Inventory'} subcatagory={'Product'}/>
        <div className='col-12 only-desktop'>
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
          <div className='row mt-5'>
            <div className='col-md-8 col-12'>
                <div className='card'>
                    <div className='card-body'>
                       <ProductTable/>
                    </div>
                </div>
            </div>
            <div className='col-md-4 col-12'></div>
          </div>
        </div>
    </div>
    </> );
}

export default Product;