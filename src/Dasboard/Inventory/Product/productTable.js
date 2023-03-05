import React from 'react';
import axios from 'axios';
import CommanTable from '../../../Utility/table';
import { CSVLink } from "react-csv";
import { useEffect, useState } from 'react';
function ProductTable(props) {
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
    }, [props.reload, page, row]);


  
    
    return (
      <>
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
        />
       
      </>
    );
}

export default ProductTable;


