import React from 'react';
const SelectDataboolean=()=>{
  return(
    <div className='col-6'>
      <select class="form-select form-select-sm" aria-label=".form-select-sm example">
  <option selected>Yes</option>
  <option value="1">No</option>
 
  
</select>
    </div>
   
  );
}
  

  
  

function FormData({ title, subTitle, data}) {
    return (  
        <div className='mt-5 mx-2 '>
          <div className='row'>
           <div className='col-md-8 col-12'>
              <div className='card '>
                    <div className='border-black'>
                        <div className='desktop-height-60vh '>
                          <h5 className='title text-dark text-uppercase px-2 pt-2'>
                          {title}
                          </h5>
                          <h6 className='sub-title text-primary text-uppercase p-2'>
                            {subTitle}
                          </h6>
                          <div className='col-12  overflow-x-hidden'>
                          <div className='row justify-content-center align-items-center '>
                          {data.map((info)=>{
                             const selectData= [info?.selectdata]
                             
                              console.log(selectData +'selectdata')
                           if(info.type===0){
                            return(
                              
                                <div className='col-md-5 col-12 mt-1 overflow-x-hidden'>
                                  <div className='row px-2'>

                            <label className='col-4 fw-bold text-right'>{info.label}</label>

                          <input className='col-6' placeholder={info.placeholder}/>
                          </div>
                            </div>
                              
                            );
                           }else{
                            return(<>
                           <div className='col-md-4 col-12 mt-1'>
                            <div className='row px-2'>
                           <label className='col-4 fw-bold'>{info.label}</label>
                          
                            {/* {selectData.map((info)=>{
                              console.log(JSON.stringify(info) +'data boolean')
                             return(
                              <>
                               <option value={info.value}>{info.name}</option>
                              </>
                                  
                                 )
                               })} */}
                               <SelectDataboolean/>
                              
                               </div>
                               </div>
                            </>);
                           } 
                          
                          })}

                           
</div>

                          </div>
                          <div className='m-2 row justify-content-center align-items-center'>
                           <div className='col-md-6 col-12'>
                            <div className='row gap-2 justify-content-center align-items-center'>
                            <button className='btn btn-info btn-sm col'>SAVE</button>
                            <button className='btn btn-danger btn-sm col'>CANCEL</button>
                            </div>
                           </div>
                          </div>
             
                         </div>
                       </div>
                     </div>
            </div>
          </div>
        </div>
    );
}

export default FormData;