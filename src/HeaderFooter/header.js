import {React, useState} from 'react';
import { Link } from 'react-router-dom';

const Navbutton=({title,icon,data})=>{
    const[dropdown , setDropdown]=useState(false)
   
    return(
        <div >
       <button onClick={()=>{setDropdown(!dropdown)}} className='btn p-3 px-4 d-flex justify-content-between align-item-center text-center nav-link' >
            <div className='d-flex gap-2'>
           {icon}
            <div>{title}</div>
            </div>
            <div>
                {dropdown?<i class="bi bi-chevron-down"></i>:<i class="bi bi-chevron-up"></i>}
            </div>
        </button>
        {dropdown&&
        data.map((info)=>{return( <Link to={`/${info.navlink}`} className='nav-link d-flex gap-2 p-3 px-4 bg-light-blue' >{info.icon}{info.title}</Link>);})}
          
        
        </div>
        );
}

const Navlink=( {isOpen})=>{
    const salesData=[{icon:<i class="bi bi-people-fill"></i>,title:'Customer',navlink:'/'},
    {icon:<i class="bi bi-file-earmark-break-fill"></i>, title:'Quotions',navlink:'/'},
    {icon:<i class="bi bi-card-text"></i>, title:'Invoices',navlink:'/'},
    {icon:<i class="bi bi-globe-central-south-asia"></i>, title:'E-Invoices',navlink:'/'},
    {icon:<i class="bi bi-receipt-cutoff"></i>, title:'E-Way bills',navlink:'/'},
    {icon:<i class="bi bi-stickies-fill"></i>, title:'Sales Orders',navlink:'/'},
    {icon:<i class="bi bi-card-heading"></i>, title:'Delivery Challans',navlink:'/'},
    {icon:<i class="bi bi-credit-card-fill"></i>, title:'Credit notes',navlink:'/'},
    {icon:<i class="bi bi-currency-rupee"></i>, title:'Receivables',navlink:'/'},
    {icon:<i class="bi bi-clock-fill"></i>, title:'Payment received',navlink:'/'}

]
const InventoryData=[{icon:<i class="bi bi-basket3-fill"></i>,title:'Product',navlink:'product'},
{icon:<i class="bi bi-file-earmark-break-fill"></i>, title:'Item Groups',navlink:'product'},
{icon:<i class="bi bi-grid-fill"></i>, title:'Stocks/Inventory',navlink:'product'},
{icon:<i class="bi bi-calculator-fill"></i>, title:'Stocks Adjustments',navlink:'product'},
]

const PurchaseData=[{icon:<i class="bi bi-basket3-fill"></i>,title:'Item List',navlink:'/'},
{icon:<i class="bi bi-file-earmark-break-fill"></i>, title:'Item Groups',navlink:'/'},
{icon:<i class="bi bi-grid-fill"></i>, title:'Stocks/Inventory',navlink:'/'},
{icon:<i class="bi bi-calculator-fill"></i>, title:'Stocks Adjustments',navlink:'/'},
]
    
    
    return(
    <div className={`navlink ${isOpen?'':'inview '}`}>
        <Navbutton title={'Sales'} icon={ <i class="bi bi-graph-up-arrow"></i>} data={salesData}/>
        <Navbutton title={'Inventory'} icon={ <i class="bi bi-box-seam-fill"></i> }data={InventoryData}/>
        <Navbutton title={'Purchases'} icon={ <i class="bi bi-cart-check-fill"></i>} data={PurchaseData}/>
        <Navbutton title={'Master data'} icon={ <i class="bi bi-clipboard-data-fill"></i>}data={PurchaseData}/>
        <Navbutton title={'Other'} icon={ <i class="bi bi-motherboard-fill"></i>}data={PurchaseData}/>
        <Navbutton title={'Accounting'} icon={ <i class="bi bi-book-half"></i>}data={PurchaseData}/>
       <Link to={'/'} className='nav-link d-flex gap-2 p-3' ><i class="bi bi-grid-3x2-gap-fill px-2"></i>Report</Link>
       <Link to={'/'} className='nav-link d-flex gap-2 p-3' ><i class="bi bi-grid-1x2-fill px-2"></i>Dashboard</Link>
    </div>);
}
const LogoutMenu=({setSidemenu, menu})=>{
   
    return(
    <div className='logout-menu' onMouseLeave={()=>{setSidemenu(false)}}>
        {menu.map( (info)=>{
            return(<Link to={'/'} className=' d-flex gap-2 p-3 link'>{info.icon}{info.title}</Link>);
        })
       }
         
    </div>);
}
function Header() {
const[isOpen,setisOpen]=useState(true)
const[isSidemenu , setSidemenu]= useState(false);
const menu=[{icon:<i class="bi bi-house-check-fill"></i>, title:'Comapny Name'},
{icon:<i class="bi bi-people-fill"></i>, title:'Manage User'},
{icon:<i class="bi bi-gear-fill"></i>, title:'App Settings'},
{icon:<i class="bi bi-power text-danger"></i>, title:<span className='text-danger'>Logout</span>}]
    return (
     <div className='header pt-1'>
       
        <div className='display-flex justify-content-between text-center pt-1 px-2'>
            <div classname='d-flex text-center text-light' style={{fontSize:'1.2rem', display:'flex' , gap:'1rem'}}>
                
                <button className='btn only-mobile p-0 fw-bolder' onClick={()=>{setisOpen(!isOpen)}} > 
                {isOpen?<i class="bi bi-x-lg text-light"></i>:<i class="bi bi-list text-light"></i>} </button>
                <div className='logo text-light' >LOGO</div>
                
            </div>
            <div className='d-flex justify-content-between align-item-center gap-4'>
                <button className='btn p-0 text-light'><i class="bi bi-search"></i></button>
                <button className='btn p-0 text-light'><i class="bi bi-tag-fill"></i></button>
                <button className='btn p-0 text-light'><i class="bi bi-bell-fill"></i></button>
                {menu.map((info)=>{return(<>
                    <button className='btn p-0 text-light only-desktop'>{info.icon}</button>
                </>)})}
                
               
                <button className='btn p-0 text-light only-mobile' onMouseEnter={()=>{setSidemenu(true)}}
                ><i class="bi bi-three-dots-vertical"></i></button>
            </div>

        </div>
       <Navlink isOpen={isOpen}/>
       {isSidemenu && <LogoutMenu setSidemenu={setSidemenu} menu={menu}/>}
       
    </div> );
}

export default Header;