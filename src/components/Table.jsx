import "../assets/scss/table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function List() {
  const rows = [
    {
      id: 1143155,
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      user: "John Smith",
      unit: 12,
      ward: 1,
      date: new Date().toLocaleDateString(),
      status: "Approved",
    },
    {
      id: 2235235,
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      user: "Michael Doe",
      unit: 10,
      ward: 3,
      date: new Date().toLocaleDateString(),
      status: "Pending",
    },
    {
      id: 2342353,
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      user: "John Smith",
      unit: 2,
      ward: 2,
      date: new Date().toLocaleDateString(),
      status: "Pending",
    },
    {
      id: 2357741,
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      user: "Jane Smith",
      unit: 1,
      ward: 1,
      date: new Date().toLocaleDateString(),
      status: "Approved",
    },
    {
      id: 2342355,
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      user: "Harold Carol",
      unit: 7,
      ward: 9,
      date: new Date().toLocaleDateString(),
      status: "Pending",
    },
  ];

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="table_cell">ID</TableCell>
            <TableCell className="table_cell">Name</TableCell>
            <TableCell className="table_cell">Unit</TableCell>
            <TableCell className="table_cell">Ward</TableCell>
            <TableCell className="table_cell">Date of Registration</TableCell>
            <TableCell className="table_cell">Status</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell key={row.id} className="table_cell">
                {row.id}
              </TableCell>
              <TableCell key={row.user} className="table_cell">
                <div className="cell_wrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.user}
                </div>
              </TableCell>
              <TableCell key={row.unit} className="table_cell">
                {row.unit}
              </TableCell>
              <TableCell key={row.ward} className="table_cell">
                {row.ward}
              </TableCell>
              <TableCell key={row.date} className="table_cell">
                {row.date}
              </TableCell>
              <TableCell key={row.status} className="table_cell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default List;
