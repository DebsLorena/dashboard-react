import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./TableStyle.css";

function createData(name, trackingId, date, status) {
    return { name, trackingId, date, status };
}

const rows = [
    createData("Cupcake", 18908421, "2 March 2022", "Delivered"),
    createData("Lasania Chiken Fri", 18908424, "2 March 2022", "Approved"),
    createData("Big Baza Bang ", 18908424, "2 March 2022", "Pending"),
    createData("Mouth Freshner", 18908424, "2 March 2022", "Approved"),
    createData("Cupcake", 18908421, "2 March 2022", "Delivered"),
];


const makeStyle = (status) => {
    if (status === 'Approved') {
        return {
            background: '#abf1da',
            color: 'green',
        }
    }
    else if (status === 'Pending') {
        return {
            background: '#faa8af',
            color: 'red',
        }
    }
    else {
        return {
            background: '#7380ec',
            color: 'white',
        }
    }
}

export default function BasicTable() {
    return (
        <div className="Table">
            <h3>Recent Orders</h3>
            <TableContainer
                component={Paper}
                style={{ boxShadow: "0px 10px 20px 0px #c8ccf0" }}
                            >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Product</TableCell>
                            <TableCell align="left">Tracking ID</TableCell>
                            <TableCell align="left">Date</TableCell>
                            <TableCell align="left">Status</TableCell>
                            <TableCell align="left"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody style={{ color: "white" }}>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="left">{row.trackingId}</TableCell>
                                <TableCell align="left">{row.date}</TableCell>
                                <TableCell align="left">
                                    <span className="status" style={makeStyle(row.status)}>{row.status}</span>
                                </TableCell>
                                <TableCell align="left" className="Details">Details</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}