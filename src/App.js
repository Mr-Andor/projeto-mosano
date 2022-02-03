import "./App.css";
import Box from "@mui/material/Box";
import React from "react";
import DataInput from "./components/DataInput";
import UserDataTable from "./components/UserDataTable";

const App = () => {
  let userData;
  let formSubmited = false;

  const getUserData = (params) => {
      
      userData = { ...userData, ...params };
      console.log(userData);
  };

  return (
    <div className="App">
      <Box
        sx={{
          width: 1000,
          height: 600,
          backgroundColor: "rgba(197, 202, 255, 1)",
          m: 4,
          border: 1.4,
          borderColor: "rgba(140, 150, 255, 1)",
        }}
      >
        <DataInput sendData={getUserData} />

        <UserDataTable />

        <div className="Author">
          <h3>André Lourenço</h3>
        </div>
      </Box>
    </div>
  );
};

export default App;
