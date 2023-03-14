import React from 'react';
import Header from '../../../HeaderFooter/header';
import FormData from '../../../Utility/FormData';


function GroupF2() {
 const   data=[{label:'GROUP TYPE*' , type:0, placeholder:''},
    {label:'STATUS*' ,type:1, selectdata: [{value:1, name:'Yes'},{value:2,name:'No'}]},
   
]
    return ( <div>
        <Header/>
        <FormData title={'Tax Group Type'}
        subTitle={'INFO'}
        data={data}
        />
    </div> );
}

export default GroupF2;