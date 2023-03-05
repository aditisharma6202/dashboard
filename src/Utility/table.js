import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { CSVLink } from "react-csv";
import axios from "axios";

function CommanTable({
  data,
  actions,
  title,
  total,
  setRow,
  setPage,
  pageId,
  setTotal,
  setPopup
}) {
  //variable declaration
  let columns;
  const [search, setSearch] = useState("");
  const [filterdata, setFilterdata] = useState(data);

  //setting up table column if data exist
  if (data[0]) {
    console.log("data exist");
    columns = Object.keys(data[0]).map((key) => {
      if (key === "status") {
        return {
          name: key,
          selector: (row) => {
            let status;
            if (row["status"] === 0) {
              status = <span class="badge text-bg-warning">pending</span>;
            } else if (row["status"] === 1) {
              status = <span class="badge text-bg-success">Success</span>;
            } else if (row["status"] === 3) {
              status = <span class="badge text-bg-danger">Failed</span>;
            }
            return <>{status}</>;
          },
          wrap: true,
        };
      }
      return {
        name: key,
        selector: (row) => row[key],
        wrap: true,
        conditionalCellStyles: [
          {
            when: (row) => row["status"] === "1",
            classNames: "text-primary ",
          },
        ],
      };
    });

    columns.push({
      name: "Actions",
      cell: (row) => (
        <>
          <span className="fs-3 fw-bold" data-bs-toggle="dropdown">
            ⋮
          </span>
          <ul class="dropdown-menu" aria-labelledby="defaultDropdown">
            {Object.keys(actions).map((key) => {
              return (
                <>
                  <li>
                    <a
                      class="dropdown-item"
                    //   href={`https://api.sharkpe.in/admin/${key}/${row.id}`}
                      onClick={key}
                    >
                      {key}
                    </a>
                  </li>
                </>
              );
            })}
          </ul>
        </>
      ),
    });
  } else {
    console.log("empty string");
  }

  //setting up search function
//   const searchData = async () => {
//     if (search && pageId) {
//       try {
//         // const token = localStorage.getItem("token");
//         // const headers = { Authorization: token };
//         const response = await axios.get(
//           `https://api.sharkpe.in/merchant/search/${search}/${pageId}`,
//         //   { headers: headers }
//         );
//         console.log(response);
//         setTotal(response?.data.rows);
//         //console.log(`https://api.sharkpe.in/merchant/search/${search}/${pageId}`)
//         setFilterdata(response.data.data);
//       } catch (error) {
//         console.log(error);
//       }
//     } else {
//       setFilterdata(data);
//     }
//   };
//   useEffect(() => {
//     setFilterdata(data);
//     searchData();
//   }, [search, pageId, data]);
  return (
    <>
      <DataTable
        actions={
          <CSVLink
            data={data}
            onClick={() => {
              console.log("You click the link"); // 👍🏻 Your click handling logic
            }}
            className="btn btn-info"
          >
            export{" "}
          </CSVLink>
        }
        data={data}
        columns={columns}
        title={title}
        fixedHeader={true}
        highlightOnHover={true}
        onChangePage={(pageid) => setPage(pageid)}
        onRowClicked={(row)=> setPopup(row)}
        onChangeRowsPerPage={(pp) => setRow(pp)}
        pagination
        responsive={true}
        progressPending={data.length === 0 && "pending"}
        striped
        paginationServer
        selectableRows
        subHeader
        paginationTotalRows={total}
        paginationRowsPerPageOptions={[10, 20, 30, 50, 100, 200, 500]}
        subHeaderComponent={
          <input
            type="text"
            placeholder="search"
            className="form-control w-25"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        }
      />
    </>
  );
}

export default CommanTable;
