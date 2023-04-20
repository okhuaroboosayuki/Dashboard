import "../assets/scss/datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { userColumns, userRows } from "../data";
import { Link } from "react-router-dom";
import { useState } from "react";

function DataTable(props) {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cell_action">
            <Link to="/users/user" >
              <div className="view_btn">View</div>
            </Link>
            <div className="delete_btn" onClick={() => handleDelete(params.row.id)}>Delete</div>
          </div>
        );
      },
    },
  ];
  return (
    <Box className="data_table">
      <div className="data_table_title">
        {props.title}
        <Link to="/users/new" className="link" >
          Add New
        </Link>
      </div>
      <DataGrid
      className="data_grid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 6,
            },
          },
        }}
        pageSizeOptions={[6]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}

export default DataTable;
