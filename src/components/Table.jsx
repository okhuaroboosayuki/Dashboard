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
      img: "https://res.cloudinary.com/dg0sck16v/image/upload/v1681923544/Avatar/ayo-ogunseinde-sibVwORYqs0-unsplash_zarq04.jpg",
      user: "John Akpomera",
      unit: 12,
      ward: 1,
      date: new Date().toLocaleDateString(),
    },
    {
      id: 2235235,
      img: "https://res.cloudinary.com/dg0sck16v/image/upload/v1681923532/Avatar/luis-villasmil-hh3ViD0r0Rc-unsplash_vxmjqh.jpg",
      user: "Ndubiusi Offor",
      unit: 10,
      ward: 3,
      date: new Date().toLocaleDateString(),
    },
    {
      id: 2342353,
      img: "https://res.cloudinary.com/dg0sck16v/image/upload/v1681923553/Avatar/joseph-gonzalez-iFgRcqHznqg-unsplash_urvnxz.jpg",
      user: "John Iyamu",
      unit: 2,
      ward: 2,
      date: new Date().toLocaleDateString(),
    },
    {
      id: 2357741,
      img: "https://res.cloudinary.com/dg0sck16v/image/upload/v1681923762/Avatar/mustafa-omar-RGtSTDmmcCk-unsplash_qqhtqv.jpg",
      user: "Osasu Ogunrobo",
      unit: 1,
      ward: 1,
      date: new Date().toLocaleDateString(),
    },
    {
      id: 2342355,
      img: "https://res.cloudinary.com/dg0sck16v/image/upload/v1681923569/Avatar/ben-den-engelsen-YUu9UAcOKZ4-unsplash_vocbsp.jpg",
      user: "Harold Rhodes-Vivour",
      unit: 7,
      ward: 9,
      date: new Date().toLocaleDateString(),
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
                  <span>{row.user}</span>
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default List;
