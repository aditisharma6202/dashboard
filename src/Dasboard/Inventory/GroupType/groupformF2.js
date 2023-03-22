import React from 'react';
import Header from '../../../HeaderFooter/header';
import FormData from '../../../Utility/FormData';


function GroupFormF2() {
 const 
   data=[{label:<>Group TYPE<span className='text-danger'>*</span></> , type:0, placeholder:''},
    {label:<>STATUS<span className='text-danger'>*</span></> ,type:1, selectdata: [{value:1, name:'Yes'},{value:2,name:'No'}]},
   
]
    return ( <div>
        <Header/>
        <FormData title={'Tax Group Type'}
        subTitle={'INFO'}
        data={data}
        />
    </div> );
}

export default GroupFormF2;