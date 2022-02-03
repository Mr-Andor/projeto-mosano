import { DataGrid, GridRowModel, GridColDef } from "@mui/x-data-grid";
import React from "react";
import styles from "../styles/UserDataTable.css";

export default function UserDataTable(props) {
  const rows = [
    { id: 1, col1: "Hello", col2: "World", col3: "...Maybe" },
    { id: 2, col1: "DataGridPro", col2: "is Awesome", col3: "...No" },
    { id: 3, col1: "MUI", col2: "is Amazing", col3: "...Kek" },
  ];

  const columns = [
    { field: "col1", headerName: "Column 1", width: 150 },
    { field: "col2", headerName: "Column 2", width: 150 },
    { field: "col3", headerName: "Column 3", width: 150 },
  ];

  return (
    <div className="UserDataTable">
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}
