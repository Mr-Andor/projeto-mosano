import "./App.css";
import Box from "@mui/material/Box";
import React, {useEffect, useState} from "react";
import DataInput from "./components/DataInput";
import UserDataTable from "./components/UserDataTable";
import MessageBox from "./components/MessageBox";
import { useGridApiEventHandler } from "@mui/x-data-grid";

const App = () => {
  let userData;

  const [isFormSubmited, setFormSubmited] = useState(false);

  const getUserData = (params) => {
    console.log(isFormSubmited)
    userData = { ...userData, ...params };

    if(!isFormSubmited)
    {
      setFormSubmited(true)
      userData.isSubmited = false;
      console.log(isFormSubmited)
    }
  };

  useEffect( () => { 
    if(isFormSubmited)
    {
      console.log(userData);
      //setFormSubmited(false);
    }
    
  }, [isFormSubmited]);
  

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
