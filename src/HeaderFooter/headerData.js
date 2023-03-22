 //dropdown nested data 

//dropdown nested under master
//dropdown for account
const nestedAccountData=[{title:'Group Type', link:'grouptype'},{title:'Group', link:'group'},{title:'Tax Group', link:'taxgroup'},{title:'Leadger', link:'leadger'},{title:'HSN', link:'/'},
{title:'Bank', link:'/'}
]

const nestedInventoryData=[
    {title:'Product', link:'product'},
    {title:'Category', link:'/'},
    {title:'Brand', link:''},
    {title:'Group', link:'/'},
    
    {title:'Pack', link:'/'},
    {title:'Unit', link:'/'},
    {title:'Rack', link:'/'},
]
const nestedHRData=[
    {title:'Department', link:'/'},
    {title:'Designation', link:'/'},
    {title:'Employee', link:'/'},
]
//nested dropdowns of master ends here


//nested dropdowns of transaction starts here
const nestedGRNData=[
    {title:'New', link:'/'},
    {title:'Edit', link:'/'},
]
const nestedPurchaseInvoiceData=[
    {title:'New', link:'/'},
    {title:'Edit', link:'/'},
]
const nestedSaleInvoiceData=[
    {title:'New', link:'/'},
    {title:'Edit', link:'/'},
]
const nestedSaleReturn=[
    {title:'New', link:'/'},
    {title:'Edit', link:'/'},
]
//nested dropdown of transaction ends here

//nested dropdown of Accound starts here
const nestedPayment=[
    {title:'Payment', link:'/'},
]

//nested dropdown of Report starts here
const nestedDesignData=[
    {title:'New', link:'/'},
    {title:'Edit', link:'/'},
]
const nestedSaleInvoicenData=[
    {title:'New', link:'/'},
    {title:'Edit', link:'/'},
]
 
//dropdown data
const dashboardData=[{name:'Inventory',icon:<i class="bi bi-basket3-fill"></i>,link:'/'},
{name:'Demo Power BI', icon:<i class="bi bi-file-earmark-break-fill"></i>,link:'/' }
]

const inventoryData=[
    {name:'Account' ,data:{nestedAccountData}},
    {name:'Inventory',data:{nestedInventoryData}},
    {name:'H.R.', data:{nestedHRData}}
]
const transactionData=[
    {name:'GRN',data:{nestedGRNData}},
    {name:'Purchase Invoice',data:{nestedPurchaseInvoiceData}},
    {name:'Sale Invoice',data:{nestedSaleInvoiceData}},
    {name:'Sale Return',data:{nestedSaleReturn}},

]
const accountData=[
    {name:'Payment',data:{nestedPayment}}
]
const counterData=[
    {name:'Module 1' ,icon:<i class="bi bi-card-text"></i>, link:'/'},
    {name:'Module 2' ,icon:<i class="bi bi-card-text"></i>, link:'/'},
    {name:'Module 3' ,icon:<i class="bi bi-card-text"></i>,link:'/'}

]
const configData=[
    {name:'Database' ,icon:<i class="bi bi-globe-central-south-asia"></i>, link:'/'},
    {name:'Import' ,icon: <i class="bi bi-card-heading"></i>, link:'/'},
    {name:'Error Log' ,icon:<i class="bi bi-globe-central-south-asia"></i>, link:'/'},
]
const webData=[
    {name:'Web',icon:<i class="bi bi-globe-central-south-asia"></i>, link:'/'},
    {name:'Import',icon: <i class="bi bi-card-heading"></i>, link:'/'},
    {name:'Error Log',icon:<i class="bi bi-globe-central-south-asia"></i>, link:'/'},

]
const reportData=[
    {name:'Design',data:{nestedDesignData}},
    {name:'Sale Invoice',data:{nestedSaleInvoicenData}},
]

///navigation
 
 export const data=[
    {title:'Dashboard' ,icon: <i class="bi bi-graph-up-arrow"></i>, data:{dashboardData}},
    { title:'Master', icon: <i class="bi bi-box-seam-fill"></i> ,data :{inventoryData}, type:'NestedDropdown'},
    { title:'Transaction', icon: <i class="bi bi-cart-check-fill"></i> ,data:{transactionData}, type:'NestedDropdown' },
   {title:'Account', icon: <i class="bi bi-clipboard-data-fill"></i>,data:{accountData} ,type:'NestedDropdown' }, 
   {title:'Counter', icon: <i class="bi bi-motherboard-fill"></i>,data:{counterData} },
   {title:'Report', icon: <i class="bi bi-book-half"></i>,data:{reportData},type:'NestedDropdown'} ,
   {title:'Config', icon: <i class="bi bi-grid-3x2-gap-fill"></i>,data:{configData}} ,
   {title:'WEB/APP', icon: <i class="bi bi-grid-3x2-gap-fill"></i>,data:{webData} } 
   
]


//-----DATA ENDS HERE---

