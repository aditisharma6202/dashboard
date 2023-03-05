import React from 'react';
function FormData({label,placeholder,type}) {
    return (  
        <div class="form-group mt-1">
        <label className='text-muted'
        for="exampleInputPassword">{label}</label>
        <input type={type} class="form-control"  placeholder={placeholder}/>
      </div>
    );
}

export default FormData;