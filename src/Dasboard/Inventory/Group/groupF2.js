import React from 'react';
import FormData from '../../../Utility/FormData';
import Header from '../../../HeaderFooter/header';
function GroupF2() {
    const 
   data=[{label:<div>GROUP<span className='text-danger'>*</span></div> , type:0, placeholder:''},
    {label:<>STATUS<span className='text-danger'>*</span></> ,type:1, selectdata: [{value:1, name:'Yes'},{value:2,name:'No'}]},
    {label:<>MASTER GROUP</> , type:0, placeholder:''},
    {label:<>ACTIVE</> ,type:1, selectdata: [{value:1, name:'Yes'},{value:2,name:'No'}]},

]
    return ( <>
    <div>
        <Header/>
        <FormData title={'New Group'}
        subTitle={'GENERAL DETAIL'}
        data={data}
        />
    </div> 
    </> );
}

export default GroupF2;