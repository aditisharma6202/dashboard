import React from 'react';
function Breadcrumb({catagory, subcatagory}) {
    return (
        <div class="mb-4">
        <nav>
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <div>
                        <i class="bi bi-globe2 small me-2"></i> {catagory}
                    </div>
                </li>
                <li class="breadcrumb-item active" aria-current="page">{subcatagory}</li>
            </ol>
        </nav>
    </div> 
   );
}

export default Breadcrumb;