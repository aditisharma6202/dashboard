import React from 'react';
import Header from '../../../HeaderFooter/header';
import axios from 'axios';
import CommanTable from '../../../Utility/table';
import { useEffect, useState } from 'react';
import Footer from '../../../HeaderFooter/footer';
function GroupType() {
    const [data, setData] = useState([]);
    //const [search, setSearch] = useState("");
    // const [filterdata, setFilterdata] = useState([]);
    //const [open, setOpen] = useState(false);
    //const [id, setId] = useState();
    const [page, setPage] = useState("1");
    const [row, setRow] = useState("10");
    const [total, setTotal] = useState(0);
    const url ="https://dummyjson.com/products"
    const getData = async () => {
      try {
        // const token = localStorage.getItem("token");
        // const headers = { Authorization: token };
        const response = await axios.get(
          url
        //   { headers: headers }
        );
     
        setTotal(response?.data.total);
      
        //  setFilterdata(response.data.data);
        setData(response.data.products);
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      getData();
    }, [ page, row]);


  
    
    return ( <>
    <Header/>
    <div className='col-12'>
      <div className='row mt-5 mx-2'>
        
        <div className='col-md-8 col-12'>
        <div className='card'>
                    <div className='border-black'>
                        <div className='desktop-height-60vh'>
        <CommanTable
          data={data}
          title="Product Master"
          pageId="ProductTable"
          setPage={(val) => setPage(val)}
          row={row}
          setTotal={setTotal}
          page={page}
          total={total}
          setRow={(val) => setRow(val)}
          actions={{}}
          f2link={'grouptypeform'}

        />
        </div>
        </div>
        </div>
        </div>
        
      </div>
    </div>
    <Footer/>
    </> );
}

export default GroupType;