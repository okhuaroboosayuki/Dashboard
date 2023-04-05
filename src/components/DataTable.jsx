import "../assets/scss/datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import Box from '@mui/material/Box'
import { userColumns, userRows } from "../data"

function DataTable() {
    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: () => {
                return(
                    <div className="cell_action">
                        <div className="view_btn">View</div>
                        <div className="delete_btn">Delete</div>
                    </div>
                )
            }
        }
    ]
  return (
    <Box className="data_table" >
      <DataGrid
        rows={userRows}
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
